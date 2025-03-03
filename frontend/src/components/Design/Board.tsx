import React from "react";

interface BoardProps {
    board: (string | null)[];
    onClick: (index: number) => void;
}

const Board: React.FC<BoardProps> = ({ board, onClick }) => {
    const renderSquare = (index: number) => {
        return (
            <button
                className="w-20 h-20 border border-amber-200 text-4xl font-bold"
                onClick={() => {onClick(index)}}
            >
                {board[index]}
            </button>
        );
    };

    return (
        <div className="w-96 h-96 grid grid-cols-3 border ">
            {renderSquare(0)}
            {renderSquare(1)}
            {renderSquare(2)}
            {renderSquare(3)}
            {renderSquare(4)}
            {renderSquare(5)}
            {renderSquare(6)}
            {renderSquare(7)}
            {renderSquare(8)}
        </div>
    );
};

export default Board;