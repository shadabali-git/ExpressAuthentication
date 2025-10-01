import {Router} from 'express'
import DeleteUserController from "../../Controllers/Users/DeleteUser.controller";
const router=Router();
import verifyToken from '../../middlewares/verifyToken'

router.route('/').delete(verifyToken,DeleteUserController);

export default router