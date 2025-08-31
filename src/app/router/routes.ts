import { AUTH_FRONTEND_PATH, MAILS_FRONTEND_PATH } from '@/feature/auth/model/const';
import type { RouteObject } from 'react-router';

export const publicRoutes: RouteObject[] = [
    {
        index: true,
        lazy: () => import('@/pages/auth/loginPage'),
    },
    {
        path: AUTH_FRONTEND_PATH.REGISTER,
        lazy: () => import('@/pages/auth/registerPage'),
    },
    {
        path: MAILS_FRONTEND_PATH.FORGOT_PASSWORD,
        lazy: () => import('@/pages/mails/forgotPasswordPage'),
    },
    {
        path: MAILS_FRONTEND_PATH.RESET_PASSWORD,
        lazy: () => import('@/pages/mails/resetPasswordPage'),
    },
    {
        path: MAILS_FRONTEND_PATH.VERIFY_ACCOUNT,
        lazy: () => import('@/pages/mails/verifyEmailPage'),
    },
    {
        path: MAILS_FRONTEND_PATH.RESEND_CONFIRMATION,
        lazy: () => import('@/pages/mails/resendConfirmationEmailPage'),
    },
];

export const privateRoutes: RouteObject[] = [
    {
        index: true,
        lazy: () => import('@/pages/messenger/messenger-page'),
    },
];
