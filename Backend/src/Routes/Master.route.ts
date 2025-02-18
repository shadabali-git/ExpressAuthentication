import {Router} from 'express'

const route:Router=Router();

import CreateUserRoute from "./AuthenticationRoutes/CreateUser.route";
import DeleteUserRoute from "./AuthenticationRoutes/DeleteUser.route";
import LoginUserRoute from "./AuthenticationRoutes/LoginUser.route";

route.use('/v1/create',CreateUserRoute);
route.use('/v1/delete',DeleteUserRoute);
route.use('/v1/login',LoginUserRoute);

export  default route;
