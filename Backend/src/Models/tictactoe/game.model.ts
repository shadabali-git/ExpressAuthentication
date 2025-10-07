import mongoose, {Schema, Types} from "mongoose";

export type Player = 0 | 1 | 2;
export type Board = [[Player, Player, Player], [Player, Player, Player], [Player, Player, Player]];

interface gameType {
    userId: Types.ObjectId,
    gameType: string,
    opponentId: Types.ObjectId,
    board: Board,
    currentTurn: 1 | 2,
    winner: 0 | 1 | 2 | 3;
    lastUpdate: Date
}

const gameSchema: Schema = new Schema<gameType>({

    userId: {
        type: Schema.Types.ObjectId,
        ref: "user",
        required: true
    },
    opponentId: {
        type: Schema.Types.ObjectId,
        ref: "user",
        required: true
    },
    gameType: {
        type: String,
        default: "tic-tac-toe",
    },
    board: {
        type: [[{
            type: Number,
            enum: [0, 1, 2],
            required: true
        }]],
        default: [[0, 0, 0], [0, 0, 0], [0, 0, 0]]
    },
    currentTurn: {
        type: Number,
        enum: [1, 2],
        default: 1
    },
    winner: {
        type: Number,
        enum: [0, 1, 2, 3],
        default: 0
    },
    lastUpdate: {
        type: Date,
        default: () => new Date()
    }
})

const GameModel = mongoose.model<gameType>("TicTacToeGame", gameSchema);
export default GameModel;