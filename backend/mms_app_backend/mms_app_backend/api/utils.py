from fastapi.security import OAuth2PasswordBearer
from pydantic import BaseModel

from ..configs.database_config import SessionLocal


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


def get_token():
    return OAuth2PasswordBearer(tokenUrl="/users/login")


class ResponseModel(BaseModel):
    success: bool = False
    data: dict | None
    message: str | None


