import jwt, {JwtPayload} from "jsonwebtoken"
import {JWT_Secret} from "../config/environment";
import {Request, Response, NextFunction} from "express";

const verifyToken = (req: Request, res: Response, next: NextFunction) => {
    const token: string | undefined = req.headers["authorization"];
    const {userId} = req.params;
    if (!userId) {

        res.status(401).json({
            message: "no Userid In Params",
        });
        return;
    }
    if (!token) {

        res.status(401).json({
            message: "No token provided",
        });
        return;
    }
    const verified: JwtPayload = jwt.verify(token, JWT_Secret) as JwtPayload;
    if (!verified) {

        res.status(401).json({
            message: "Invalid token",
        });
        return;
    }
    if (typeof verified !== "object" || verified.userId !== userId) {

        res.status(401).json({
            message: "Not Matched User",
        });
        return;
    }


    next();
}

export default verifyToken;
