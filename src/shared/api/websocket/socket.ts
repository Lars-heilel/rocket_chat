import { io, Socket } from 'socket.io-client';

import type { RootState } from '@/app/store/reduxStore';

import { SOCKET_EVENTS } from './socket-events.const';
import { Logger } from '../../lib/logger';
const logger = new Logger('SocketService');

let socket: Socket | null = null;

export const socketService = {
    connect: (getState: () => RootState) => {
        if (socket?.connected) {
            return;
        }

        const { token } = getState().session;

        if (!token) {
            logger.error('No token found, connection aborted.');
            return;
        }

        const VITE_BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
        const SOCKET_URL = import.meta.env.VITE_SOCKET_URL;
        logger.log(`Connecting to ${VITE_BACKEND_URL}${SOCKET_URL}...`);

        socket = io(`${VITE_BACKEND_URL}${SOCKET_URL}`, {
            auth: {
                token: token,
            },
            transportOptions: {
                polling: {
                    extraHeaders: {
                        Authorization: `Bearer ${token}`,
                    },
                },
            },
        });
        socket.on(SOCKET_EVENTS.SERVER.CONNECT, () => {
            logger.log(`Socket connected with id: ${socket?.id}`);
        });

        socket.on(SOCKET_EVENTS.SERVER.DISCONNECT, (reason) => {
            logger.warn(`Socket disconnected: ${reason}`);
        });

        socket.on(SOCKET_EVENTS.SERVER.CONNECTION_ERROR, (error) => {
            logger.error('Connection error:', error.message, error.data);
        });

        socket.on(SOCKET_EVENTS.SERVER.CONNECTION_SUCCESS, (data) => {
            logger.log('Connection successful:', data);
        });

        return socket;
    },

    disconnect: () => {
        if (socket) {
            socket.disconnect();
            socket = null;
        }
    },
    sendMessage: (payload: { receiverId: string; content: string }) => {
        if (!socket || !socket.connected) {
            logger.error('Socket is not connected. Cannot send message.');
            return;
        }
        socket.emit(SOCKET_EVENTS.CLIENT.SEND_MESSAGE, payload);
    },

    getSocket: () => socket,
};
