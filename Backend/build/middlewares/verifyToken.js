"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const environment_1 = require("../config/environment");
const verifyToken = (req, res, next) => {
    const token = req.headers["authorization"];
    const { userId } = req.params;
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
    const verified = jsonwebtoken_1.default.verify(token, environment_1.JWT_Secret);
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
};
exports.default = verifyToken;
