import {apiService} from "@/shared/api/api-service";
import {configureStore} from "@reduxjs/toolkit";
import authReducer from "@/feature/auth/store/authSlices";
import logger from "redux-logger";

export const store = configureStore({
  reducer: { [apiService.reducerPath]: apiService.reducer, auth: authReducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiService.middleware).concat(logger),
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
