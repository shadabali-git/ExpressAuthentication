import {Router} from 'express'

import MachineReponse from "../../Controllers/tictactoe/BotVsHuman.controller";
const router = Router();


router.route('/ai').post(MachineReponse);

export default router