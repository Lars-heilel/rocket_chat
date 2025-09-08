import { apiService } from '@/shared/api/api-service';
import { configureStore } from '@reduxjs/toolkit';
import { sessionReducer } from '@/entities/session';
import { socketMiddleware } from '@/shared/api/socketMiddleware';
import { chatRoomReducer } from '@/entities/chat-room';

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
