import {configureStore} from "@reduxjs/toolkit";
import UserDetailsReducer from "@/redux/features/UserDetailsSlice.ts";
import gameReducer from "@/redux/features/GameSlice.ts";
import FriendsReducer from '@/redux/features/FriendsSlice';

export const store = configureStore({
    reducer:{
        userDetails: UserDetailsReducer,
        game:gameReducer,
        friends: FriendsReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch