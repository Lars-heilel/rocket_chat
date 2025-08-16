import { useCreateForms } from "@/shared/hooks/useCreateForms";
import { useLogin } from "../model/hooks/useLogin";
import { LoginSchema } from "../model/schemas/loginFromSchema";
import { AuthCard } from "../ui/elements/auth-card";
import { Link } from "react-router";
import { BaseAuthForm } from "../ui/elements/base-auth-form";
import { FRONTEND_PATHS } from "@/app/router/all-path";
import { loginFormFields } from "../model/const/form-fields-config";

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const { onSubmit } = useLogin();
  const form = useCreateForms({
    schema: LoginSchema,
    mode: "onChange",
    defaultValues: { email: "", password: "" },
  });
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
