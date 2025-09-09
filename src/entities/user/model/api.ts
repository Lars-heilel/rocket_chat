import { apiService } from '@/shared/api';
import { BACKEND_ROUTES } from '@/shared/config';
import type { UsersResponse } from './schemas';
import type { FindUsersDto } from './dto';

export const userApi = apiService.injectEndpoints({
    endpoints: (builder) => ({
        getMyProfile: builder.query<UsersResponse, void>({
            query: () => BACKEND_ROUTES.MY_PROFILE,
        }),
        searchUsers: builder.query<UsersResponse[], FindUsersDto>({
            query: (searchDto) => ({
                url: BACKEND_ROUTES.USERS_MAIN,
                params: searchDto,
                method: 'GET',
            }),
        }),
    }),
});

export const { useGetMyProfileQuery, useLazyGetMyProfileQuery, useLazySearchUsersQuery, useSearchUsersQuery } = userApi;
