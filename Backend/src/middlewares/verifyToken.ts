import jwt, {JwtPayload} from "jsonwebtoken"
import {JWT_Secret} from "../config/environment";
import {Request, Response, NextFunction} from "express";

const verifyToken = (req: Request, res: Response, next: NextFunction) => {
    const authorized = req.headers["authorization"];
    const token : string|undefined=authorized?.split(" ")[1];
    if (!token) {
        res.status(401).json({
            message: "No token provided",
        });
        return;
    }
    const verified: JwtPayload = jwt.verify(token, JWT_Secret) as JwtPayload;
    if (!verified || typeof verified !== "object") {
         res.status(401).json({message: "Invalid token"});
         return;
    }
    (req as any).userId = verified.userId;
    next();

}

export default verifyToken;
