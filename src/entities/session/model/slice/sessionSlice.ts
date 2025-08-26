import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
interface SessionSliceState {
    token: string | null;
}
const initialState: SessionSliceState = {
    token: null,
};

const sessionSlice = createSlice({
    name: 'session',
    initialState,
    reducers: {
        setCredentials: (state, action: PayloadAction<{ token: string }>) => {
            state.token = action.payload.token;
        },
        logOut: (state) => {
            state.token = null;
        },
    },
});

export const { setCredentials, logOut } = sessionSlice.actions;
export default sessionSlice.reducer;
