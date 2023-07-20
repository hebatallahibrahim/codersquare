import express, { ErrorRequestHandler, RequestHandler } from "express";
import { db } from "./server/datastore";
import { createPostHandler, listPostHandler } from "./server/handlers/postHandler";

const App = express();

App.use(express.json());

  
const middlewareHandeler:RequestHandler=(request,response,next)=>{
    console.log("the new request",request.path,"-requestBody",request.body);
    next();
    
}
App.use(middlewareHandeler);

    

 App.get('/v1/posts',listPostHandler)


 App.post('/v1/posts',createPostHandler)

 const errorHandler: ErrorRequestHandler = (err,req,res,next)=>{
    console.log('uncaught exception:',err);
    res.status(500).send('Oops ,an unexpected error occured ,please try again');

    
 }
 App.use(errorHandler);
App.listen(3000);