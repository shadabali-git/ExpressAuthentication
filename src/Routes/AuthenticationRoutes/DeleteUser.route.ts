import {Router} from 'express'
import DeleteUserController from "../../Controllers/Users/DeleteUser.controller";
const router=Router();
import verifyToken from '../../middlewares/verifyToken'

router.use(verifyToken)
router.route('/:username').delete(DeleteUserController);

export default router