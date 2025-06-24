import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Friend } from '@/types/boardTypes.ts';

interface FriendsState {
    list: Friend[];
}

const initialState: FriendsState = {
    list: [],
};

const friendsSlice = createSlice({
    name: 'friends',
    initialState,
    reducers: {
        addFriend: (state, action: PayloadAction<Friend>) => {
            if (!state.list.find(f => f.id === action.payload.id)) {
                state.list.push(action.payload);
            }
        },
        updateFriendStatus: (state, action: PayloadAction<{ id: string; isOnline: boolean }>) => {
            const friend = state.list.find(f => f.id === action.payload.id);
            if (friend) {
                friend.isOnline = action.payload.isOnline;
            }
        },
    },
});

export const { addFriend, updateFriendStatus } = friendsSlice.actions;
export default friendsSlice.reducer;
