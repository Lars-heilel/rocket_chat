import type { Users } from '@/entities/user';
import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
interface ChatStoreI {
    selectedChatId: string | null;
    friendData: Users | null;
}
const initialState: ChatStoreI = {
    selectedChatId: null,
    friendData: null,
};
type PayloadChatSlice = {
    roomId: string;
    friend: Users;
};
const chatSlice = createSlice({
    name: 'chatStore',
    initialState,
    reducers: {
        selectedChatRoom: (state, action: PayloadAction<PayloadChatSlice>) => {
            state.selectedChatId = action.payload.roomId;
            state.friendData = action.payload.friend;
        },
        clearSelectedChat: (state) => {
            state.friendData = null;
            state.selectedChatId = null;
        },
    },
});
export const { selectedChatRoom, clearSelectedChat } = chatSlice.actions;
export default chatSlice.reducer;
