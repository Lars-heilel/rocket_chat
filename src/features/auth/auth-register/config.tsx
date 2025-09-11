import { FRONTEND_ROUTES } from '@/shared/config';
import type { RegisterFormData } from '@/entities/user';
import { NavButton, type FormFieldConfig } from '@/shared/ui';
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
export const RegisterContent = {
    cardContent: {
        title: 'Sign up new account',
        buttonText: 'Register',
        footerText: 'Return to login?',
        footerLink: <NavButton variant="link" text="login" to={FRONTEND_ROUTES.LOGIN}></NavButton>,
    },
    success: {
        title: 'Account Created!',
        description: 'A confirmation link has been sent to your email. Please check your inbox to complete the registration.',
        actionLinks: <NavButton variant="default" size="lg" text="Back to login" to={FRONTEND_ROUTES.LOGIN}></NavButton>,
    },
};
