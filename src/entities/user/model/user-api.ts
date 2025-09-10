import { apiService } from '@/shared/api';
import { BACKEND_ROUTES } from '@/shared/config';
import {
    loginResponseSchema,
    registerResponseSchema,
    type LoginFormData,
    type loginResponse,
    type RegisterFormData,
    type RegisterResponse,
    type Users,
} from './schemas';
import type { FindUsersDto } from './dto';

export const userApi = apiService.injectEndpoints({
    endpoints: (builder) => ({
        register: builder.mutation<RegisterResponse, RegisterFormData>({
            query: (credentials) => ({
                url: BACKEND_ROUTES.REGISTER,
                method: 'POST',
                body: credentials,
            }),
            responseSchema: registerResponseSchema,
        }),
        login: builder.mutation<loginResponse, LoginFormData>({
            query: (credentials) => ({
                url: BACKEND_ROUTES.LOGIN,
                method: 'POST',
                body: credentials,
            }),
            responseSchema: loginResponseSchema,
        }),
        getMyProfile: builder.query<Users, void>({
            query: () => BACKEND_ROUTES.MY_PROFILE,
        }),
        searchUsers: builder.query<Users[], FindUsersDto>({
            query: (searchDto) => ({
                url: BACKEND_ROUTES.USERS_MAIN,
                params: searchDto,
                method: 'GET',
            }),
        }),
    }),
});

export const {
    useGetMyProfileQuery,
    useLazyGetMyProfileQuery,
    useLazySearchUsersQuery,
    useSearchUsersQuery,
    useLoginMutation,
    useRegisterMutation,
} = userApi;
