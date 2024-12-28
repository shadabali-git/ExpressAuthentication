import {Request, Response} from 'express'
import deleteUserService from "../../services/Authentication/DeleteUser.service";

const DeleteUserController = async (req: Request, res: Response) => {
    try {
        const {username} = req.params;
        if(!username){
            res.status(404).json({message:'Username Not Found'})
            return;
        }

        await deleteUserService(username);
        res.status(200).json({message: "Deleted Successfully"})
    } catch (e) {
        console.log("user Deletion Issue ", e);
        // @ts-ignore
        res.status(500).json({message: e.message as string})
    }
}

export default DeleteUserController