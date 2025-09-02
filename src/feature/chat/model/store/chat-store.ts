import type { Users } from '@/entities/user';
import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { generateChatRoomId } from '../../lib';
interface ChatStoreI {
    selectedChatId: string | null;
    friendData: Users | null;
}
const initialState: ChatStoreI = {
    selectedChatId: null,
    friendData: null,
};

const chatSlice = createSlice({
    name: 'chatStore',
    initialState,
    reducers: {
        selectedChatRoom: (state, action: PayloadAction<{ currentUser: Users; friend: Users }>) => {
            state.selectedChatId = generateChatRoomId({ currentUserId: action.payload.currentUser.id, friendId: action.payload.friend.id });
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
