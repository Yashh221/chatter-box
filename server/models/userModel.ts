import mongoose from "mongoose";
import { Document , Schema } from "mongoose";

interface User extends Document{
    name:string,
    email:string,
    password:string,
    pic:string
}

const userSchema = new Schema<User>({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        unique:true,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    pic:{
        type:String,
        default:'https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg',
        required:true
    }
},
{
    timestamps:true
});

const UserModel = mongoose.model<User>("User",userSchema);
export default UserModel;