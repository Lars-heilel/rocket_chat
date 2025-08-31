import { apiService } from '@/shared/api/api-service';
import { configureStore } from '@reduxjs/toolkit';
import { sessionReducer } from '@/entities/session';
import { socketMiddleware } from '@/shared/api/socketMiddleware';

export const store = configureStore({
    reducer: {
        [apiService.reducerPath]: apiService.reducer,
        session: sessionReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiService.middleware).concat(socketMiddleware),
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
