import mongoose, {Schema} from "mongoose";
import {ProfileType} from "../types/ProfileType"

const ProfileSchema: Schema = new Schema<ProfileType>({
    coins: {
        type: Number,
        default: 0
    },
    UserId:
        {
            type: Schema.Types.ObjectId,
            ref: "user",
            required: true
        },
    GamesList:
        {
            type: [String],
            default: []
        },
})

const UserProfileInformationModel = mongoose.model<ProfileType>("UserProfile", ProfileSchema);
export default UserProfileInformationModel;