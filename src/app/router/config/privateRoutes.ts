import type { RouteObject } from 'react-router';

export const privateRoutes: RouteObject[] = [
    {
        index: true,
        lazy: () => import('@/pages/messenger/messenger-page'),
    },
];
