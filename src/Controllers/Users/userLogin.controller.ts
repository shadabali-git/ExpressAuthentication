import {Request ,Response} from "express";
import loginUserService from "../../services/Authentication/LoginUser.service";

const userLoginController= async (req:Request,res:Response): Promise<void> =>{
    try{
        const response=await loginUserService(req.body.email,req.body.password);
        if(!response.success){
            res.status(400).json(response);
            return;
        }
        res.status(200).json(response);

    }
    catch (e){
        console.log('Login User Error',e);
        res.status(500).json({message:'Error Login User'})
    }
}
export default userLoginController;