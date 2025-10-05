import GameModel from "../../Models/tictactoe/game.model";

const CreateGame = async (userId: string) => {
    try {
        const already = await GameModel.findOne({userId: userId});
        if (already) {
            return true;
        } else {
            await GameModel.create(
                {
                    userId: userId,
                    lastUpdate: Date.now()
                });
        }

        return true;
    } catch (err) {
        console.error(err);
        return false;
    }

}

export default CreateGame;