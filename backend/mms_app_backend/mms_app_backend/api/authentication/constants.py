from passlib.context import CryptContext

PASSWORD_CONTEXT = CryptContext(schemes=['bcrypt'])
USED_EMAIL_MESSAGE = "An account with that email already exists"
ACCOUNT_CREATED_MESSAGE = "User Account has been created successfully "
USED_USERNAME_MESSAGE = "An account with that username already exists"
USER_NOT_FOUND_MESSAGE = "User not found"
INVALID_CREDENTIALS_MESSAGE = "The passwod provided is not correct"
USER_LOGGED_IN_MESSAGE = "The user has logged In successfully"
INVALID_AUTHENTICATION_MESSAGE = "Your access token is invalid"
INVALID_OLD_AUTH_MESSAGE = "Your old password you entered is invalid"
AUTH_CHANGE_SUCCESSFUL_MESSAGE = "Your password was changed successfully"
