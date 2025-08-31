import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface SessionSliceState {
    token: string | null;
    _isInitialized: boolean;
}

const initialState: SessionSliceState = {
    token: null,
    _isInitialized: false,
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
        finishSessionInit: (state) => {
            state._isInitialized = true;
        },
    },
});

export const { setCredentials, logOut, finishSessionInit } = sessionSlice.actions;
export default sessionSlice.reducer;
