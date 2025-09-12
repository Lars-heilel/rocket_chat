import type { ResendVerifyEmailFormData } from '@/entities/user';
import { FRONTEND_ROUTES } from '@/shared/config';
import { NavButton, type FormFieldConfig } from '@/shared/ui';

export const ResendVerifyMailFormFields: FormFieldConfig<ResendVerifyEmailFormData>[] = [
    {
        name: 'email',
        label: 'Email',
        placeholder: 'example@mail.com',
        type: 'email',
    },
];
export const ResendVerifyMailContent = {
    cardContent: {
        title: 'Resend confirmation email',
        buttonText: 'Continue',
        footerText: 'Return to login?',
        footerLink: <NavButton variant="link" text="Sign in" to={FRONTEND_ROUTES.LOGIN}></NavButton>,
    },
    success: {
        title: 'Success!',
        description: (data: { message: string }) => data.message,
        actionLink: <NavButton variant="default" text="Return to login" to={FRONTEND_ROUTES.LOGIN}></NavButton>,
    },
};
