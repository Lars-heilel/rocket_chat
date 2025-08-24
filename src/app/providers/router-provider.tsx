import { createBrowserRouter } from 'react-router';
import { privateRoutes, publicRoutes } from '../router/routes';
import { FRONTEND_PROTECTED_PATH } from '../router/all-path';
import { ProtectedRoute } from './protectedRoutes';
import { RouteErrorPage } from '@/pages/other/errorElement';

export const routerProvider = createBrowserRouter([
    {
        path: '/',
        lazy: () => import('@/feature/auth/layouts/authLayout'),
        children: [...publicRoutes],
        errorElement: <RouteErrorPage />,
    },
    {
        path: '*',
        lazy: () => import('@/pages/other/notFoundPage'),
    },
    {
        path: FRONTEND_PROTECTED_PATH.MESSENGER,
        element: <ProtectedRoute />,
        children: [...privateRoutes],
        errorElement: <RouteErrorPage />,
    },
]);
