from .models import Profile
from ..authentication.models import User
from sqlalchemy.orm import Session
def check_is_mentor(profile:Profile)->bool:
    is_mentor = profile.mentor
    if is_mentor:
        return True
    return False

def check_is_mentor_manager(profile:Profile)->bool:
    is_mentor_manager = profile.mentor_manager
    if is_mentor_manager:
        return True
    return False

def check_profile_exists(db:Session,user:User)->bool:
    profile = db.query(Profile).filter_by(user_id=user.id).first()
    if profile :
        return True
    return False


