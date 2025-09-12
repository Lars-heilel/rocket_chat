import type { ResetPasswordFormData } from '@/entities/user';
import { FRONTEND_ROUTES } from '@/shared/config';
import { NavButton, type FormFieldConfig } from '@/shared/ui';
export const resetPasswordFormFields: FormFieldConfig<ResetPasswordFormData>[] = [
    {
        name: 'password',
        label: 'New Password',
        placeholder: '*****',
        type: 'password',
    },
    {
        name: 'confirmPassword',
        label: 'Confirm New Password',
        placeholder: '*****',
        type: 'password',
    },
];

export const resetPasswordContent = {
    cardContent: {
        title: 'Create a New Password',
        buttonText: 'Reset Password',
        footerLink: <NavButton variant="link" to={FRONTEND_ROUTES.LOGIN} text="Sing in"></NavButton>,
    },
    success: {
        description: 'You have successfully changed your password, you can now use it to login',
        actionLink: <NavButton to={FRONTEND_ROUTES.LOGIN} size="lg" variant="default" text="Sing in"></NavButton>,
    },
    error: {
        title: 'Link Invalid or Expired',
        actionLinkS: (
            <div className="flex flex-col sm:flex-row items-center gap-3">
                <NavButton to={FRONTEND_ROUTES.FORGOT_PASSWORD} variant="default" text="request new mail"></NavButton>
                <NavButton to={FRONTEND_ROUTES.LOGIN} variant="secondary" text="Back to Login"></NavButton>,
            </div>
        ),
    },
};
