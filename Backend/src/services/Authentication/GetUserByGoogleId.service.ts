import UserModel from "../../Models/User.model"
import type { UserType } from "../../types/UserType"

const getUserByGoogleIdService = async (googleId: string): Promise<UserType | null> => {
    try {
        const user: UserType | null = await UserModel.findOne({ googleId: googleId })
        return user
    } catch (e) {
        console.error("Error getting user by Google ID:", e)
        throw new Error("Failed to get user by Google ID")
    }
}

export default getUserByGoogleIdService
