import {AuthCard} from "../ui/auth-card";
import {Link} from "react-router";
import {BaseAuthForm} from "../ui/base-auth-form";

import {registerFormFields} from "../const/form-fields-config";
import {FRONTEND_PATHS} from "@/app/router/all-path";
import {useCreateForms} from "@/shared/hooks/useCreateForms";
import {registerSchema} from "../schemas/register.schema";
import {useLogin} from "../hooks/useLogin";

export function RegisterForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const { onSubmit } = useLogin();
  const form = useCreateForms({
    schema: registerSchema,
    mode: "onChange",
    defaultValues: {
      email: "",
      userName: "",
      password: "",
      confirmPassword: "",
    },
  });
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
