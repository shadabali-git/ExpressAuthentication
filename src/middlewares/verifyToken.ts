import jwt from "jsonwebtoken"
import {JWT_Secret} from "../config/environment";
import {Request,Response,NextFunction} from "express";

const verifyToken= (req:Request,res:Response,next:NextFunction)=>{
          const token:string|undefined = req.headers["authorization"];
          if(!token){
             res.status(401).json({
                  message: "No token provided",
              });
             return ;
          }
          const verified= jwt.verify(token,JWT_Secret);
          if(!verified){
              res.status(401).json({
                  message: "Invalid token",
              });
              return ;
          }
          next();
}

export default verifyToken;
