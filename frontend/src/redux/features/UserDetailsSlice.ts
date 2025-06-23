import { createSlice, type PayloadAction } from "@reduxjs/toolkit"

export interface User {
    username: string
    email: string
    password: string
    googleId?: string
    _id: string
    __v: number // Fixed typo from _v to __v
}

export interface UserDetailsState {
    userDetails: User | null
    Loading: boolean
    token: string | null
}

const initialState: UserDetailsState = {
    userDetails: null,
    Loading: false,
    token: null,
}

export const UserDetailsSlice = createSlice({
    name: "userDetails",
    initialState,
    reducers: {
        setUserDetails: (state, action: PayloadAction<User | null>) => {
            state.userDetails = action.payload
        },
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.Loading = action.payload
        },
        setToken: (state, action: PayloadAction<string | null>) => {
            state.token = action.payload
        },
        clearUserData: (state) => {
            state.userDetails = null
            state.token = null
            state.Loading = false
        },
    },
})

export const { setUserDetails, setLoading, setToken, clearUserData } = UserDetailsSlice.actions
export default UserDetailsSlice.reducer
