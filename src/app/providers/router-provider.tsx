import { createBrowserRouter } from 'react-router';
import { publicRoutes } from '../router/routes';

export const routerProvider = createBrowserRouter([
    { path: '/', lazy: () => import('@/app/layouts/authLayout'), children: [...publicRoutes] },
    {
        path: '*',
        lazy: () => import('@/pages/other/notFoundPage'),
    },
]);
