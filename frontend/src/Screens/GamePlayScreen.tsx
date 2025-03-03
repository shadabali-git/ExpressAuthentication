import React from 'react';
import Board from "@/components/Design/Board.tsx";
import {Button} from "@/components/ui/button.tsx";

const GamePlayScreen:React.FC = () => {
    const [board, setBoard] = React.useState<(string | null)[]>(Array(9).fill(null));
    const [user, setUser] = React.useState<1|2>(1);

    const checkWinner = (board: (string | null)[]) => {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];
        for (const i of lines) {
            const [a, b, c] = i;
            if (board[a] && board[a] === board[b] && board[a] === board[c]) {
                return i;
            }
        }
        return null;

    }
    const resetGame = () => {
        setBoard(Array(9).fill(null));
        setUser(1);
    }
    const boardFull = (board: (string | null)[]) => {
        for (const i of board) {
            if (i === null) {
                return false;
            }
        }
        return true;
    }
    const handleClick = (index: number) => {

        const newBoard = board;
        if(board[index] == null) {

            if(user === 1) {
                newBoard[index] = "X";
                setUser(2);
            }
            else {
                newBoard[index] = "O";
                setUser(1);
            }

        }
        const winner = checkWinner(newBoard);
        if(winner) {
            console.log("Winner is ", board[winner[0]]);
        }
        if(boardFull(newBoard)) {
            console.log("Game is Draw");
        }
        setBoard(newBoard);



    }
    return (
        <div className={`flex-1 min-h-screen bg-rose-100 `}>
            <h1 className={`text-2xl py-2 font-extrabold`}> Keep Secret</h1>
            <div className={`flex justify-between`}>

                <div className={`w-96 bg-orange-100`}>

                    <Button variant={`outline`}> Guest Mode </Button>

                </div>
                <div>
                    <Board board={board} onClick={handleClick}/>
                    <button onClick={resetGame}>Reset Game</button>
                </div>
                <div className={`w-96 bg-orange-100`}>

                    <Button variant={`outline`}> Guest Mode </Button>

                </div>
            </div>
        </div>
    );
}
export default GamePlayScreen;