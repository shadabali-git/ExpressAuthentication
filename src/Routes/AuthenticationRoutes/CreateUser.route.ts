import {Router} from 'express'
import CreateUserController from "../../Controllers/Authentication/CreateUser.controller";

const router = Router();


router.route('/user').post(CreateUserController);

export default router