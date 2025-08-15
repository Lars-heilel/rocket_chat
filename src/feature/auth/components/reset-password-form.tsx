import { AuthCard } from "../ui/elements/auth-card";
import { FRONTEND_PATHS } from "@/shared/constants/all-path";
import { Link } from "react-router";
import { BaseAuthForm } from "../ui/elements/base-auth-form";
import { useLogin } from "../hooks/useLogin";
import { resetPasswordFormFields } from "../model/const/form-fields-config";
export function ResetPasswordForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const { form, onSubmit } = useLogin();
  return (
    <AuthCard
      title="Enter new password"
      errorTitle="Reset password failed"
      className={className}
      footerContent={
        <>
          <span>Return to login?</span>
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
        fields={resetPasswordFormFields}
        btnTitle="Reset"
      ></BaseAuthForm>
    </AuthCard>
  );
}
