import {Request, Response, Router} from "express";
import {JWT_Secret} from "../../config/environment"
import jwt from "jsonwebtoken";
import UserModel from "../../Models/User.model";
const router = Router();

router.get('/user', async (req: Request, res: Response) => {
    try {
        const token = req.headers.authorization?.split(' ')[1];
        if (token) {
            const decoded: any = jwt.verify(token, JWT_Secret);
            if (decoded) {
                const user = await UserModel.findOne({email: decoded.email});
                res.status(200).json({userDetails: user});
            }
        } else {
            res.status(401).json({message: 'Unauthorized'})
        }
    } catch (e) {
        console.log('Get User Details error', e)
        res.status(500).json({message: "An error occurred"})
    }
});

export default router
