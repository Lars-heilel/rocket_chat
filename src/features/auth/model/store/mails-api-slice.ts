import { JwtTokenSchema, type JwtTokenResponse } from '@/entities/session/model/schema/jwt-token.schema';
import { apiService } from '@/shared/api/http/api-service';

import { MAILS_PATH_BACKEND } from '../const';

import type { ForgotPasswordFormData, ResendConfirmationFormData, ResetPasswordApiData } from '../schemas';
const mailsApi = apiService.injectEndpoints({
    endpoints: (builder) => ({
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

                if (validation.success) {
                    return validation.data;
                }

                throw new Error('invalid server response');
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
export const { useVerifyAccountMutation, useResendConfirmEmailMutation, useForgotPasswordMutation, useResetPasswordMutation } = mailsApi;
