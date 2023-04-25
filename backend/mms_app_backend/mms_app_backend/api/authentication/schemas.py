from fastapi_camelcase import CamelModel
from pydantic import EmailStr


class UserBase(CamelModel):
    email: EmailStr
    username: str
    first_name: str
    last_name: str


class UserCreate(UserBase):
    password: str


class UserLogin(CamelModel):
    email: EmailStr
    password: str


class User(UserBase):
    id: int
    is_active: bool

    class Config:
        orm_mode = True


class PasswordChange(CamelModel):
    old_password: str
    new_password: str
