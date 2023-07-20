import { Post } from "../types";
//Post Api
export interface ListPostsRequest{}
export interface ListPostsResponse{
    posts:Post[];
}
export type CreatePostRequest =Pick<Post,'title'|'userId'|"url">;
export interface CreatePostResponse {

   
}
export interface GetPostRequest{}
export interface GetPostResponse {
    post:Post
}