import mongoose, {Schema} from "mongoose"
import type {UserType} from "../types/UserType"

const UserSchema: Schema = new Schema<UserType>({
    email: {
        type: String,
        unique: true,
        required: true,
        match: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    },
    email_verified: {
        type: Boolean,
        default: false,
    },
    username: {
        type: String,
        required: true,
        default: 'incognito',
    },
    given_name: {
        type: String,
        required: false,
        default: 'incognito',
    },
    family_name: {
        type: String,
        required: false,
        default: 'NA',
    },
    picture: {
        type: String,
        required: false,
        default: function () {
            return `https://avatar.iran.liara.run/username?username=${encodeURIComponent(this.username)}`;
        }
    },
    password: {
        type: String,
        required: false, // Make password optional for Google OAuth users
        minLength: 6,
        default: 'password',
    },
    googleId: {
        type: String,
        required: false,
        default: "NA"
    },
})

const UserModel = mongoose.model<UserType>("user", UserSchema)
export default UserModel
