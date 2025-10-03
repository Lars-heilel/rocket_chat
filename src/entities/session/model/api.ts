import { apiService } from '@/shared/api';
import { BACKEND_ROUTES } from '@/shared/config';
import { JwtTokenSchema, logoutResponseSchema, type JwtTokenResponse, type LogoutResponse } from './schema';

const sessionApi = apiService.injectEndpoints({
    endpoints: (builder) => ({
        logout: builder.mutation<LogoutResponse, void>({
            query: () => ({
                url: BACKEND_ROUTES.LOGOUT,
                method: 'POST',
            }),
            invalidatesTags: ['Friends', 'Message', 'Users', 'Requests'],
            responseSchema: logoutResponseSchema,
        }),
        refresh: builder.mutation<JwtTokenResponse, void>({
            query: () => ({
                url: BACKEND_ROUTES.REFRESH,
                method: 'POST',
            }),
            responseSchema: JwtTokenSchema,
        }),
    }),
});
export const { useLogoutMutation, useRefreshMutation } = sessionApi;
