import { LoginForm } from "@/feature/auth/components/login-form";
import { FRONTEND_PATHS } from "@/shared/constants/all-path";
import type { ComponentType } from "react";
interface AppRoute {
  path: string;
  component: ComponentType;
}

export const publicRoutes: AppRoute[] = [
  { path: FRONTEND_PATHS.LOGIN, component: LoginForm },
];
