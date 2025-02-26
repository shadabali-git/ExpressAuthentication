"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcrypt_1 = __importDefault(require("bcrypt"));
const User_model_1 = __importDefault(require("../../Models/User.model"));
const GenerateToken_1 = __importDefault(require("./GenerateToken"));
const loginUserService = (email, password) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (!email || !password) {
            return { success: false, message: 'User Details not found' };
        }
        const user = yield User_model_1.default.findOne({ email: email });
        if (!user) {
            return { success: false, message: "User not found" };
        }
        const check = yield bcrypt_1.default.compare(password, user.password);
        if (!check) {
            return { success: false, message: "Password does not match" };
        }
        return { success: true, message: "Login successful", token: (0, GenerateToken_1.default)(user), userDetails: user };
    }
    catch (e) {
        console.log('User login Service error', e);
        return { success: false, message: "An error occurred" };
    }
});
exports.default = loginUserService;
