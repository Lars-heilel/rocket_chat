import type {
  LoginFormData,
  LoginResponse,
} from "@/feature/auth/schemas/loginFromSchema";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { AUTH_PATH } from "@/app/router/all-path";
import type { RootState } from "@/app/store/reduxStore";

export const apiService = createApi({
  reducerPath: "apiService",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BACKEND_URL,
    credentials: "include",
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).auth.token;
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    login: builder.mutation<LoginResponse, LoginFormData>({
      query: (credentials) => ({
        url: AUTH_PATH.LOGIN,
        method: "POST",
        body: credentials,
      }),
    }),
    refresh: builder.mutation<LoginResponse, void>({
      query: () => ({
        url: AUTH_PATH.REFRESH,
        method: "POST",
      }),
    }),
  }),
});

export const { useLoginMutation, useRefreshMutation } = apiService;
