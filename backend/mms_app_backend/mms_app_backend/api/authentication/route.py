from fastapi import APIRouter, Depends, Response, status
from sqlalchemy.orm import Session

from .constants import USED_EMAIL_MESSAGE, ACCOUNT_CREATED_MESSAGE, USED_USERNAME_MESSAGE, USER_NOT_FOUND_MESSAGE, \
    USER_LOGGED_IN_MESSAGE, INVALID_CREDENTIALS_MESSAGE, INVALID_OLD_AUTH_MESSAGE, \
    AUTH_CHANGE_SUCCESSFUL_MESSAGE
from .crud import get_user_by_email, create_user, get_user_by_username, change_password_crud
from .helpers import verify_password, create_access_token, verify_access_token
from .responses import CreateUserResponse, LoginUserResponse
from .schemas import UserCreate, UserLogin, PasswordChange
from ..account_management.constants import INVALID_USER_PARAMETER
from ..constants import GENERAL_ERROR_MESSAGE
from ..utils import get_db, get_token, ResponseModel

router = APIRouter()
post = router.post
patch = router.patch


@post("/v1/users", response_model=CreateUserResponse, status_code=status.HTTP_201_CREATED)
async def signup(user: UserCreate, response: Response, db: Session = Depends(get_db)) -> CreateUserResponse:
    """
    This endpoint validates the user email and creates and bcrypt encrypted password.
    This helps the user get started on the platform.
    """
    # The response for the signup request
    user_response = CreateUserResponse()
    # A check is a user with email exists
    email_exists = get_user_by_email(db, email=user.email)

    if email_exists:
        user_response.message = USED_EMAIL_MESSAGE
        response.status_code = status.HTTP_409_CONFLICT
        return user_response
    # A check is a user with username exists
    username_exists = get_user_by_username(db, username=user.username)
    if username_exists:
        user_response.message = USED_USERNAME_MESSAGE
        response.status_code = status.HTTP_409_CONFLICT
        return user_response
    created_user = create_user(db=db, user=user)
    if created_user:
        user_response.success = True
        user_response.data.user = created_user
        user_response.data.access_token = create_access_token({"sub": created_user.email})
        user_response.message = ACCOUNT_CREATED_MESSAGE
    else:
        user_response.message = GENERAL_ERROR_MESSAGE
        response.status_code = status.HTTP_400_BAD_REQUEST
    return user_response


@post("/v1/users/login", response_model=LoginUserResponse, status_code=status.HTTP_200_OK)
async def login(login_data: UserLogin, response: Response, db: Session = Depends(get_db)) -> LoginUserResponse:
    """
    This endpoint checks the user credentials and returns a JWT token for authenticated requests.
    """
    user_response = LoginUserResponse()
    db_user = get_user_by_email(db, email=login_data.email)
    if not db_user:
        user_response.message = USER_NOT_FOUND_MESSAGE
        response.status_code = status.HTTP_404_NOT_FOUND
        return user_response
    if not verify_password(login_data.password, db_user.hashed_password):
        user_response.message = INVALID_CREDENTIALS_MESSAGE
        response.status_code = status.HTTP_401_UNAUTHORIZED
        return user_response
    access_token = create_access_token(data={"sub": db_user.email})
    user_response.success = True
    user_response.data.access_token = access_token
    user_response.data.user = db_user
    user_response.message = USER_LOGGED_IN_MESSAGE
    return user_response


# Endpoint to change user's authenticated user's old password by creating a new one.
@patch('/v1/users/{user_id}/password', status_code=status.HTTP_200_OK, response_model=ResponseModel)
async def change_password(user_id: int, response: Response, password: PasswordChange, db: Session = Depends(get_db),
                          token: str = Depends(get_token())):
    password_response = ResponseModel()
    user = verify_access_token(db, token)
    if not user:
        password_response.message = INVALID_CREDENTIALS_MESSAGE
        response.status_code = status.HTTP_401_UNAUTHORIZED
        return password_response
    if user_id != user.id:
        password_response.message = INVALID_USER_PARAMETER
        response.status_code = status.HTTP_400_BAD_REQUEST
        return password_response

    if not verify_password(password.old_password, user.hashed_password):
        password_response.message = INVALID_OLD_AUTH_MESSAGE
        response.status_code = status.HTTP_401_UNAUTHORIZED
        return password_response

    if change_password_crud(db, user, password.new_password):
        password_response.success = True
        password_response.message = AUTH_CHANGE_SUCCESSFUL_MESSAGE
        return password_response
