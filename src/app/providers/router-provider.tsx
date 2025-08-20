import { createBrowserRouter } from 'react-router';
import { publicRoutes } from '../router/routes';
import { FRONTEND_PATHS } from '../router/all-path';

export const routerProvider = createBrowserRouter([
  {
    lazy: () => import('@/app/layouts/authLayout'),
    children: [
      {
        index: true,
        path: FRONTEND_PATHS.LOGIN,
        lazy: () => import('@/pages/auth/loginPage'),
      },
      ...publicRoutes.filter((route) => route.path !== FRONTEND_PATHS.LOGIN),
    ],
  },
  {
    path: '*',
    lazy: () => import('@/pages/notFoundPage'),
  },
]);
