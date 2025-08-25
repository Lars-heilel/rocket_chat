import { apiService } from '@/shared/api/api-service';
import type { Users } from './userSchema';
import { USER_PATH_BACKEND } from '@/app/router/all-path';

const userApi = apiService.injectEndpoints({
    endpoints: (builder) => ({
        getMyProfile: builder.query<Users, void>({
            query: () => USER_PATH_BACKEND.MY_PROFILE,
        }),
    }),
});

export const { useGetMyProfileQuery, useLazyGetMyProfileQuery } = userApi;
