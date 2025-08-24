import { apiService } from '@/shared/api/api-service';
import { configureStore } from '@reduxjs/toolkit';
import authReducer from '@/feature/auth/store/authSlices';
import profileReducer from '@/feature/profile/store/profileSlice';
export const store = configureStore({
    reducer: {
        [apiService.reducerPath]: apiService.reducer,
        auth: authReducer,
        profile: profileReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiService.middleware),
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
