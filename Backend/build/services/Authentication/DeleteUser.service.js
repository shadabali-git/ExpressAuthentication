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
const User_model_1 = __importDefault(require("../../Models/User.model"));
const deleteUserService = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const res = yield User_model_1.default.deleteOne({ _id: userId });
        if (res.deletedCount === 0) {
            throw new Error("Cannot find userid");
        }
        return res;
    }
    catch (e) {
        console.log("user Deletion Issue ", e);
        throw new Error('Cannot Delete User');
    }
});
exports.default = deleteUserService;
