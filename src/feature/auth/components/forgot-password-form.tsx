import { AuthCard } from "../ui/elements/auth-card";
import { FRONTEND_PATHS } from "@/shared/constants/all-path";
import { Link } from "react-router";
import { BaseAuthForm } from "../ui/elements/base-auth-form";
import { useLogin } from "../hooks/useLogin";
import { forgotPasswordFormFields } from "../model/const/form-fields-config";
export function ForgotPasswordForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const { form, onSubmit } = useLogin();
  return (
    <AuthCard
      title="Password recovery request"
      errorTitle="Recover error"
      className={className}
      footerContent={
        <>
          <span>Return to sign in</span>
          <Link className="hover:underline" to={FRONTEND_PATHS.LOGIN}>
            {"Sign in"}
          </Link>
        </>
      }
      {...props}
    >
      <BaseAuthForm
        form={form}
        onSubmit={onSubmit}
        fields={forgotPasswordFormFields}
        btnTitle="send request"
      ></BaseAuthForm>
    </AuthCard>
  );
}
