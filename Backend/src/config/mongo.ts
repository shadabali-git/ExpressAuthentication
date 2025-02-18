import mongoose from "mongoose";
import {MongoURL} from "./environment";


export  const mongo= async()=>{
     try{
         await mongoose.connect(MongoURL)
         console.log('Mongo Connected')
     }catch (e){
         console.log('Error in Mongo Db Connection',e);
     }
}