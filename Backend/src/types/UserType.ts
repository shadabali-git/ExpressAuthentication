import {Document} from "mongoose";

export interface UserType extends Document{
    email:string,
    email_verified:boolean
    name:string,
    given_name:string,
    family_name:string,
    picture:string,
    username:string,
    password:string,
    googleId?: string
    _id:string,
    __v: number
}