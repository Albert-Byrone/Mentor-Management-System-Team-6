from fastapi_camelcase import CamelModel
from pydantic import HttpUrl


class SocialLink(CamelModel):
    url: HttpUrl
    name: str

    class Config:
        orm_mode = True


class Location(CamelModel):
    city: str
    state: str
    country: str

    class Config:
        orm_mode = True


class BaseProfile(CamelModel):
    about: str
    website: HttpUrl
    social_links: list[SocialLink]
    location: Location

    class Config:
        orm_mode = True


class ViewProfile(BaseProfile):
    id: int
    username: str
    email: str
    firstname: str
    lastname: str
    is_mentor: bool = False
    is_mentor_manager: bool = False

    class Config:
        orm_mode = True


class CreateProfile(BaseProfile):
    class Config:
        orm_mode = True


class UpdateProfile(BaseProfile):
    about: str | None
    website: HttpUrl | None
    social_links: list[SocialLink] | None
    location: Location | None
