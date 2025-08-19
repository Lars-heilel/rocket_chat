import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { AUTH_PATH, MAILS_PATH } from '@/app/router/all-path';
import type { RootState } from '@/app/store/reduxStore';
import type {
  ForgotPasswordFormData,
  JwtTokenResponse,
  LoginFormData,
  RegisterFormData,
  ResendConfirmationFormData,
  ResetPasswordApiData,
} from '@/feature/auth/schemas';

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
        url: AUTH_PATH.REGISTER,
        method: 'POST',
        body: credentials,
      }),
    }),
    login: builder.mutation<JwtTokenResponse, LoginFormData>({
      query: (credentials) => ({
        url: AUTH_PATH.LOGIN,
        method: 'POST',
        body: credentials,
      }),
    }),
    refresh: builder.mutation<JwtTokenResponse, void>({
      query: () => ({
        url: AUTH_PATH.REFRESH,
        method: 'POST',
      }),
    }),
    forgotPassword: builder.mutation<{ message: string }, ForgotPasswordFormData>({
      query: (credentials) => ({
        url: MAILS_PATH.FORGOT_PASSWORD,
        method: 'POST',
        body: credentials,
      }),
    }),
    resetPassword: builder.mutation<{ message: string }, ResetPasswordApiData>({
      query: (requestData) => ({
        url: MAILS_PATH.RESET_PASSWORD,
        method: 'PUT',
        params: { token: requestData.mailParamsToken },
        body: { password: requestData.password },
      }),
    }),
    verifyAccount: builder.mutation<JwtTokenResponse, { token: string }>({
      query: (requestData) => ({
        url: MAILS_PATH.VERIFY_ACCOUNT,
        method: 'GET',
        params: requestData,
      }),
    }),
    resendConfirmEmail: builder.mutation<{ message: string }, ResendConfirmationFormData>({
      query: (credentials) => ({
        url: MAILS_PATH.RESEND_CONFIRMATION,
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
