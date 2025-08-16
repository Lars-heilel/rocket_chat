import { ConfirmEmailPage } from "@/feature/auth/components/confirm-email-page";
// import { ForgotPasswordForm } from "@/pages/forgot-password-form";
import { LoginForm } from "@/feature/auth/components/login-form";
import { RegisterForm } from "@/feature/auth/components/register-form";
import { ResendConfirmEmailForm } from "@/feature/auth/components/resend-confirm-email-form";
import { ResetPasswordForm } from "@/feature/auth/components/reset-password-form";
import MessengerLayout from "@/feature/messenger/ui/layout/messenger-layout";
import { FRONTEND_PATHS, FRONTEND_PROTECTED_PATH } from "@/app/router/all-path";
import type { ComponentType } from "react";
interface AppRoute {
  path: string;
  component: ComponentType;
}

export const publicRoutes: AppRoute[] = [
  { path: FRONTEND_PATHS.LOGIN, component: LoginForm },
  { path: FRONTEND_PATHS.REGISTER, component: RegisterForm },
  // { path: FRONTEND_PATHS.FORGOT_PASSWORD, component: ForgotPasswordForm },
  { path: FRONTEND_PATHS.RESET_PASSWORD, component: ResetPasswordForm },
  { path: FRONTEND_PATHS.CONFIRM_EMAIL, component: ConfirmEmailPage },
  {
    path: FRONTEND_PATHS.RESEND_CONFIRMATION,
    component: ResendConfirmEmailForm,
  },
];
export const privateRoutes: AppRoute[] = [
  { path: FRONTEND_PROTECTED_PATH.MESSENGER, component: MessengerLayout },
];
