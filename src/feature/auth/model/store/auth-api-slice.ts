import { apiService } from '@/shared/api/api-service';
import type { LoginFormData, RegisterFormData } from '@/feature/auth/model/schemas';
import { JwtTokenSchema, type JwtTokenResponse } from '@/entities/session/schema/jwt-token.schema';
import { AUTH_PATH_BACKEND } from '../const';
const authApi = apiService.injectEndpoints({
    endpoints: (builder) => ({
        register: builder.mutation<{ message: string }, RegisterFormData>({
            query: (credentials) => ({
                url: AUTH_PATH_BACKEND.REGISTER,
                method: 'POST',
                body: credentials,
            }),
        }),
        login: builder.mutation<JwtTokenResponse, LoginFormData>({
            query: (credentials) => ({
                url: AUTH_PATH_BACKEND.LOGIN,
                method: 'POST',
                body: credentials,
            }),
            transformResponse: (response: JwtTokenResponse) => {
                const validation = JwtTokenSchema.safeParse(response);
                if (validation.success) {
                    return validation.data;
                }
                throw new Error('invalid server response');
            },
        }),
        logout: builder.mutation<{ message: string }, void>({
            query: () => ({ url: AUTH_PATH_BACKEND.LOGOUT, method: 'POST' }),
        }),
        refresh: builder.mutation<JwtTokenResponse, void>({
            query: () => ({
                url: AUTH_PATH_BACKEND.REFRESH,
                method: 'POST',
            }),
            transformResponse: (response: JwtTokenResponse) => {
                const validation = JwtTokenSchema.safeParse(response);
                if (validation.success) {
                    return validation.data;
                }
                throw new Error('invalid server response');
            },
        }),
    }),
});
export const { useRegisterMutation, useLoginMutation, useRefreshMutation, useLogoutMutation } =
    authApi;
