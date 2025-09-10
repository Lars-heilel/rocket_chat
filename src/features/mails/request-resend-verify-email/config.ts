import type { ResendVerifyEmailFormData } from '@/entities/user';
import { FRONTEND_ROUTES } from '@/shared/config';
import type { FormFieldConfig } from '@/shared/ui';

export const ResendVerifyMailFormFields: FormFieldConfig<ResendVerifyEmailFormData>[] = [
    {
        name: 'email',
        label: 'Email',
        placeholder: 'example@mail.com',
        type: 'email',
    },
];
export const ResendVerifyMailTxtContent = {
    form: {
        title: 'Resend confirmation email',
        buttonText: 'Continue',
        footerText: 'Return to login?',
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
