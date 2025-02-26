"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const route = (0, express_1.Router)();
const CreateUser_route_1 = __importDefault(require("./AuthenticationRoutes/CreateUser.route"));
const DeleteUser_route_1 = __importDefault(require("./AuthenticationRoutes/DeleteUser.route"));
const LoginUser_route_1 = __importDefault(require("./AuthenticationRoutes/LoginUser.route"));
const GetUserDetailsUsingToken_route_1 = __importDefault(require("./AuthenticationRoutes/GetUserDetailsUsingToken.route"));
route.use('/v1/create', CreateUser_route_1.default);
route.use('/v1/delete', DeleteUser_route_1.default);
route.use('/v1/login', LoginUser_route_1.default);
route.use('/v1/get', GetUserDetailsUsingToken_route_1.default);
exports.default = route;
