import { Route, Routes } from "react-router";
import { privateRoutes, publicRoutes } from "./routes";
import { AuthLayout } from "../layouts/authLayout";
import { NotFoundPage } from "@/shared/components/ui/notFoundPage";
import { LoginPage } from "@/pages/auth/loginPage";
import { ProtectedRoute } from "../providers/protectedRoutes";

export function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<AuthLayout />}>
        <Route index element={<LoginPage />} />
        {publicRoutes.map((route) => (
          <Route
            key={route.path}
            element={<route.component />}
            path={route.path}
          />
        ))}
      </Route>
      <Route element={<ProtectedRoute />}>
        {privateRoutes.map((route) => (
          <Route
            key={route.path}
            element={<route.component />}
            path={route.path}
          ></Route>
        ))}
      </Route>

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
