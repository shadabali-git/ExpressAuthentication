import { Board } from "../../Models/tictactoe/game.model";

const HumanMoveService = (
    x: number,
    y: number,
    board: Board
): Board|null => {
    if(board[x][y] != 0){
        return null;
    }
    board[x][y] = 1;
    return board;
};

export default HumanMoveService;