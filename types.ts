import { RequestHandler } from "express";

export interface User {
    id:string;
    firstName:string;
    lastName:string;
    username:string;
    email:string;
    password:string;
}


export interface Post{
    id:string;
    title:string;
    url:string;
    userId:string;
    postedAt:number;
}

export interface Like{
    userId:number;
    postId:number;

}

export interface Comment{
    id:string;
    userId:string;
    postId:string;
    comment:string;
    postedAt:number;
}


export type Expresshandler <Req,Res>=RequestHandler<
String,
Partial<Res>,
Partial<Req>,
any>;