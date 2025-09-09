import { fetchBaseQuery, type BaseQueryFn, type FetchArgs, type FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { Mutex } from 'async-mutex';

import type { RootState } from '@/app/store/reduxStore';
import { logOut, setCredentials } from '@/entities/session/model/sessionSlice';

import { Logger } from '../../lib/logger';
const logger = new Logger('baseQueryWithReauth');
const mutex = new Mutex();

const baseQuery = fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BACKEND_URL,
    credentials: 'include',
    prepareHeaders: (headers, { getState }) => {
        const token = (getState() as RootState).session.token;
        if (token) {
            headers.set('authorization', `Bearer ${token}`);
        }
        return headers;
    },
});

export const reauthBaseQueryWrapper: BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError> = async (args, api, extraOptions) => {
    await mutex.waitForUnlock();

    let result = await baseQuery(args, api, extraOptions);

    if (result.error && result.error.status === 401) {
        logger.warn('error 401 unauthorized, trying to refresh tokens...');

        if (!mutex.isLocked()) {
            const release = await mutex.acquire();
            logger.debug('[mutex]:ON');
            try {
                const refreshResult = await baseQuery({ url: '/auth/refresh', method: 'POST' }, api, extraOptions);

                if (refreshResult.data) {
                    logger.log('update tokens success!');
                    api.dispatch(setCredentials(refreshResult.data as { token: string }));
                    logger.debug('Retry request');
                    result = await baseQuery(args, api, extraOptions);
                } else {
                    logger.error('refresh tokens ERROR');
                    api.dispatch(logOut());
                }
            } finally {
                logger.debug('[mutex]:OFF');
                release();
            }
        } else {
            logger.debug('[mutex]:blocked wait ...');
            await mutex.waitForUnlock();

            logger.debug('[mutex]:unlock retry');
            result = await baseQuery(args, api, extraOptions);
        }
    }

    return result;
};
