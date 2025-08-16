import { AuthCard } from "../ui/elements/auth-card";
import { Link } from "react-router";
import { BaseAuthForm } from "../ui/elements/base-auth-form";
import { resendConfirmationEmailFormFields } from "../model/const/form-fields-config";
import { useLogin } from "../model/hooks/useLogin";
import { FRONTEND_PATHS } from "@/app/router/all-path";
import { resendConfirmationSchema } from "../model/schemas/resendConfirmation.schema";
import { useCreateForms } from "@/shared/hooks/useCreateForms";
export function ResendConfirmEmailForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const { onSubmit } = useLogin();
  const form = useCreateForms({
    schema: resendConfirmationSchema,
    mode: "onChange",
    defaultValues: { email: "" },
  });
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
