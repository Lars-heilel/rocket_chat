import { Link } from 'react-router';
import { FRONTEND_PATHS } from '@/app/router/all-path';
import type { Path } from 'react-hook-form';
import type {
    ForgotPasswordFormData,
    LoginFormData,
    RegisterFormData,
    ResendConfirmationFormData,
    ResetPasswordFormData,
} from '@/feature/auth/model/schemas';

export interface FormFieldProps<T> {
    name: Path<T>;
    label: string;
    placeholder: string;
    type: React.HTMLInputTypeAttribute;
    formLabelChildren?: React.ReactNode;
}

const loginFormFields: FormFieldProps<LoginFormData>[] = [
    {
        name: 'email',
        label: 'Email',
        placeholder: 'example@mail.com',
        type: 'email',
    },
    {
        name: 'password',
        label: 'Password',
        placeholder: '*******',
        type: 'password',
        formLabelChildren: (
            <Link className="hover:underline" to={FRONTEND_PATHS.FORGOT_PASSWORD}>
                Forgot password?
            </Link>
        ),
    },
];
const registerFormFields: FormFieldProps<RegisterFormData>[] = [
    {
        name: 'email',
        label: 'Email',
        placeholder: 'example@mail.com',
        type: 'email',
    },
    {
        name: 'name',
        label: 'User Name',
        placeholder: 'John Doe',
        type: 'text',
    },
    {
        name: 'password',
        label: 'Password',
        placeholder: '*******',
        type: 'password',
    },
    {
        name: 'confirmPassword',
        label: 'Confirm Password',
        placeholder: '*******',
        type: 'password',
    },
];
const resetPasswordFormFields: FormFieldProps<ResetPasswordFormData>[] = [
    {
        name: 'password',
        label: 'Password',
        placeholder: '*******',
        type: 'password',
    },
    {
        name: 'confirmPassword',
        label: 'Confirm Password',
        placeholder: '*******',
        type: 'password',
    },
];
const forgotPasswordFormFields: FormFieldProps<ForgotPasswordFormData>[] = [
    {
        name: 'email',
        label: 'Email',
        placeholder: 'example@mail.com',
        type: 'email',
    },
];
const resendConfirmationEmailFormFields: FormFieldProps<ResendConfirmationFormData>[] = [
    {
        name: 'email',
        label: 'Email',
        placeholder: 'example@mail.com',
        type: 'email',
    },
];

export {
    loginFormFields,
    registerFormFields,
    resendConfirmationEmailFormFields,
    resetPasswordFormFields,
    forgotPasswordFormFields,
};
