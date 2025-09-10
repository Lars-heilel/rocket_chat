import type { LoginFormData } from '@/entities/user';
import { FRONTEND_ROUTES } from '@/shared/config';
import type { FormFieldConfig } from '@/shared/ui';
import { Link } from 'react-router';

export const loginFormFields: FormFieldConfig<LoginFormData>[] = [
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
            <Link className="hover:underline" to={FRONTEND_ROUTES.FORGOT_PASSWORD}>
                Forgot password?
            </Link>
        ),
    },
];
export const loginTxtContent = {
    form: {
        title: 'Sign in to your account',
        buttonText: 'Login',
        footerText: 'Need an account?',
        footerLink: {
            to: FRONTEND_ROUTES.REGISTER,
            label: 'Register',
        },
    },
};
