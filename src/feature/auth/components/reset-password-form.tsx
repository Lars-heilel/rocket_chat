import { AuthCard } from "../ui/elements/auth-card";
import { Link } from "react-router";
import { BaseAuthForm } from "../ui/elements/base-auth-form";
import { resetPasswordFormFields } from "../model/const/form-fields-config";
import { useLogin } from "../model/hooks/useLogin";
import { FRONTEND_PATHS } from "@/app/router/all-path";
import { resetPasswordSchema } from "../model/schemas/resetPassword.schema";
import { useCreateForms } from "@/shared/hooks/useCreateForms";
export function ResetPasswordForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const { onSubmit } = useLogin();
  const form = useCreateForms({
    schema: resetPasswordSchema,
    mode: "onChange",
    defaultValues: { password: "", confirmPassword: "" },
  });
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
