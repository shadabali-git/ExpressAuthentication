import mongoose, {Schema, Types} from "mongoose";

export type Player = 0 | 1 | 2;
export type Board = [[Player, Player, Player], [Player, Player, Player], [Player, Player, Player]];

interface gameType {
    userId: Types.ObjectId,
    gameType: string,
    board: Board,
    currentTurn: 1 | 2,
    status: "pending" | "completed" | "in-progress";
    winner: 0 | 1 | 2;
    lastUpdate: Date
}

const gameSchema: Schema = new Schema<gameType>({

    userId: {
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
    status: {
        type: String,
        enum: ["pending", "completed", "in-progress"],
        default: "pending"
    },
    winner: {
        type: Number,
        enum: [0, 1, 2],
        default: 0
    },
    lastUpdate: {
        type: Date,
        default: () => new Date()
    }
})

const GameModel= mongoose.model<gameType>("TicTacToeGame", gameSchema);
export default GameModel;