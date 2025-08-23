import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { AUTH_PATH_BACKEND, MAILS_PATH_BACKEND } from '@/app/router/all-path';
import type { RootState } from '@/app/store/reduxStore';
import {
    JwtTokenSchema,
    type ForgotPasswordFormData,
    type JwtTokenResponse,
    type LoginFormData,
    type RegisterFormData,
    type ResendConfirmationFormData,
    type ResetPasswordApiData,
} from '@/feature/auth/schemas';
import { Logger } from '../lib/logger';
const logger = new Logger('apiService');
export const apiService = createApi({
    reducerPath: 'apiService',
    baseQuery: fetchBaseQuery({
        baseUrl: import.meta.env.VITE_BACKEND_URL,
        credentials: 'include',
        prepareHeaders: (headers, { getState }) => {
            const token = (getState() as RootState).auth.token;
            if (token) {
                headers.set('authorization', `Bearer ${token}`);
            }
            return headers;
        },
    }),
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
                logger.debug(`Проверка токена:${JSON.stringify(response).slice(1, 36)}`);
                if (validation.success) {
                    logger.debug(`Валидация успешна`);
                    return validation.data;
                }
                logger.error(`${validation.error}`);
                throw new Error('Неверный ответа от сервера');
            },
        }),
        refresh: builder.mutation<JwtTokenResponse, void>({
            query: () => ({
                url: AUTH_PATH_BACKEND.REFRESH,
                method: 'POST',
            }),
        }),
        forgotPassword: builder.mutation<{ message: string }, ForgotPasswordFormData>({
            query: (credentials) => ({
                url: MAILS_PATH_BACKEND.FORGOT_PASSWORD,
                method: 'POST',
                body: credentials,
            }),
        }),
        resetPassword: builder.mutation<{ message: string }, ResetPasswordApiData>({
            query: (requestData) => ({
                url: MAILS_PATH_BACKEND.RESET_PASSWORD,
                method: 'PUT',
                params: { token: requestData.mailParamsToken },
                body: { password: requestData.password },
            }),
        }),
        verifyAccount: builder.mutation<JwtTokenResponse, { token: string }>({
            query: (requestData) => ({
                url: MAILS_PATH_BACKEND.VERIFY_ACCOUNT,
                method: 'GET',
                params: requestData,
            }),
            transformResponse: (response: JwtTokenResponse) => {
                const validation = JwtTokenSchema.safeParse(response);
                logger.debug(`Проверка токена:${JSON.stringify(response).slice(1, 36)}`);
                if (validation.success) {
                    logger.debug(`Валидация успешна`);
                    return validation.data;
                }
                logger.error(`${validation.error}`);
                throw new Error('Неверный ответа от сервера');
            },
        }),
        resendConfirmEmail: builder.mutation<{ message: string }, ResendConfirmationFormData>({
            query: (credentials) => ({
                url: MAILS_PATH_BACKEND.RESEND_CONFIRMATION,
                method: 'POST',
                body: credentials,
            }),
        }),
    }),
});
export const {
    useLoginMutation,
    useRefreshMutation,
    useRegisterMutation,
    useForgotPasswordMutation,
    useResetPasswordMutation,
    useVerifyAccountMutation,
    useResendConfirmEmailMutation,
} = apiService;
