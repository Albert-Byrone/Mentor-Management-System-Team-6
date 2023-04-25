from fastapi_camelcase import CamelModel

from .schemas import ViewProfile
from ..utils import ResponseModel


class ProfileData(CamelModel):
    profile: ViewProfile | None


class CreateProfileResponse(ResponseModel):
    data: ProfileData = ProfileData()
