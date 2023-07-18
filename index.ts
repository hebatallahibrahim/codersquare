import express, { RequestHandler } from "express";
import { db } from "./server/datastore";

const App = express();

App.use(express.json());

  
const middlewareHandeler:RequestHandler=(request,response,next)=>{
    console.log("the new request",request.path,"-requestBody",request.body);
    next();
    
}
App.use(middlewareHandeler);

    

 App.get('/posts',(request,response)=>{
    response.send({posts :db.ListPosts()});
 })


 App.post('/posts',(request,response)=>{
    const post = request.body;
   db.createPost(post);
    response.sendStatus(200);
 })


App.listen(3000);