import { Link } from "react-router";
import { FRONTEND_PATHS } from "@/app/router/all-path";

export interface FormFieldProps {
  name: "email" | "password" | "confirmPassword" | "userName";
  label: string;
  placeholder: "example@mail.com" | "*******";
  type: React.HTMLInputTypeAttribute;
  formLabelChildren?: React.ReactNode;
}

const loginFormFields: FormFieldProps[] = [
  {
    name: "email",
    label: "Email",
    placeholder: "example@mail.com",
    type: "email",
  },
  {
    name: "password",
    label: "Password",
    placeholder: "*******",
    type: "password",
    formLabelChildren: (
      <Link className="hover:underline" to={FRONTEND_PATHS.FORGOT_PASSWORD}>
        Forgot password?
      </Link>
    ),
  },
];
const registerFormFields: FormFieldProps[] = [
  {
    name: "email",
    label: "Email",
    placeholder: "example@mail.com",
    type: "email",
  },
  {
    name: "password",
    label: "Password",
    placeholder: "*******",
    type: "password",
  },
  {
    name: "confirmPassword",
    label: "ConfirmPassword",
    placeholder: "*******",
    type: "password",
  },
];
const resetPasswordFormFields: FormFieldProps[] = [
  {
    name: "password",
    label: "Password",
    placeholder: "*******",
    type: "password",
  },
  {
    name: "confirmPassword",
    label: "ConfirmPassword",
    placeholder: "*******",
    type: "password",
  },
];
const forgotPasswordFormFields: FormFieldProps[] = [
  {
    name: "email",
    label: "Email",
    placeholder: "example@mail.com",
    type: "email",
  },
];
const resendConfirmationEmailFormFields: FormFieldProps[] = [
  {
    name: "email",
    label: "Email",
    placeholder: "example@mail.com",
    type: "email",
  },
];

export {
  loginFormFields,
  registerFormFields,
  resendConfirmationEmailFormFields,
  resetPasswordFormFields,
  forgotPasswordFormFields,
};
