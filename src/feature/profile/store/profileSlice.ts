import type { User } from '@/shared/schemas/userSchema';
import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface ProfieSliceI {
    me: User | null;
}
const initialState: ProfieSliceI = {
    me: null,
};
const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        setProfile: (state, action: PayloadAction<User>) => {
            state.me = action.payload;
        },
        clearProfile: (state) => {
            state.me = null;
        },
    },
});
export const { setProfile, clearProfile } = profileSlice.actions;
export default profileSlice.reducer;
