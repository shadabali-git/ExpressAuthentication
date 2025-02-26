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
}
const initialState: UserDetailsState = {
    userDetails: null,
};

export const UserDetailsSlice = createSlice({
    name: "userDetails",
    initialState,
    reducers: {
        setUserDetails: (state, action:PayloadAction<User|null>) => {
            state.userDetails = action.payload;
        },
    },
});
export const { setUserDetails } = UserDetailsSlice.actions;
export default UserDetailsSlice.reducer;