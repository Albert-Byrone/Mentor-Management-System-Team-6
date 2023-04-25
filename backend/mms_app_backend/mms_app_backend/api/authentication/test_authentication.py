from typing import TypedDict

from fastapi import status
from fastapi.testclient import TestClient
from sqlalchemy.orm import Session

from .constants import ACCOUNT_CREATED_MESSAGE
from .helpers import verify_password
from .models import User as UserModel
from .responses import CreateUserResponse, UserData
from .schemas import User
from ...configs.database_config import engine
from ....main import app


def delete_test_user(user_id: int) -> None:
    with Session(engine) as session:
        session.query(UserModel).filter(UserModel.id == user_id).delete()
        session.commit()


class SignUpData(TypedDict):
    username: str
    email: str
    password: str
    first_name: str
    last_name: str


userbase = {
    'id': 1,
    "username": "test",
    "email": "ychag@example.com",
    "first_name": "test",
    "last_name": "test",
    "is_active": True,
}
user_success_data: UserData = UserData(user=User(**userbase))

successful_signup_response: CreateUserResponse = CreateUserResponse(success=True, message=ACCOUNT_CREATED_MESSAGE,
                                                                    data=user_success_data)

client = TestClient(app)
post = client.post
get = client.get

data: SignUpData = {
    "username": "test_pytest",
    "email": "ychag@example.com",
    "password": "test",
    "first_name": "test",
    "last_name": "test"
}


def test_signup_noget():
    get_response = get('/v1/users')
    assert get_response.status_code == status.HTTP_405_METHOD_NOT_ALLOWED
    assert get_response.json() == {"detail": "Method Not Allowed"}


def test_user_signup():
    user_id: int = int()
    try:
        post_response = post('/v1/users', json=data)
        user_id = post_response.json().get('data').get('user').get('id')
        assert post_response.json().get('success') == True
        assert post_response.status_code == status.HTTP_201_CREATED
        access_token = post_response.json().get('data').get('access_token')
        successful_signup_response.data.user.id = user_id
        successful_signup_response.data.access_token = access_token
        assert successful_signup_response.dict() == post_response.json()
        delete_test_user(user_id)
    except AssertionError:
        delete_test_user(user_id)


def test_unique_email():
    user_id: int = int()
    try:
        response = post('/v1/users',
                        json=data)
        print(response)
        user_email: str = response.json().get('data').get('user').get('email')

        user_id = response.json().get('data').get('user').get('id')
        with Session(engine) as session:
            query = session.query(UserModel).filter(UserModel.email == user_email)
            assert query.count() == 1

        new_data = data.copy()
        new_data['username'] = "second name"
        response = post('/user/signup', json=new_data)
        assert response.status_code == status.HTTP_409_CONFLICT
        assert response.json().get('success') == False
        with Session(engine) as session:
            session.query(UserModel).filter(UserModel.id == user_id).delete()
            session.commit()
    except AssertionError:
        delete_test_user(user_id)


def test_encrypted_password():
    user_id: int = int()
    try:
        post_response = post('/v1/users', json=data)
        assert post_response.json().get('success') == True
        assert post_response.status_code == status.HTTP_201_CREATED
        user_id = post_response.json().get('data').get('user').get('id')
        successful_signup_response.data.user.id = user_id
        assert successful_signup_response.dict() == post_response.json()
        with Session(engine) as session:
            password = session.query(UserModel).filter(UserModel.id == user_id).first().hashed_password
            assert verify_password(data.get('password'), password)
            session.query(UserModel).filter(UserModel.id == user_id).delete()
            session.commit()
    except AssertionError:
        delete_test_user(user_id)


def test_login():
    # Test case 1: User not found
    response = post("/user/login", json={"email": "invalidemail@example.com", "password": "password"})
    assert response.status_code == 404
    assert response.json()["success"] == False
    assert response.json().get("data").get('access_token') is None
    assert response.json().get('data').get('user') is None
    assert response.json()["message"] == "User not found"
    # Test case 2: Incorrect password
    # Create a new user before testing this case.
    # This case requires a valid email address
    response = post("/user/login", json={"email": "user@example.com", "password": "wronpassword"})
    assert response.status_code == 401
    assert response.json()["success"] == False
    assert "access_token" not in response.json()["data"]
    assert "user" not in response.json()["data"]
    assert response.json()["message"] == "The passwod provided is not correct"
    # Test case 1: Successful login
    #Test case requires a valid user in login
    response = client.post("/user/login", json={"email": "user@example.com", "password": "string"})
    assert response.status_code == 200
    assert response.json()["success"] == True
    assert "access_token" in response.json()["data"]
    assert "user" in response.json()["data"]
    assert response.json()["message"] == "The access_token has been created and user has logged In successfully"
