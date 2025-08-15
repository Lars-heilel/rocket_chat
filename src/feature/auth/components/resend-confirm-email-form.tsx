import { AuthCard } from "../ui/elements/auth-card";
import { FRONTEND_PATHS } from "@/shared/constants/all-path";
import { Link } from "react-router";
import { BaseAuthForm } from "../ui/elements/base-auth-form";
import { useLogin } from "../hooks/useLogin";
import { resendConfirmationEmailFormFields } from "../model/const/form-fields-config";
export function ResendConfirmEmailForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const { form, onSubmit } = useLogin();
  return (
    <AuthCard
      title="Resend confirmation email"
      errorTitle="aboba"
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
        fields={resendConfirmationEmailFormFields}
        btnTitle="Resend"
      ></BaseAuthForm>
    </AuthCard>
  );
}
