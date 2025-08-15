import { Route, Routes } from "react-router";
import { publicRoutes } from "./routes";
import { AuthLayout } from "../../feature/auth/ui/layout/authLayout";
import { LoginForm } from "@/feature/auth/components/login-form";
import { NotFoundPage } from "@/shared/components/ui/notFoundPage";
import MessengerLayout from "@/feature/messenger/ui/layout/messenger-layout";

export function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<AuthLayout />}>
        <Route index element={<LoginForm />} />
        {publicRoutes.map((route) => (
          <Route element={<route.component />} path={route.path} />
        ))}
      </Route>
      <Route path="/messenger" element={<MessengerLayout />}></Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
