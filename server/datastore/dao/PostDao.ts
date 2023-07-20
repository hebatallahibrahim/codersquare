import { Post } from "../../../types";

export interface PostDao{
    ListPosts():Post[];
    createPost(post:Post):Promise<void> ;
    getPost(id:string):Promise<Post | undefined> ;
    deletePost(id:string):Promise<void> ;



}