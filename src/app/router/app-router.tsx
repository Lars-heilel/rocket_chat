import { Route, Routes } from "react-router";
import { privateRoutes, publicRoutes } from "./routes";
import { AuthLayout } from "../../feature/auth/ui/layout/authLayout";
import { LoginForm } from "@/feature/auth/components/login-form";
import { NotFoundPage } from "@/shared/components/ui/notFoundPage";

export function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<AuthLayout />}>
        <Route index element={<LoginForm />} />
        {publicRoutes.map((route) => (
          <Route
            key={route.path}
            element={<route.component />}
            path={route.path}
          />
        ))}
      </Route>
      {privateRoutes.map((route) => (
        <Route
          key={route.path}
          element={<route.component />}
          path={route.path}
        ></Route>
      ))}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
