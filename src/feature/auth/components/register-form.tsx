import { AuthCard } from "../ui/elements/auth-card";
import { FRONTEND_PATHS } from "@/shared/constants/all-path";
import { Link } from "react-router";
import { BaseAuthForm } from "../ui/elements/base-auth-form";
import { useLogin } from "../hooks/useLogin";
import { registerFormFields } from "../model/const/form-fields-config";
export function RegisterForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const { form, onSubmit } = useLogin();
  return (
    <AuthCard
      title="Sign up new account"
      errorTitle="Register error occurred"
      className={className}
      footerContent={
        <>
          <span>Return to login?</span>
          <Link className="hover:underline" to={FRONTEND_PATHS.LOGIN}>
            {"Login"}
          </Link>
        </>
      }
      {...props}
    >
      <BaseAuthForm
        form={form}
        onSubmit={onSubmit}
        fields={registerFormFields}
        btnTitle="Sign up"
      ></BaseAuthForm>
    </AuthCard>
  );
}
