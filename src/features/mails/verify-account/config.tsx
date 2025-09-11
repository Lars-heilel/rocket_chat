import { FRONTEND_ROUTES } from '@/shared/config';
import { NavButton } from '@/shared/ui';

export const verifyEmailContent = {
    main: {
        title: 'Email Confirmation',
        header: 'One Last Step',
        description: 'Click the button below to confirm your email address and activate your account.',
        buttonText: 'Verify My Account',
        footerLink: <NavButton to={FRONTEND_ROUTES.LOGIN} variant="link" text="Return to login"></NavButton>,
    },
    success: {
        title: 'Verification Complete!',
        description: 'Your account has been successfully verified. Welcome aboard!',
        actionLink: <NavButton to={FRONTEND_ROUTES.MESSENGER} variant="default" text="Continue"></NavButton>,
    },
    error: {
        title: 'Verification Failed',
        actionLinks: (
            <div className="flex flex-col sm:flex-row items-center gap-3">
                <NavButton to={FRONTEND_ROUTES.RESEND_CONFIRMATION} variant="default" text="Request to new mail"></NavButton>,
                <NavButton to={FRONTEND_ROUTES.LOGIN} variant="default" text="Back to Login"></NavButton>,
            </div>
        ),
    },
};
