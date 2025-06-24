// src/game.ts
import { Board, Move, GameState, Cell } from './boardTypes.ts';

export const initGame = (): GameState => ({
    board: Array(9).fill(null),
    next: 'X',
    winner: null,
});

export const applyMove = (state: GameState, move: Move): GameState => {
    const b = [...state.board];
    if (b[move.index] || state.winner) return state;
    b[move.index] = move.player;
    const winner = calculateWinner(b);
    return {
        board: b,
        next: winner ? null : (move.player === 'X' ? 'O' : 'X'),
        winner,
    };
};

export const calculateWinner = (board: Board): Cell | 'draw' | null => {
    const lines = [
        [0,1,2],[3,4,5],[6,7,8],
        [0,3,6],[1,4,7],[2,5,8],
        [0,4,8],[2,4,6],
    ];
    for (const [a,b,c] of lines) {
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            return board[a];
        }
    }
    return board.every(Boolean) ? 'draw' : null;
};

// Minimax AI
export const bestMove = (board: Board, player: Cell): Move => {
    const opponent: Cell = player === 'X' ? 'O' : 'X';

    const minimax = (b: Board, p: Cell): number => {
        const w = calculateWinner(b);
        if (w === player) return 1;
        if (w === opponent) return -1;
        if (w === 'draw') return 0;

        const scores: number[] = [];
        b.forEach((c,i) => {
            if (!c) {
                b[i] = p;
                scores.push(minimax(b, p === player ? opponent : player));
                b[i] = null;
            }
        });
        return p === player
            ? Math.max(...scores)
            : Math.min(...scores);
    };

    let bestScore = -Infinity;
    let move = -1;
    board.forEach((c,i) => {
        if (!c) {
            const b2 = [...board];
            b2[i] = player;
            const score = minimax(b2, opponent);
            if (score > bestScore) {
                bestScore = score;
                move = i;
            }
        }
    });
    return { index: move, player };
};
