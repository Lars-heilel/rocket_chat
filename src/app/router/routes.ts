import type { JSX } from "react";
import { FRONTEND_PATHS, FRONTEND_PROTECTED_PATH } from "./all-path";

interface IRouter {
  path: string;
  component: JSX.Element;
}
export const publicRoutes = [];
export const privateRoutes = [];
