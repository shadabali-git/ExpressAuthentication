import {Request, Response} from 'express'
import BotMovesService from "../../services/ticktactoe/BotMoves.service";
import HumanMoveService from "../../services/ticktactoe/HumanMove.service";
import {checkWin, isFull} from "../../services/ticktactoe/minimaxAlgo.service";
import GameModel from "../../Models/tictactoe/game.model";

const BotVsHuman = async (req: Request, res: Response) => {
    try {
        console.log("Raw body:", req.body);
        const gameId = req.params.gameid;
        const { index } = req.body;
        let x,y
        if (index == 0) {
            x=0;
            y=0;
        } else if (index == 1) {
            x=0;
            y=1;
        } else if (index == 2) {
            x=0;
            y=2;
        } else if (index == 3) {
            x=1;
            y=0;
        } else if (index == 4) {
            x=1;
            y=1;
        } else if (index == 5) {
            x=1;
            y=2;
        } else if (index == 6) {
            x=2;
            y=0;
        } else if (index == 7) {
            x=2;
            y=1;
        } else if (index == 8) {
            x=2;
            y=2;
        }
        if (!gameId || x==undefined || y===undefined) {
            res.status(400).json({message: "User not found", winner: 0});
            return;
        }

        //  human move first

        const game = await GameModel.findOne({_id:gameId});

        if (!game) {
            res.status(400).json({message: "Game not found", winner: 0});
            return;
        }

        let board = game.board;

        const HumanResponse = HumanMoveService(x, y, board);
        if (!HumanResponse || game.winner !== 0) {
            res.status(400).json({message: "Human Points not Valid", winner: game.winner});
            return;
        }
        //  check win or draw
        const IsHumanWin = checkWin(board);
        if (IsHumanWin == 1) {
            game.board = board;
            game.winner = 1;
            await game.save();
            res.status(200).json({message: "HumanResponse Win", board: board, winner: 1});
            return;
        }
        if (isFull(board)) {
            game.board = board;
            game.winner = 3; // draw
            await game.save();
            res.status(200).json({message: "Game Draw ", board: board, winner: 3});
            return;
        }

        //  bot Move second
        const BotResponse = BotMovesService(board);
        if (!BotResponse) {
            res.status(400).json({message: "Bot Moves not Valid", winner: 0});
            return;
        }

        const IsBotWin = checkWin(board);
        if (IsBotWin == 2) {
            game.board = board;
            game.winner = 2;
            await game.save();
            res.status(200).json({message: "Bot Response Win", board: board, winner: 2});
            return;
        }
        if (isFull(board)) {
            game.board = board;
            game.winner = 3;
            await game.save();
            res.status(200).json({message: "Game Draw ", board: board, winner: 3});
            return;
        }

        //     save in before response
        game.board = board;
        game.lastUpdate = new Date();
        await game.save();
        res.status(200).json({message: "Successfully Updated User", board: board, winner: 0});

    } catch (err) {
        res.status(400).json({
            message: 'Error occurred',
            value: [-1, -1]
        })
    }

}
export default BotVsHuman;