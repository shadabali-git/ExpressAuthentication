import {configureStore} from "@reduxjs/toolkit";
import UserDetailsReducer from "@/redux/features/UserDetailsSlice.ts";

export const store = configureStore({
    reducer:{
        userDetails: UserDetailsReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch