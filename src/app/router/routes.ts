import { FRONTEND_PATHS, FRONTEND_PROTECTED_PATH } from '@/app/router/all-path';
import type { RouteObject } from 'react-router';

export const publicRoutes: RouteObject[] = [
  {
    path: FRONTEND_PATHS.LOGIN,
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
    path: FRONTEND_PATHS.CONFIRM_EMAIL,
    lazy: () => import('@/pages/mails/verifyEmailPage'),
  },
  {
    path: FRONTEND_PATHS.RESEND_CONFIRMATION,
    lazy: () => import('@/pages/mails/resendConfirmationEmailPage'),
  },
];

export const privateRoutes: RouteObject[] = [
  {
    path: FRONTEND_PROTECTED_PATH.MESSENGER,
    lazy: () => import('../layouts/messengerLayout'),
  },
];
