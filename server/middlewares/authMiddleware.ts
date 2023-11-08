import jwt from "jsonwebtoken";
import User from "../models/userModel";
import asyncHandler from "express-async-handler";
import { Request ,Response, NextFunction } from "express";

interface CustomRequest extends Request{
    user?:string
}
export const protect = asyncHandler(async(req:CustomRequest,res:Response,next:NextFunction) => {
    let token: string | undefined;
    let decoded: { id: string } | undefined;

    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        try {
            token = req.headers.authorization.split(" ")[1];
            if(process.env.JWT_SECRET){
            decoded = jwt.verify(token,process.env.JWT_SECRET) as {id:string};
            }
            if(decoded){
                 req.user = (await User.findById(decoded.id).select("-password"))?.id;
            }
            next();
        } catch (error) {
            res.status(400);
            throw new Error("Not Authorized..Failed");
        }
    }
  
})