import { type Middleware } from '@reduxjs/toolkit';
import type { RootState } from '@/app/store/reduxStore';
import { Logger } from '@/shared/lib';
import { logOut, setCredentials } from './slice';
import { socketService } from '@/shared/api';

const logger = new Logger('SocketMiddleware');
export const socketMiddleware: Middleware = (store) => (next) => (action) => {
    const result = next(action);
    if (setCredentials.match(action)) {
        logger.log('Geted token (setCredentials). connect to WebSocket...');
        socketService.connect(store.getState as () => RootState);
    } else if (logOut.match(action)) {
        logger.warn(' clear session (logOut). disconnect WebSocket...');
        socketService.disconnect();
    }

    return result;
};
