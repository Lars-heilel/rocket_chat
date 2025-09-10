import type { ResetPasswordFormData } from '@/entities/user';
import { FRONTEND_ROUTES } from '@/shared/config';
import type { FormFieldConfig } from '@/shared/ui';
export const resetPasswordFormFields: FormFieldConfig<ResetPasswordFormData>[] = [
    {
        name: 'password',
        label: 'New Password',
        placeholder: 'Enter your new password',
        type: 'password',
    },
    {
        name: 'confirmPassword',
        label: 'Confirm New Password',
        placeholder: 'Enter your new password again',
        type: 'password',
    },
];

export const resetPasswordContent = {
    form: {
        title: 'Create a New Password',
        buttonText: 'Reset Password',
        footerText: 'Remembered your password?',
        footerLink: {
            to: FRONTEND_ROUTES.LOGIN,
            label: 'Sign in',
        },
    },
    success: {
        title: 'Password Changed!',
        description: (data: { message: string }) => data.message || 'Your password has been successfully updated.',
        actionLink: {
            to: FRONTEND_ROUTES.LOGIN,
            label: 'Proceed to Login',
        },
    },
    error: {
        invalidToken: {
            title: 'Link Invalid or Expired',
            description: (error: { tokenErrorMessage: string }) => error.tokenErrorMessage || 'This link is no longer valid.',
            actionLink: {
                to: FRONTEND_ROUTES.FORGOT_PASSWORD,
                label: 'Request a New Link',
            },
        },
    },
};
