import type {User} from "@/shared/lib/zod/schemas/userSchema";
import {createSlice, type PayloadAction} from "@reduxjs/toolkit";

interface AuthSliceI {
  user: User | null;
  token: string | null;
}
const initialState: AuthSliceI = {
  user: null,
  token: localStorage.getItem("token") || null,
};
const authSlice = createSlice({
  name: "Auth",
  initialState,
  reducers: {
    setCredentials: (
      state,
      action: PayloadAction<{ user: User; token: string }>
    ) => {
      const { user, token } = action.payload;
      state.user = user;
      state.token = token;
      localStorage.setItem("token", token);
    },
    logOut: (state) => {
      state.token = null;
      state.user = null;
      localStorage.removeItem("token");
    },
  },
});
export const { setCredentials, logOut } = authSlice.actions;
export default authSlice.reducer;
