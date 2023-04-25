from sqlalchemy import Boolean, Column, String
from sqlalchemy.orm import relationship
from sqlalchemy_utils import EmailType

from ..models import AbstractBaseModel


class User(AbstractBaseModel):
    __tablename__ = "users"
    username = Column(String, unique=True, index=True)
    first_name = Column(String)
    last_name = Column(String)
    email = Column(EmailType, unique=True, index=True)
    hashed_password = Column(String)
    is_active = Column(Boolean, default=True)
    profile = relationship("Profile", back_populates='user')
