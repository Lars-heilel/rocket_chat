import { AuthCard } from "../ui/elements/auth-card";
import { FRONTEND_PATHS } from "@/app/router/all-path";
import { Link } from "react-router";
import { BaseAuthForm } from "../ui/elements/base-auth-form";
import { forgotPasswordFormFields } from "../model/const/form-fields-config";
import { useLogin } from "../model/hooks/useLogin";
import { useCreateForms } from "@/shared/hooks/useCreateForms";
import { forgotPasswordSchema } from "../model/schemas/forgotPassword.schema";

export function ForgotPasswordForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const { onSubmit } = useLogin();
  const form = useCreateForms({
    schema: forgotPasswordSchema,
    mode: "onChange",
    defaultValues: { email: "" },
  });
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
