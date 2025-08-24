import { FRONTEND_PATHS } from '@/app/router/all-path';
import type { RouteObject } from 'react-router';

export const publicRoutes: RouteObject[] = [
    {
        index: true,
        lazy: () => import('@/pages/auth/loginPage'),
    },
    {
        path: FRONTEND_PATHS.REGISTER,
        lazy: () => import('@/pages/auth/registerPage'),
    },
    {
        path: FRONTEND_PATHS.FORGOT_PASSWORD,
        lazy: () => import('@/pages/mails/forgotPasswordPage'),
    },
    {
        path: FRONTEND_PATHS.RESET_PASSWORD,
        lazy: () => import('@/pages/mails/resetPasswordPage'),
    },
    {
        path: FRONTEND_PATHS.VERIFY_ACCOUNT,
        lazy: () => import('@/pages/mails/verifyEmailPage'),
    },
    {
        path: FRONTEND_PATHS.RESEND_CONFIRMATION,
        lazy: () => import('@/pages/mails/resendConfirmationEmailPage'),
    },
];

export const privateRoutes: RouteObject[] = [
    {
        index: true,
        lazy: () => import('@/pages/messenger/messenger-page'),
    },
];
