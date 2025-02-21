import {createSlice} from "@reduxjs/toolkit";

interface User{
    name: string;
    email: string;
    password: string;
}
export interface UserDetailsState{
    userDetails:User|null
}
const initialState: UserDetailsState = {
    userDetails: null,
};

export const UserDetailsSlice = createSlice({
    name: "UserDetails",
    initialState,
    reducers: {
        setUserDetails: (state, action) => {
            state.userDetails = action.payload;
        },
    },
});
export const { setUserDetails } = UserDetailsSlice.actions;
export default UserDetailsSlice.reducer;