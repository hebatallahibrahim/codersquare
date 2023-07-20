import { db } from "../datastore";
import { Expresshandler, Post } from "../../types";
import crypto from 'crypto';
import { CreatePostRequest, CreatePostResponse, ListPostsRequest, ListPostsResponse } from "../Api";



export const listPostHandler:Expresshandler<ListPostsRequest,ListPostsResponse> = (request,response)=>{
  
    response.send({posts :db.ListPosts()});
 }



 export const createPostHandler:Expresshandler<CreatePostRequest,CreatePostResponse> =(request,response)=>{
    if(!request.body.title){
        return response.status(400).send('title is required,but missing')
    } 

    if(!request.body.title || !request.body.url || !request.body.userId){
        return response.sendStatus(400);
    }
    const post:Post ={
        id:crypto.randomUUID(),
        postedAt:Date.now(),
        title:request.body.title,
        url:request.body.url,
        userId:request.body.userId

    };
   db.createPost(post);
    response.sendStatus(200);
 }