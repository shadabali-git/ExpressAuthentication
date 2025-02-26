import bcrypt from "bcrypt";
import {UserType} from "../../types/UserType";
import UserModel from "../../Models/User.model";
import generateToken from "./GenerateToken";

const loginUserService=async (email:string|undefined,password:string|undefined)=>{
    try{
        if(!email || !password ){
            return {success:false,message:'User Details not found'};
        }
        const user:UserType|null=await UserModel.findOne({email:email});
        if(!user){
            return { success: false, message: "User not found" };
        }

        const check=await bcrypt.compare(password,user.password)
        if(!check){
            return { success: false, message: "Password does not match" };
        }

        return { success: true, message: "Login successful",token:generateToken(user),userDetails:user };
    }
    catch (e){
        console.log('User login Service error',e)
        return { success: false, message: "An error occurred" };
    }
}
export default loginUserService;