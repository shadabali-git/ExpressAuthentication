import {config} from 'dotenv'
config();

export const PORT:string|undefined|number=process.env.PORT
export const MongoURL: string= process.env.MONGO_URL??'mongodb://localhost:27017'
export const JWT_Secret:string=process.env.JWT_SECRET??'secret'
export const JWT_Expires:string=process.env.JWT_EXPIRES_IN??'1h'

