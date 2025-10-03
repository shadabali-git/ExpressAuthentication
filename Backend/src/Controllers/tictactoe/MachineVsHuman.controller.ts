import {Request, Response} from 'express'
import AiResponseOnHumanMoveService from "../../services/ticktactoe/AiResponseOnHumanMove.service";

const MachineReponse = async (req: Request, res: Response) => {
    try {
        const {userId, x, y} = req.body;
        if (!userId || !x || !y) {
            res.status(400).json({message: "User not found"});
            return;
        }
        const [a1, b1] =await AiResponseOnHumanMoveService(userId, x, y);
        if (a1 == -1 || b1 == -1) {
            res.status(400).json({message: "Not A Valid Move"});
            return;
        }
        res.status(200).json({message: "Successfully Updated User", move: [a1, b1]});

    } catch (err) {
        res.status(400).json({
            message: 'Error occurred',
            value: [-1, -1]
        })
    }

}
export default MachineReponse;