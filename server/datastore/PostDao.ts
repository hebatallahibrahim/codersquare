import { Post } from "../../types";

export interface PostDao{
    ListPosts():Post[];
    createPost(post:Post):void ;
    getPost(id:string):Post | undefined ;
    deletePost(id:string):void;



}