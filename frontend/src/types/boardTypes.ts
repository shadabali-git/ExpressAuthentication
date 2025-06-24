
export type Cell = 'X' | 'O' | null;
export type Board = Cell[];
export interface Move { index: number; player: Cell; }
export interface GameState {
    board: Board;
    next: Cell;
    winner: Cell | 'draw' | null;
    mode: 'human' | 'ai'
}
export interface Friend { id: string; name: string; isOnline: boolean; }
