import {Router} from 'express'
import userLoginController from "../../Controllers/Users/userLogin.controller";

const router = Router();


router.route('/user').post(userLoginController);

export default router