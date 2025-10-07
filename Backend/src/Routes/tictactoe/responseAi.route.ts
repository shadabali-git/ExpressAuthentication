import {Router} from 'express'

import MachineResponse from "../../Controllers/tictactoe/BotVsHuman.controller";
import createNewBotGameController from "../../Controllers/tictactoe/CreateNewBotGame.controller";
import verifyToken from "../../middlewares/verifyToken";
const router = Router();


router.route('/bot/:gameid').post(MachineResponse);
router.route('/create').post(verifyToken,createNewBotGameController);

export default router