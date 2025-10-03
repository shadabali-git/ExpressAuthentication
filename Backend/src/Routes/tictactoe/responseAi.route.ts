import {Router} from 'express'

import MachineReponse from "../../Controllers/tictactoe/MachineVsHuman.controller";
const router = Router();


router.route('/ai').post(MachineReponse);

export default router