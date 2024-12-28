import express,{Router} from 'express'

const route:Router=express.Router();

import CreateUserRoute from "./AuthenticationRoutes/CreateUser.route";

route.use('/v1',CreateUserRoute);

export  default route;
