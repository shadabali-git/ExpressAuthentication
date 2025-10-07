import CreateGame from "../../services/ticktactoe/createNewGame.service";
import {Request, Response} from "express";

const createNewBotGameController=async (req:Request, res:Response) => {
     try{
         const userId = (req as any).userId;
         const opponentId = req.body.opponentId;
         if(!userId){
             res.status(400).json({error: "Invalid user id"});
             return;
         }
         const response=await CreateGame(userId,opponentId);
         if (!response) {
             res.status(400).json({message: "Creation Taking Time or Error"})
             return;
         }
         res.status(200).json({message: "Created Successfully",gameId:response})


     }catch(err){
         res.status(400).json({message: "Game not Created"});
         return;
     }
}

export default createNewBotGameController;