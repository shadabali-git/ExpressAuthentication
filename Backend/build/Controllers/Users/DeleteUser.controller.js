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
const DeleteUser_service_1 = __importDefault(require("../../services/Authentication/DeleteUser.service"));
const DeleteUserController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userId } = req.params;
        yield (0, DeleteUser_service_1.default)(userId);
        res.status(200).json({ message: "Deleted Successfully" });
    }
    catch (e) {
        console.log("user Deletion Issue ", e);
        // @ts-ignore
        res.status(500).json({ message: e.message });
    }
});
exports.default = DeleteUserController;
