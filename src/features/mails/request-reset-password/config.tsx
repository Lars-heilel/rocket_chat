import type { RequestResetPasswordFormData } from '@/entities/user';
import { FRONTEND_ROUTES } from '@/shared/config';
import { NavButton, type FormFieldConfig } from '@/shared/ui';

export const RequsetResetPasswordFormFields: FormFieldConfig<RequestResetPasswordFormData>[] = [
    {
        name: 'email',
        label: 'Email',
        placeholder: 'example@mail.com',
        type: 'email',
    },
];
export const RequsetResetPasswordContent = {
    cardContent: {
        title: 'Password recovery request',
        buttonText: 'Continue',
        footerText: 'Return to sign in',
        footerLink: <NavButton variant="link" text="Back to Login" to={FRONTEND_ROUTES.LOGIN}></NavButton>,
    },
    success: {
        title: 'Success!',
        actionLink: <NavButton variant="default" text="Back to Login" to={FRONTEND_ROUTES.LOGIN}></NavButton>,
    },
};
