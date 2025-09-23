import { reauthBaseQueryWrapper } from '@/entities/session/@x/api-service';
import { createApi } from '@reduxjs/toolkit/query/react';
export const apiService = createApi({
    reducerPath: 'apiService',
    baseQuery: reauthBaseQueryWrapper,
    endpoints: () => ({}),
    tagTypes: ['Friends', 'Requests', 'Users', 'Message', 'Rooms'],
});
