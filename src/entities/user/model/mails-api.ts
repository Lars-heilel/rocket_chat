import { JwtTokenSchema, type JwtTokenResponse } from '@/entities/session/model/schema/jwt-token.schema';
import { apiService } from '@/shared/api/http/api-service';
import { BACKEND_ROUTES } from '@/shared/config';
import type { RequestResetPasswordFormData, ResendVerifyEmailFormData, ResetPasswordApiData } from './schemas';
const mailsApi = apiService.injectEndpoints({
    endpoints: (builder) => ({
        RequsetResetPassword: builder.mutation<{ message: string }, RequestResetPasswordFormData>({
            query: (credentials) => ({
                url: BACKEND_ROUTES.FORGOT_PASSWORD,
                method: 'POST',
                body: credentials,
            }),
        }),
        resetPassword: builder.mutation<{ message: string }, ResetPasswordApiData>({
            query: (requestData) => ({
                url: BACKEND_ROUTES.RESET_PASSWORD,
                method: 'PUT',
                params: { token: requestData.mailParamsToken },
                body: { password: requestData.password },
            }),
        }),
        verifyAccount: builder.mutation<JwtTokenResponse, { token: string }>({
            query: (requestData) => ({
                url: BACKEND_ROUTES.VERIFY_ACCOUNT,
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
        resendVerifyEmail: builder.mutation<{ message: string }, ResendVerifyEmailFormData>({
            query: (credentials) => ({
                url: BACKEND_ROUTES.RESEND_CONFIRMATION,
                method: 'POST',
                body: credentials,
            }),
        }),
    }),
});
export const { useVerifyAccountMutation, useResendVerifyEmailMutation, useRequsetResetPasswordMutation, useResetPasswordMutation } =
    mailsApi;
