import type { LoginFormData } from '@/entities/user';
import { FRONTEND_ROUTES } from '@/shared/config';
import { NavButton, type FormFieldConfig } from '@/shared/ui';

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
        formLabelChildren: <NavButton variant="link" to={FRONTEND_ROUTES.FORGOT_PASSWORD} text="Forgot password?"></NavButton>,
    },
];
export const loginContent = {
    cardContent: {
        title: 'Sign in to your account',
        buttonText: 'Login',
        footerText: 'Need an account?',
        footerLink: <NavButton variant="link" to={FRONTEND_ROUTES.REGISTER} text="Register"></NavButton>,
    },
};
