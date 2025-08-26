import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { Users } from '../schemas/userSchema';

interface userSliceI {
    me: Users | null;
}
const initialState: userSliceI = {
    me: null,
};
const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<Users>) => {
            state.me = action.payload;
        },
        clearUser: (state) => {
            state.me = null;
        },
    },
});
export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
