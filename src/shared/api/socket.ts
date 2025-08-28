import { io, Socket } from 'socket.io-client';
import type { RootState } from '@/app/store/reduxStore';
import { Logger } from '../lib/logger';

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

        logger.log(`Connecting to ${VITE_BACKEND_URL}/chat...`);

        socket = io(`${VITE_BACKEND_URL}/chat`, {
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
        socket.on('connect', () => {
            logger.log(`Socket connected with id: ${socket?.id}`);
        });

        socket.on('disconnect', (reason) => {
            logger.warn(`Socket disconnected: ${reason}`);
        });

        socket.on('connection_error', (error) => {
            logger.error('Connection error:', error.message, error.data);
        });

        socket.on('connection_success', (data) => {
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

    getSocket: () => socket,
};
