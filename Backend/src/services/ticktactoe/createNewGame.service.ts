import GameModel from "../../Models/tictactoe/game.model";
import {Types} from "mongoose";

const CreateGame = async (userId: string,opponentId:string|null): Promise<Types.ObjectId | null> => {
    try {
        const response = await GameModel.create(
            {
                userId: userId,
                opponentId:opponentId || "68e48ee25e1a657ca767460d",
                lastUpdate: Date.now()
            });
        return response?._id || null;
    } catch (err) {
        console.error(err);
        return null;
    }

}

export default CreateGame;