import { createBrowserRouter } from 'react-router';
import { privateRoutes, publicRoutes } from '../router/routes';
import { FRONTEND_PROTECTED_PATH } from '../router/all-path';
import { ProtectedRoute } from './protectedRoutes';

export const routerProvider = createBrowserRouter([
    { path: '/', lazy: () => import('@/app/layouts/authLayout'), children: [...publicRoutes] },
    {
        path: '*',
        lazy: () => import('@/pages/other/notFoundPage'),
    },
    {
        path: FRONTEND_PROTECTED_PATH.MESSENGER,
        element: <ProtectedRoute />,
        children: [...privateRoutes],
    },
]);
