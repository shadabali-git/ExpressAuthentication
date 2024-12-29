import jwt from "jsonwebtoken";
import {JWT_Expires, JWT_Secret} from '../../config/environment'
import {UserType} from "../../types/UserType";

const generateToken = (user:UserType) => {

    const payload = {
        userId: user._id,
        email: user.email,
    };
    //  return token
    return jwt.sign(payload, JWT_Secret, {
        expiresIn: JWT_Expires,
    });
};
export default generateToken
