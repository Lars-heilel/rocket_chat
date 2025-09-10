import type { FormFieldConfig } from '@/shared/ui';
import type { RegisterFormData } from './model/schema';
import { FRONTEND_ROUTES } from '@/shared/config';
export const registerFormFields: FormFieldConfig<RegisterFormData>[] = [
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
export const RegisterTxtContent = {
    form: {
        title: 'Sign up new account',
        buttonText: 'Register',
        footerText: 'Return to login?',
        footerLink: {
            to: FRONTEND_ROUTES.LOGIN,
            label: 'Login',
        },
    },
    success: {
        title: 'Registration was successful!',
        description: (data: { message: string }) => data.message,
        actionLink: {
            to: FRONTEND_ROUTES.LOGIN,
            label: 'Return to login',
        },
    },
};
