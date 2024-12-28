import express from 'express'
import DeleteUserController from "../../Controllers/Users/DeleteUser.controller";
const router=express.Router();

router.route('/:username').delete(DeleteUserController);

export default router