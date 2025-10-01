import {config} from 'dotenv'
config();

export const PORT:string|undefined|number=process.env.PORT
export const MongoURL: string= process.env.MONGO_URL??'mongodb://localhost:27017'
export const JWT_Secret:string=process.env.JWT_SECRET??'secret'
export const JWT_Expires:string=process.env.JWT_EXPIRES_IN??'1h'
export const GoogleClientID:string=process.env.GOOGLE_CLIENT_ID??''
export const GoogleClientSecret:string=process.env.GOOGLE_CLIENT_SECRET??''
export const FrontEndURL:string=process.env.VITE_FRONTEND_URL??'http://localhost:5174'
export const BackendURL:string=process.env.BACKEND_URL??'http://localhost:8080/api/auth/google/callback'