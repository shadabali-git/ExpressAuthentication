"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const DeleteUser_controller_1 = __importDefault(require("../../Controllers/Users/DeleteUser.controller"));
const router = (0, express_1.Router)();
const verifyToken_1 = __importDefault(require("../../middlewares/verifyToken"));
router.route('/:userId').delete(verifyToken_1.default, DeleteUser_controller_1.default);
exports.default = router;
