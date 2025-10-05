import type { Board, Player } from "../../Models/tictactoe/game.model";

// Check if the board is full (draw)
const isFull = (board: Board): boolean => {
    return board.every(row => row.every(cell => cell !== 0));
};

// Check who wins (1: Human, 2: AI, 0: None)
const checkWin = (board: Board): Player => {
    // Rows
    for (let i = 0; i < 3; i++) {
        if (
            board[i][0] !== 0 &&
            board[i][0] === board[i][1] &&
            board[i][1] === board[i][2]
        ) {
            return board[i][0];
        }
    }

    // Columns
    for (let j = 0; j < 3; j++) {
        if (
            board[0][j] !== 0 &&
            board[0][j] === board[1][j] &&
            board[1][j] === board[2][j]
        ) {
            return board[0][j];
        }
    }

    // Diagonals
    if (
        board[0][0] !== 0 &&
        board[0][0] === board[1][1] &&
        board[1][1] === board[2][2]
    ) {
        return board[0][0];
    }

    if (
        board[0][2] !== 0 &&
        board[0][2] === board[1][1] &&
        board[1][1] === board[2][0]
    ) {
        return board[0][2];
    }

    return 0; // No winner
};

// Minimax algorithm (pure function)
const minimax = (isMaximizing: boolean, board: Board): number => {
    const result = checkWin(board);
    if (result === 2) return 10;   // AI wins
    if (result === 1) return -10;  // Human wins
    if (isFull(board)) return 0;   // Draw

    if (isMaximizing) {
        let bestScore = -Infinity;
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (board[i][j] === 0) {
                    board[i][j] = 2; // AI move
                    const score = minimax(false, board);
                    board[i][j] = 0; // Undo move
                    bestScore = Math.max(bestScore, score);
                }
            }
        }
        return bestScore;
    } else {
        let bestScore = Infinity;
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (board[i][j] === 0) {
                    board[i][j] = 1; // Human move
                    const score = minimax(true, board);
                    board[i][j] = 0; // Undo move
                    bestScore = Math.min(bestScore, score);
                }
            }
        }
        return bestScore;
    }
};

// Get the best move for AI
const getBestMove = (board: Board): [number, number] => {
    let bestScore = -Infinity;
    let bestMove: [number, number] = [-1, -1];

    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (board[i][j] === 0) {
                board[i][j] = 2;
                const score = minimax(false, board);
                board[i][j] = 0;
                if (score > bestScore) {
                    bestScore = score;
                    bestMove = [i, j];
                }
            }
        }
    }

    return bestMove;
};
export { getBestMove ,checkWin , isFull };
