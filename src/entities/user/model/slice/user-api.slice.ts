import { apiService } from '@/shared/api/api-service';
import type { Users } from '../schemas/userSchema';
import { USER_PATH_BACKEND } from '../const/userPath';
import type { FindUsersDto } from '../schemas/findUsersSchema';

export const userApi = apiService.injectEndpoints({
    endpoints: (builder) => ({
        getMyProfile: builder.query<Users, void>({
            query: () => USER_PATH_BACKEND.MY_PROFILE,
        }),
        searchUsers: builder.query<Users[], FindUsersDto>({
            query: (searchDto) => ({
                url: USER_PATH_BACKEND.USERS_MAIN,
                params: searchDto,
                method: 'GET',
            }),
        }),
    }),
});

export const { useGetMyProfileQuery, useLazyGetMyProfileQuery, useLazySearchUsersQuery, useSearchUsersQuery } = userApi;
