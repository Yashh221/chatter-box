import { chats } from "./dummyData/data";
import express, {Express, Request, Response } from "express";


const app : Express = express();
const PORT = 5000;
app.listen(PORT,()=>{
    console.log(`Port is listening at ${PORT}`)
})
app.get("/api/chats",(req:Request,res:Response)=>{
    res.send(chats)
    console.log(req)
})