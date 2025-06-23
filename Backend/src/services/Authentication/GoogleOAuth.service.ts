import UserModel from "../../Models/User.model"
import type { UserType } from "../../types/UserType"
import generateToken from "./GenerateToken"

const googleOAuthService = async (profile: any) => {
    try {
        // Check if user already exists with this Google ID
        let user: UserType | null = await UserModel.findOne({ googleId: profile.id })

        if (user) {
            // User exists, return token
            return generateToken(user)
        }

        // Check if user exists with this email (from regular signup)
        user = await UserModel.findOne({ email: profile.emails[0].value })

        if (user) {
            // User exists with email but no Google ID, link the accounts
            user.googleId = profile.id
            await user.save()
            return generateToken(user)
        }

        // Create new user
        const newUser: UserType = await UserModel.create({
            email: profile.emails[0].value,
            username: profile.displayName || profile.emails[0].value.split("@")[0],
            googleId: profile.id,
            // No password needed for Google OAuth users
        })

        return generateToken(newUser)
    } catch (e) {
        console.error("Error in Google OAuth service:", e)
        throw new Error("Google OAuth authentication failed")
    }
}

export default googleOAuthService
