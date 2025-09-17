import { createBrowserRouter } from 'react-router';
import { RouteErrorPage } from '@/pages/other/errorElement';
import { privateRoutes, publicRoutes } from './config';
import { Spinner } from '@/shared/ui';
import { ProtectedRoute } from '@/entities/session';
export const routerProvider = createBrowserRouter([
    {
        path: '/',
        element: <ProtectedRoute />,
        errorElement: <RouteErrorPage />,
        hydrateFallbackElement: <Spinner />,
        children: [...privateRoutes],
    },
    {
        path: '/',
        lazy: () => import('@/widgets/layouts/authLayout'),
        children: [...publicRoutes],
    },
    {
        path: '*',
        lazy: () => import('@/pages/other/notFoundPage'),
    },
]);
