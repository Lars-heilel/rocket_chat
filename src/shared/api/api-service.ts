import { createApi } from '@reduxjs/toolkit/query/react';
import { reauthBaseQueryWrapper } from './reauthBaseQueryWrapper';
export const apiService = createApi({
    reducerPath: 'apiService',
    baseQuery: reauthBaseQueryWrapper,
    endpoints: () => ({}),
    tagTypes: ['Friends', 'Requests', 'Users'],
});
