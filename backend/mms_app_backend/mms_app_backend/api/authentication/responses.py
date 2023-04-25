from pydantic import BaseModel

from .schemas import User
from ..utils import ResponseModel


class UserData(BaseModel):
    user: User | None
    access_token: str | None


class CreateUserResponse(ResponseModel):
    data: UserData = UserData()


class LoginUserResponse(ResponseModel):
    data: UserData = UserData()
