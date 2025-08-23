import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface AuthSliceI {
  token: string | null;
  isAuth: boolean;
}
const initialState: AuthSliceI = {
  token: null,
  isAuth: false,
};
const authSlice = createSlice({
  name: "Auth",
  initialState,
  reducers: {
    setCredentials: (state, action: PayloadAction<{ token: string }>) => {
      const { token } = action.payload;
      state.token = token;
      state.isAuth = true;
    },
    logOut: (state) => {
      state.token = null;
      state.isAuth = false;
    },
  },
});
export const { setCredentials, logOut } = authSlice.actions;
export default authSlice.reducer;
