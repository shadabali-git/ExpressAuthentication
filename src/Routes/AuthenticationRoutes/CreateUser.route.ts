import express from 'express'
import CreateUserController from "../../Controllers/Authentication/CreateUser.controller";
const router=express.Router();



    router.route('/user').post(CreateUserController);

export default router