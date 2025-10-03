import GameModel, {Player} from "../../Models/tictactoe/game.model";
import CreateGame from "./createNewGame.service";
import {getBestMove} from "./minimaxAlgo.service";

const AiResponseOnHumanMoveService = async (userId: string, x: Player, y: Player) => {

    try {

        await CreateGame(userId);
        const game = await GameModel.findOne({userId: userId});
        if (!game) {
            return [-1, -1];
        }
        const board = game.board;
        board[x][y] = 1;
        const [a1, b1] = getBestMove(board);
        board[a1][b1] = 2;

        await GameModel.findOneAndUpdate(
            {userId: userId},
            {$set: {board: board}},
            {new: true})
        // console.log(board);

        return [a1, b1];
    } catch (err) {
        console.error(err);
        return [-1, -1];
    }

}

export default AiResponseOnHumanMoveService;