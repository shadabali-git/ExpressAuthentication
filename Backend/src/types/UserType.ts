import {Document} from "mongoose";

export interface UserType extends Document{
    email:string,
    username:string,
    password:string,
    googleId?: string
    _id:string,
    __v: number
}