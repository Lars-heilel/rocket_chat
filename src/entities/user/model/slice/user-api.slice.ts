import { apiService } from '@/shared/api/api-service';
import { USER_PATH_BACKEND } from '@/app/router/all-path';
import type { Users } from '../schemas/userSchema';

const userApi = apiService.injectEndpoints({
    endpoints: (builder) => ({
        getMyProfile: builder.query<Users, void>({
            query: () => USER_PATH_BACKEND.MY_PROFILE,
        }),
    }),
});

export const { useGetMyProfileQuery, useLazyGetMyProfileQuery } = userApi;
