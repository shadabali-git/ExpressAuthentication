"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const environment_1 = require("../../config/environment");
const generateToken = (user) => {
    const payload = {
        userId: user._id,
        email: user.email,
    };
    //  return token
    return jsonwebtoken_1.default.sign(payload, environment_1.JWT_Secret, {
        expiresIn: environment_1.JWT_Expires,
    });
};
exports.default = generateToken;
