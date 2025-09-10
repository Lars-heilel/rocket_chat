import { configureStore } from '@reduxjs/toolkit';
import { chatRoomReducer } from '@/entities/chat-room';
import { sessionReducer, socketMiddleware } from '@/entities/session';
import { apiService } from '@/shared/api';

export const store = configureStore({
    reducer: {
        [apiService.reducerPath]: apiService.reducer,
        session: sessionReducer,
        chatRoom: chatRoomReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiService.middleware).concat(socketMiddleware),
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
