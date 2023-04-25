from sqlalchemy.orm import Session

from .helpers import check_is_mentor_manager, check_is_mentor
from .models import Profile, SocialLink, Location
from .schemas import ViewProfile, CreateProfile, UpdateProfile
from ..authentication.models import User


def create_profile_crud(db: Session, profile: CreateProfile, user: User):
    user_id = user.id

    profile_instance = Profile(about=profile.about, website=profile.website, user_id=user_id)
    db.add(profile_instance)
    db.commit()
    db.refresh(profile_instance)
    profile_instance = db.query(Profile).filter(Profile.user_id == user.id).first()

    location = Location(profile_id=profile_instance.id, city=profile.location.city, state=profile.location.state,
                        country=profile.location.country)

    db.add(location)
    for link in profile.social_links:
        social_link = SocialLink(profile_id=profile_instance.id, name=link.name, url=link.url)

        db.add(social_link)
    is_mentor = check_is_mentor(profile_instance)
    is_mentor_manager = check_is_mentor_manager(profile_instance)
    db.commit()
    db.refresh(profile_instance)
    return ViewProfile(id=profile.id, about=profile.about, website=profile.website, social_links=profile.social_links,
                       location=profile.location, is_mentor=is_mentor, is_mentor_manager=is_mentor_manager,
                       user_id=user_id, username=user.username, firstname=user.first_name, lastname=user.last_name,
                       email=user.email

                       )


def get_profile_crud(db: Session, user: User):
    profile = db.query(Profile).filter(Profile.user_id == user.id).first()
    return ViewProfile(id=profile.id, about=profile.about, website=profile.website, social_links=profile.social_links,
                       location=profile.location, is_mentor=check_is_mentor(profile),
                       is_mentor_manager=check_is_mentor_manager(profile),
                       user_id=user.id, username=user.username, firstname=user.first_name, lastname=user.last_name,
                       email=user.email)


def update_profile_crud(db: Session, user: User, profile: UpdateProfile):
    profile_instance = db.query(Profile).filter(Profile.user_id == user.id).first()
    if profile.about:
        profile_instance.about = profile.about
    if profile.website:
        profile_instance.website = profile.website
    if profile.social_links:
        for link in profile.social_links:
            social_link = db.query(SocialLink).filter(SocialLink.profile_id == profile_instance.id).filter(
                SocialLink.name == link.name).first()
            if social_link:
                social_link.url = link.url
            else:
                social_link = SocialLink(profile_id=profile_instance.id, name=link.name, url=link.url)
            db.add(social_link)
            db.commit()
            db.refresh(social_link)
    if profile.location:
        location = db.query(Location).filter(Location.profile_id == profile_instance.id).filter(
            Location.city == profile.location.city).filter(Location.state == profile.location.state).filter(
            Location.country == profile.location.country).first()
        if location:
            location.city = profile.location.city
            location.state = profile.location.state
            location.country = profile.location.country
        else:
            location = Location(profile_id=profile_instance.id, city=profile.location.city,
                                state=profile.location.state,
                                country=profile.location.country)
        db.add(location)
        db.commit()
        db.refresh(location)
    profile_instance = db.query(Profile).filter(Profile.user_id == user.id).first()
    return ViewProfile(
        id=profile_instance.id,
        firstname=user.first_name,
        lastname=user.last_name,
        username=user.username,
        email=user.email,
        about=profile_instance.about,
        website=profile_instance.website,
        social_links=profile_instance.social_links,
        location=profile_instance.location,
        is_mentor=check_is_mentor(profile_instance),
        is_mentor_manager=check_is_mentor_manager(profile_instance)
    )
