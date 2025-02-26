"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const CreateUser_controller_1 = __importDefault(require("../../Controllers/Authentication/CreateUser.controller"));
const router = (0, express_1.Router)();
router.route('/user').post(CreateUser_controller_1.default);
exports.default = router;
