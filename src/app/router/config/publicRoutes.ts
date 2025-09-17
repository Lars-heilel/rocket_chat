import { FRONTEND_ROUTES } from '@/shared/config';
import type { RouteObject } from 'react-router';

export const publicRoutes: RouteObject[] = [
    {
        path: FRONTEND_ROUTES.LOGIN,
        lazy: () => import('@/pages/auth/LoginPage'),
    },
    {
        path: FRONTEND_ROUTES.REGISTER,
        lazy: () => import('@/pages/auth/RegisterPage'),
    },
    {
        path: FRONTEND_ROUTES.FORGOT_PASSWORD,
        lazy: () => import('@/pages/mails/RequestResetPasswordPage'),
    },
    {
        path: FRONTEND_ROUTES.RESET_PASSWORD,
        lazy: () => import('@/pages/mails/ResetPasswordPage'),
    },
    {
        path: FRONTEND_ROUTES.VERIFY_ACCOUNT,
        lazy: () => import('@/pages/mails/VerifyEmailPage'),
    },
    {
        path: FRONTEND_ROUTES.RESEND_CONFIRMATION,
        lazy: () => import('@/pages/mails/ResendVerifyEmailPage'),
    },
];
