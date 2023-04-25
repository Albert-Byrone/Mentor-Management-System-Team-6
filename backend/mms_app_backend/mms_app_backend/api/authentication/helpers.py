import os
from jose import jwt
from .constants import PASSWORD_CONTEXT
from sqlalchemy.orm import Session
from dotenv import load_dotenv
from .models import User
#Load Environment variables from .env file to Enviroment
load_dotenv()
secret = os.environ['SECRET']


def verify_password(plain_password: str, hashed_password: str) -> bool:
    return PASSWORD_CONTEXT.verify(plain_password, hashed_password)


def get_password_hash(password: str) -> str:
    return PASSWORD_CONTEXT.hash(password)


def create_access_token(data: dict):
    return jwt.encode(data, secret, algorithm="HS256")

def decode_access_token(token: str)->str :
    return jwt.decode(token, secret, algorithms=["HS256"]).get('sub')
def verify_access_token(db:Session,token:str)->User|None:
    email = decode_access_token(token)
    return  db.query(User).filter(User.email == email).first()

