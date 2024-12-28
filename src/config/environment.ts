import env from 'dotenv'
env.config();

export const PORT:string|undefined|number=process.env.PORT
export const MongoURL: string= process.env.MONGO_URL??'mongodb://localhost:27017'

