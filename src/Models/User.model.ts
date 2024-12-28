import mongoose,{Schema} from "mongoose";
import {UserType} from "../types/UserType"

const UserSchema:Schema=new Schema<UserType>({
     email:{
         type:String,
         unique: true,
         required: true,
         match:/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
     },
     username:{
         type:String,
         unique:true,
         required:true,
         minLength:4

     },
     password:{
         type:String,
         required:true,
         minLength:6
     }
})

const UserModel= mongoose.model<UserType>("user",UserSchema);
export default UserModel