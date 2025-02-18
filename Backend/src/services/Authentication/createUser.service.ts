import UserModel from "../../Models/User.model";
import {UserType} from "../../types/UserType";
import hashPassword from "./hashpassword";
import generateToken from "./GenerateToken";

const createUserService = async (data: UserType) => {

    try {
        const NewPassword = await hashPassword(data.password)
        const newData = {...data, password: NewPassword}
        const res: UserType = await UserModel.create(newData);
        return generateToken(res);
    } catch (e) {
        console.error("Error creating user service:", e);
        throw new Error("User creation failed");
    }

}

export default createUserService;