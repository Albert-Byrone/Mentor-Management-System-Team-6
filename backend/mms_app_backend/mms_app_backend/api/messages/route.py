from fastapi import APIRouter, status, Response, Depends, WebSocket
from sqlalchemy.orm import Session

from .constants import CONVERSATION_CREATED_SUCCESS_MESSAGE, GET_MESSAGES_SUCCESS_MESSAGE, EDIT_MESSAGE_SUCCESS_MESSAGE, \
    MESSAGE_NOT_FOUND_MESSAGE, MESSAGE_DEACTIVATED_SUCCESS_MESSAGE, GET_CONVERSATIONS_SUCCESS_MESSAGE
from .crud import create_conversation_crud, create_message_crud, get_messages_crud, edit_message_crud, \
    deactivate_message_crud, get_conversations_crud
from .models import Message
from .responses import ConversationResponse, MessagesResponse, ConversationsResponse, MessageResponse
from .schemas import CreateConversation, CreateMessage, EditMessage
from ..authentication.constants import INVALID_AUTHENTICATION_MESSAGE
from ..authentication.helpers import verify_access_token
from ..utils import get_token, get_db, get_token_ws

router = APIRouter()
get = router.get
post = router.post
delete = router.delete
patch = router.patch
websocket = router.websocket
connections = {

}


@get('/users/conversations', status_code=status.HTTP_200_OK, response_model=ConversationsResponse)
async def get_conversations(response: Response,
                            jwt_token: str = Depends(get_token()),
                            db: Session = Depends(get_db)):
    conversations_response = ConversationsResponse()
    user = verify_access_token(db, jwt_token)

    if not user:
        conversations_response.message = INVALID_AUTHENTICATION_MESSAGE
        response.status_code = status.HTTP_401_UNAUTHORIZED
        return conversations_response

    conversations = get_conversations_crud(db, user)

    conversations_response.message = GET_CONVERSATIONS_SUCCESS_MESSAGE
    conversations_response.data.conversations = conversations
    conversations_response.success = True
    return conversations_response


@post('/users/conversations', status_code=status.HTTP_201_CREATED, response_model=ConversationResponse)
async def create_conversation(conversation: CreateConversation, response: Response,
                              jwt_token: str = Depends(get_token()),
                              db: Session = Depends(get_db)):
    conversation_response = ConversationResponse()
    user = verify_access_token(db, jwt_token)

    if not user:
        conversation_response.message = INVALID_AUTHENTICATION_MESSAGE
        response.status_code = status.HTTP_401_UNAUTHORIZED
        return conversation_response

    created_conversation = create_conversation_crud(db, conversation)

    if created_conversation:
        conversation_response.message = CONVERSATION_CREATED_SUCCESS_MESSAGE
        conversation_response.data.conversation = created_conversation
        conversation_response.success = True
        return conversation_response


@websocket('/users/messages/ws')
async def message_subscription(connection: WebSocket, jwt_token: str = Depends(get_token_ws),
                               db: Session = Depends(get_db)):
    await connection.accept()
    user = verify_access_token(db, jwt_token)
    connections[f"{user.id}"] = connection
    while True:
        sender_message: CreateMessage = CreateMessage(**(await connection.receive_json()))
        created_message = create_message_crud(db, sender_message, user.id)
        response_connection = connections.get(f'{sender_message.receiver}')
        if response_connection:
            await response_connection.send_json(data=created_message.dict())


@get('/users/conversations/{conversation_id}/messages', status_code=status.HTTP_200_OK, response_model=MessagesResponse)
async def get_messages(response: Response, conversation_id: int, jwt_token: str = Depends(get_token()),
                       db: Session = Depends(get_db)):
    message_response = MessagesResponse()
    user = verify_access_token(db, jwt_token)
    if user is None:
        message_response.message = INVALID_AUTHENTICATION_MESSAGE
        response.status_code = status.HTTP_401_UNAUTHORIZED
        return message_response

    messages = get_messages_crud(db, conversation_id)
    print(messages)

    message_response.success = True
    message_response.data.messages = messages
    message_response.message = GET_MESSAGES_SUCCESS_MESSAGE
    return message_response


@patch('/users/conversations/{conversation_id}/messages/{message_id}', status_code=status.HTTP_200_OK,
       response_model=MessageResponse,
       )
async def edit_message(response: Response, conversation_id: int, message_id: int, changes: EditMessage,
                       jwt_token: str = Depends(get_token()),
                       db: Session = Depends(get_db)):
    message_response = MessagesResponse
    user = verify_access_token(db, jwt_token)
    message = db.query(Message).filter(Message.id == message_id).first()
    if message is None:
        message_response.message = MESSAGE_NOT_FOUND_MESSAGE
        return message_response
    if user is None:
        message_response.message = INVALID_AUTHENTICATION_MESSAGE
        response.status_code = status.HTTP_401_UNAUTHORIZED
        return message_response

    edited_message = edit_message_crud(db, message_id, changes)
    if edited_message:
        message_response.success = True
        message_response.message = EDIT_MESSAGE_SUCCESS_MESSAGE
        message_response.data = edited_message
        return message_response
    return message_response


@delete('/users/conversations/{conversation_id}/messages/{message_id}', status_code=status.HTTP_200_OK,
        response_model=MessageResponse)
async def deactivate_message(response: Response, conversation_id: int, message_id: int,
                             jwt_token: str = Depends(get_token()),
                             db: Session = Depends(get_db)):
    message_response = MessagesResponse
    user = verify_access_token(db, jwt_token)
    message = db.query(Message).filter(Message.id == message_id).first()
    if message is None:
        message_response.message = MESSAGE_NOT_FOUND_MESSAGE
        return message_response
    if user is None:
        message_response.message = INVALID_AUTHENTICATION_MESSAGE
        response.status_code = status.HTTP_401_UNAUTHORIZED
        return message_response

    deactivated_message = deactivate_message_crud(db, message_id)

    message_response.message = MESSAGE_DEACTIVATED_SUCCESS_MESSAGE
    message_response.success = True
    message_response.data = deactivated_message
    return message_response
