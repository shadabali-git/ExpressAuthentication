import {Document,Types} from "mongoose";

export interface ProfileType extends Document{
     coins: number,
     UserId: Types.ObjectId,
     GamesList : string[]
}