import { FRONTEND_PATHS, FRONTEND_PROTECTED_PATH } from '@/app/router/all-path';
import type { ComponentType } from 'react';
import {
  VerifyEmailPage,
  ForgotPasswordPage,
  LoginPage,
  RegisterPage,
  ResendConfirmationEmailPage,
  ResetPasswordPage,
} from '@/pages';
import MessengerLayout from '../layouts/messenger-layout';

interface AppRoute {
  path: string;
  component: ComponentType;
}

export const publicRoutes: AppRoute[] = [
  { path: FRONTEND_PATHS.LOGIN, component: LoginPage },
  { path: FRONTEND_PATHS.REGISTER, component: RegisterPage },
  { path: FRONTEND_PATHS.FORGOT_PASSWORD, component: ForgotPasswordPage },
  { path: FRONTEND_PATHS.RESET_PASSWORD, component: ResetPasswordPage },
  { path: FRONTEND_PATHS.CONFIRM_EMAIL, component: VerifyEmailPage },
  {
    path: FRONTEND_PATHS.RESEND_CONFIRMATION,
    component: ResendConfirmationEmailPage,
  },
];

export const privateRoutes: AppRoute[] = [
  { path: FRONTEND_PROTECTED_PATH.MESSENGER, component: MessengerLayout },
];
