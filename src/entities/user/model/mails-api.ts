import { apiService } from '@/shared/api/http/api-service';
import { BACKEND_ROUTES } from '@/shared/config';
import {
    VerifyAccountResponseSchema,
    type RequestResetPasswordFormData,
    type ResendVerifyEmailFormData,
    type ResetPasswordApiData,
    type VerifyAccountResponse,
} from './schemas';
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
        verifyAccount: builder.mutation<VerifyAccountResponse, { token: string }>({
            query: (requestData) => ({
                url: BACKEND_ROUTES.VERIFY_ACCOUNT,
                method: 'GET',
                params: requestData,
            }),
            responseSchema: VerifyAccountResponseSchema,
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
