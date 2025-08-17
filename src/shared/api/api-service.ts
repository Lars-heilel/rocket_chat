import type {
  LoginFormData,
  LoginResponse,
} from "@/feature/auth/schemas/loginFromSchema";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { AUTH_PATH } from "@/app/router/all-path";

export const apiService = createApi({
  reducerPath: "apiService",
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BACKEND_URL }),
  endpoints: (builder) => ({
    login: builder.mutation<LoginResponse, LoginFormData>({
      query: (credentials) => ({
        url: AUTH_PATH.LOGIN,
        method: "POST",
        body: credentials,
      }),
    }),
  }),
});

export const { useLoginMutation } = apiService;
