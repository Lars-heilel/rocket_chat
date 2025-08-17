import { useSelector } from "react-redux";
import type { RootState } from "../store/reduxStore";

import { Navigate, Outlet } from "react-router";
import { FRONTEND_PATHS } from "../router/all-path";

export function ProtectedRoute() {
  const { token } = useSelector((state: RootState) => state.auth);
  return token ? (
    <Outlet></Outlet>
  ) : (
    <Navigate to={FRONTEND_PATHS.LOGIN} replace></Navigate>
  );
}
