import { FRONTEND_PATHS, FRONTEND_PROTECTED_PATH } from '@/app/router/all-path';
export const AUTH_CONTENT_CONFIG = {
    login: {
        form: {
            title: 'Sign in to your account',
            buttonText: 'Login',
            footerText: 'Need an account?',
            footerLink: {
                to: FRONTEND_PATHS.REGISTER,
                label: 'Register',
            },
        },
    },
    register: {
        form: {
            title: 'Sign up new account',
            buttonText: 'Register',
            footerText: 'Return to login?',
            footerLink: {
                to: FRONTEND_PATHS.LOGIN,
                label: 'Login',
            },
        },
        success: {
            title: 'Registration was successful!',
            description: (data: { message: string }) => data.message,
            actionLink: {
                to: FRONTEND_PATHS.LOGIN,
                label: 'Return to login',
            },
        },
    },
    forgotPassword: {
        form: {
            title: 'Password recovery request',
            buttonText: 'Continue',
            footerText: 'Return to sign in',
            footerLink: {
                to: FRONTEND_PATHS.LOGIN,
                label: 'Sign in',
            },
        },
        success: {
            title: 'Success!',
            description: (data: { message: string }) => data.message,
            actionLink: {
                to: FRONTEND_PATHS.LOGIN,
                label: 'Return to login',
            },
        },
    },
    resetPassword: {
        form: {
            title: 'Enter new password',
            buttonText: 'Reset',
            footerText: 'Return to login?',
            footerLink: {
                to: FRONTEND_PATHS.LOGIN,
                label: 'Sign in',
            },
        },
        success: {
            title: 'Success!',
            description: (data: { message: string }) => data.message,
            actionLink: {
                to: FRONTEND_PATHS.LOGIN,
                label: 'Return to login',
            },
        },
        error: {
            invalidToken: {
                title: 'Link Invalid',
                description: (error: { tokenErrorMessage: string }) => error.tokenErrorMessage,
                actionLink: {
                    to: FRONTEND_PATHS.FORGOT_PASSWORD,
                    label: 'Request a new link',
                },
            },
        },
    },
    resendConfirmEmail: {
        form: {
            title: 'Resend confirmation email',
            buttonText: 'Continue',
            footerText: 'Return to login?',
            footerLink: {
                to: FRONTEND_PATHS.LOGIN,
                label: 'Sign in',
            },
        },
        success: {
            title: 'Success!',
            description: (data: { message: string }) => data.message,
            actionLink: {
                to: FRONTEND_PATHS.LOGIN,
                label: 'Return to login',
            },
        },
    },
    verifyEmail: {
        main: {
            title: 'Verification',
            header: 'One last step',
            description: 'Click the button below to confirm your account.',
            buttonText: 'Confirm Account',
            footerText: 'Something went wrong?',
            footerLink: {
                to: FRONTEND_PATHS.LOGIN,
                label: 'Return to home',
            },
        },
        success: {
            title: 'Verification was successful!',
            actionLink: {
                to: FRONTEND_PROTECTED_PATH.MESSENGER,
                label: 'Continue',
            },
        },
        error: {
            verificationFailed: {
                title: 'Verification Failed',
                description: (error: { errorMessage?: string; tokenErrorMessage?: string }) =>
                    error.errorMessage || error.tokenErrorMessage || 'An unknown error occurred.',
                actionLink: {
                    to: FRONTEND_PATHS.RESEND_CONFIRMATION,
                    label: 'Request a new link',
                },
            },
        },
    },
} as const;
