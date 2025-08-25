import { apiService } from '@/shared/api/api-service';
import { configureStore } from '@reduxjs/toolkit';
import sessionReducer from '@/entities/session/store/sessionSlice';
import userReducer from '@/entities/user/store/userSlice';
export const store = configureStore({
    reducer: {
        [apiService.reducerPath]: apiService.reducer,
        session: sessionReducer,
        user: userReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiService.middleware),
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
