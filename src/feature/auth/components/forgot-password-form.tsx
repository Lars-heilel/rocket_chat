import { AuthCard } from "../ui/auth-card";
import { FRONTEND_PATHS } from "@/app/router/all-path";
import { Link } from "react-router";
import { BaseAuthForm } from "../ui/base-auth-form";
import { forgotPasswordFormFields } from "../config/form-fields-config";
import useForgotPassword from "../hooks/useForgotPassword";

export function ForgotPasswordForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const { form, onSubmit, isSuccess, resMessage } = useForgotPassword();
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
      {isSuccess ? (
        <div className="text-3xl">{resMessage}</div>
      ) : (
        <BaseAuthForm
          form={form}
          onSubmit={onSubmit}
          fields={forgotPasswordFormFields}
          btnTitle="send request"
        ></BaseAuthForm>
      )}
    </AuthCard>
  );
}
