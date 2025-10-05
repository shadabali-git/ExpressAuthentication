import type {Board, Player} from "../../Models/tictactoe/game.model";
import {getBestMove} from "./minimaxAlgo.service";

export const isPlayer = (n: number): n is Player => n === 0 || n === 1 || n === 2;

const BotMovesService = (board: Board): [Player, Player] | null => {

    const [a1, b1] = getBestMove(board);
    board[a1][b1] = 2;
    if (!isPlayer(a1) || !isPlayer(b1)) {
        return null;
    }
    return [a1, b1];
}

export default BotMovesService;