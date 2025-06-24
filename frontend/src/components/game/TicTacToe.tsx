import React, { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "@/hooks/redux";
import { makeMove, resetGame, setGameMode, aiMove } from "@/redux/features/GameSlice";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import clsx from "clsx";

const TicTacToe: React.FC = () => {
    const { board, next, winner, mode } = useAppSelector((state) => state.game);
    const dispatch = useAppDispatch();

    const handleClick = (index: number) => {
        if (!board[index] && !winner) {
            dispatch(makeMove({ index, player: next! }));
        }
    };

    useEffect(() => {
        if (mode === "ai" && next === "O" && !winner) {
            const timeout = setTimeout(() => dispatch(aiMove()), 300);
            return () => clearTimeout(timeout);
        }
    }, [next, winner, mode, dispatch]);

    return (
        <div className="flex items-center justify-center flex-1">
            <Card className="w-full max-w-sm shadow-xl">
                <CardContent className="flex flex-col items-center gap-4 pt-6">
                    <h2 className="text-2xl font-semibold text-center">Tic Tac Toe</h2>
                    <div className="grid grid-cols-3 gap-2">
                        {board.map((cell, index) => (
                            <div
                                key={index}
                                onClick={() => handleClick(index)}
                                className={clsx(
                                    "w-20 h-20 border text-3xl flex items-center justify-center font-bold cursor-pointer rounded-md transition-all",
                                    cell === "X"
                                        ? "text-blue-600 border-blue-400 bg-blue-100"
                                        : cell === "O"
                                            ? "text-rose-600 border-rose-400 bg-rose-100"
                                            : "text-gray-800 border-gray-300 bg-white hover:bg-gray-100"
                                )}
                            >
                                {cell}
                            </div>
                        ))}
                    </div>

                    <div className="text-lg font-medium mt-2">
                        {winner
                            ? winner === "draw"
                                ? "It's a Draw!"
                                : `Winner: ${winner}`
                            : `Next Turn: ${next}`}
                    </div>

                    <div className="flex gap-2 mt-4">
                        <Button variant="default" onClick={() => dispatch(resetGame())}>
                            Reset
                        </Button>
                        <Button variant={mode === "human" ? "secondary" : "outline"} onClick={() => dispatch(setGameMode("human"))}>
                            2 Player
                        </Button>
                        <Button variant={mode === "ai" ? "secondary" : "outline"} onClick={() => dispatch(setGameMode("ai"))}>
                            Vs AI
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default TicTacToe;
