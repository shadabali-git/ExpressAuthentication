import UserModel from "../../Models/User.model"
import type { UserType } from "../../types/UserType"
import hashPassword from "./hashpassword"
import generateToken from "./GenerateToken"

const createUserService = async (data: UserType) => {
    try {
        let newData = { ...data }

        if(!newData.email || !newData.password) {
            return null;
        }

        // Only hash password if it exists (for regular signup)
        if (data.password) {
            const NewPassword = await hashPassword(data.password)
            newData = { ...data, password: NewPassword }
        }

        const res: UserType = await UserModel.create(newData)
        return generateToken(res)
    } catch (e) {
        console.error("Error creating user service:", e)
        throw new Error("User creation failed")
    }
}

export default createUserService
