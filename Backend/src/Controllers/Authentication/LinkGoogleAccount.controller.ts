import type { Request, Response } from "express"
import UserModel from "../../Models/User.model"
import jwt from "jsonwebtoken"
import { JWT_Secret } from "../../config/environment"

const linkGoogleAccountController = async (req: Request, res: Response) => {
    try {
        const { googleId } = req.body
        const token = req.headers.authorization?.split(" ")[1]

        if (!token) {
            res.status(401).json({ message: "No token provided" })
            return

        }

        if (!googleId) {
            res.status(400).json({ message: "Google ID is required" })
            return

        }

        const decoded: any = jwt.verify(token, JWT_Secret)
        const user = await UserModel.findById(decoded.userId)

        if (!user) {
            res.status(404).json({ message: "User not found" })
            return
        }

        // Check if Google ID is already linked to another account
        const existingGoogleUser = await UserModel.findOne({ googleId: googleId })
        if (existingGoogleUser && existingGoogleUser._id.toString() !== user._id.toString()) {
            res.status(400).json({ message: "Google account is already linked to another user" })
            return
        }

        // Link Google account
        user.googleId = googleId
        await user.save()

        res.status(200).json({
            message: "Google account linked successfully",
            user: {
                id: user._id,
                email: user.email,
                username: user.username,
                googleId: user.googleId,
            },
        })
    } catch (error) {
        console.error("Link Google account error:", error)
        res.status(500).json({ message: "Internal server error" })
    }
}

export default linkGoogleAccountController
