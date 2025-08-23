import { AuthCard } from "../ui/elements/auth-card";
import { FRONTEND_PATHS } from "@/shared/constants/all-path";
import { Link } from "react-router";
import { BaseAuthForm } from "../ui/elements/base-auth-form";
import { useLogin } from "../hooks/useLogin";
import { loginFormFields } from "../model/const/form-fields-config";
export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const { form, onSubmit } = useLogin();
  return (
    <AuthCard
      title="Sign in to your account"
      errorTitle="Login error occurred"
      className={className}
      footerContent={
        <>
          <span>Need an account?</span>
          <Link className="hover:underline" to={FRONTEND_PATHS.REGISTER}>
            {"Register"}
          </Link>
        </>
      }
      {...props}
    >
      <BaseAuthForm
        form={form}
        onSubmit={onSubmit}
        fields={loginFormFields}
        btnTitle="Login"
      ></BaseAuthForm>
    </AuthCard>
  );
}
