import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { GameState, Move } from '@/types/boardTypes.ts';
import { applyMove, initGame, bestMove } from '@/types/game.ts';

export type GameMode = 'human' | 'ai';

export type ExtendedGameState = GameState & {
    mode: GameMode;
};

const initialState: ExtendedGameState = {
    ...initGame(),
    mode: 'human',
};

const gameSlice = createSlice({
    name: 'game',
    initialState,
    reducers: {
        resetGame: (state) => {
            const reset = initGame();
            state.board = reset.board;
            state.next = reset.next;
            state.winner = reset.winner;
        },
        setGameMode: (state, action: PayloadAction<GameMode>) => {
            state.mode = action.payload;
        },
        makeMove: (state, action: PayloadAction<Move>) => {
            const result = applyMove(state, action.payload);
            state.board = result.board;
            state.next = result.next;
            state.winner = result.winner;
        },
        aiMove: (state) => {
            if (!state.winner && state.next === 'O' && state.mode === 'ai') {
                const move = bestMove(state.board, 'O');
                const result = applyMove(state, move);
                state.board = result.board;
                state.next = result.next;
                state.winner = result.winner;
            }
        }
    }
});

export const { resetGame, makeMove, setGameMode, aiMove } = gameSlice.actions;
export default gameSlice.reducer;
