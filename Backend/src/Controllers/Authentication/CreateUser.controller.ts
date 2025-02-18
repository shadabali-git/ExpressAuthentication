import createUserService from "../../services/Authentication/createUser.service";
import {Request,Response} from 'express'
import {UserType} from "../../types/UserType";

const createUserController=async (req:Request,res:Response)=>{
    try{
        const UserInfo:UserType=req.body;
        const token:string=await createUserService(UserInfo);
        res.status(200).json({token:token});
    }
    catch (e){
        console.log("Error in user Controller",e);
        res.status(500).json(null)
    }
}

export  default createUserController;