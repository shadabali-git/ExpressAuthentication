import mongoose, { Schema } from "mongoose"
import type { UserType } from "../types/UserType"

const UserSchema: Schema = new Schema<UserType>({
    email: {
        type: String,
        unique: true,
        required: true,
        match: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    },
    username: {
        type: String,
        unique: true,
        required: true,
        minLength: 4,
    },
    password: {
        type: String,
        required: false, // Make password optional for Google OAuth users
        minLength: 6,
    },
    googleId: {
        type: String,
        required: false,
        unique: true,
        sparse: true,
    },
})

const UserModel = mongoose.model<UserType>("user", UserSchema)
export default UserModel
