import { createBrowserRouter } from 'react-router';
import { RouteErrorPage } from '@/pages/other/errorElement';
import { FRONTEND_ROUTES } from '@/shared/config';
import { ProtectedRoute } from '@/entities/session';
import { privateRoutes, publicRoutes } from './config';
export const routerProvider = createBrowserRouter([
    {
        path: '/',
        lazy: () => import('@/widgets/layouts/authLayout'),
        children: [...publicRoutes],
        errorElement: <RouteErrorPage />,
    },
    {
        path: '*',
        lazy: () => import('@/pages/other/notFoundPage'),
    },
    {
        path: FRONTEND_ROUTES.MESSENGER,
        element: <ProtectedRoute />,
        children: [...privateRoutes],
        errorElement: <RouteErrorPage />,
    },
]);
