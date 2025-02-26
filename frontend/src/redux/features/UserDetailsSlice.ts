import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export interface User{
    username: string;
    email: string;
    password: string;
    _id: string;
    _v: number;
}
export interface UserDetailsState{
    userDetails:User|null
    Loading:boolean
}
const initialState: UserDetailsState = {
    userDetails: null,
    Loading:false
};

export const UserDetailsSlice = createSlice({
    name: "userDetails",
    initialState,
    reducers: {
        setUserDetails: (state, action:PayloadAction<User|null>) => {
            state.userDetails = action.payload;
        },
        setLoading: (state, action:PayloadAction<boolean>) => {
            state.Loading = action.payload;
        }
    },
});
export const { setUserDetails ,setLoading} = UserDetailsSlice.actions;
export default UserDetailsSlice.reducer;