import { FRONTEND_ROUTES } from '@/shared/config';

export const verifyEmailContent = {
    main: {
        title: 'Verification',
        header: 'One last step',
        description: 'Click the button below to confirm your account.',
        buttonText: 'Confirm Account',
        footerText: 'Something went wrong?',
        footerLink: {
            to: FRONTEND_ROUTES.LOGIN,
            label: 'Return to home',
        },
    },
    success: {
        title: 'Verification was successful!',
        actionLink: {
            to: FRONTEND_ROUTES.MESSENGER,
            label: 'Continue',
        },
    },
    error: {
        verificationFailed: {
            title: 'Verification Failed',
            description: (error: { errorMessage?: string; tokenErrorMessage?: string }) =>
                error.errorMessage || error.tokenErrorMessage || 'An unknown error occurred.',
            actionLink: {
                to: FRONTEND_ROUTES.RESEND_CONFIRMATION,
                label: 'Request a new link',
            },
        },
    },
};
