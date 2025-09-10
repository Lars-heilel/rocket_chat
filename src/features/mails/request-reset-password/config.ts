import type { RequestResetPasswordFormData } from '@/entities/user';
import { FRONTEND_ROUTES } from '@/shared/config';
import type { FormFieldConfig } from '@/shared/ui';

export const RequsetResetPasswordFormFields: FormFieldConfig<RequestResetPasswordFormData>[] = [
    {
        name: 'email',
        label: 'Email',
        placeholder: 'example@mail.com',
        type: 'email',
    },
];
export const RequsetResetPasswordTxtContent = {
    form: {
        title: 'Password recovery request',
        buttonText: 'Continue',
        footerText: 'Return to sign in',
        footerLink: {
            to: FRONTEND_ROUTES.LOGIN,
            label: 'Sign in',
        },
    },
    success: {
        title: 'Success!',
        description: (data: { message: string }) => data.message,
        actionLink: {
            to: FRONTEND_ROUTES.LOGIN,
            label: 'Return to login',
        },
    },
};
