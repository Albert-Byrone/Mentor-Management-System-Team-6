
from fastapi_camelcase import CamelModel
from .schemas import GetPost, GetComment
from mms_app_backend.api.utils import ResponseModel
from typing import List


class CreatePostData(CamelModel):
    post: GetPost | None


class CreatePostResponse(ResponseModel):
    data: CreatePostData = CreatePostData()


class GetPostsData(CamelModel):
    posts: List[GetPost] | None


class GetPostResponse(ResponseModel):
    data: GetPostsData = GetPostsData()


class CreateCommentData(CamelModel):
    comment: GetComment | None


class CreateCommentResponse(ResponseModel):
    data: CreateCommentData = CreateCommentData()


class GetCommentsData(CamelModel):
    posts: List[GetComment] | None


class GetCommentsResponse(ResponseModel):
    data: GetCommentsData = GetCommentsData()

