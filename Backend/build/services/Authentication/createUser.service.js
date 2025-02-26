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
const hashpassword_1 = __importDefault(require("./hashpassword"));
const GenerateToken_1 = __importDefault(require("./GenerateToken"));
const createUserService = (data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const NewPassword = yield (0, hashpassword_1.default)(data.password);
        const newData = Object.assign(Object.assign({}, data), { password: NewPassword });
        const res = yield User_model_1.default.create(newData);
        return (0, GenerateToken_1.default)(res);
    }
    catch (e) {
        console.error("Error creating user service:", e);
        throw new Error("User creation failed");
    }
});
exports.default = createUserService;
