import { FRONTEND_ROUTES } from '@/shared/config';
import type { RouteObject } from 'react-router';

export const publicRoutes: RouteObject[] = [
    {
        index: true,
        lazy: () => import('@/pages/auth/loginPage'),
    },
    {
        path: FRONTEND_ROUTES.REGISTER,
        lazy: () => import('@/pages/auth/registerPage'),
    },
    {
        path: FRONTEND_ROUTES.FORGOT_PASSWORD,
        lazy: () => import('@/pages/mails/forgotPasswordPage'),
    },
    {
        path: FRONTEND_ROUTES.RESET_PASSWORD,
        lazy: () => import('@/pages/mails/resetPasswordPage'),
    },
    {
        path: FRONTEND_ROUTES.VERIFY_ACCOUNT,
        lazy: () => import('@/pages/mails/verifyEmailPage'),
    },
    {
        path: FRONTEND_ROUTES.RESEND_CONFIRMATION,
        lazy: () => import('@/pages/mails/resendConfirmationEmailPage'),
    },
];
