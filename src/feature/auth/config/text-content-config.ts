import { FRONTEND_PROTECTED_PATH } from '@/app/router/all-path';
import { AUTH_FRONTEND_PATH, MAILS_FRONTEND_PATH } from '../model/const';

export const AUTH_CONTENT_CONFIG = {
    login: {
        form: {
            title: 'Sign in to your account',
            buttonText: 'Login',
            footerText: 'Need an account?',
            footerLink: {
                to: AUTH_FRONTEND_PATH.REGISTER,
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
                to: AUTH_FRONTEND_PATH.LOGIN,
                label: 'Login',
            },
        },
        success: {
            title: 'Registration was successful!',
            description: (data: { message: string }) => data.message,
            actionLink: {
                to: AUTH_FRONTEND_PATH.LOGIN,
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
                to: AUTH_FRONTEND_PATH.LOGIN,
                label: 'Sign in',
            },
        },
        success: {
            title: 'Success!',
            description: (data: { message: string }) => data.message,
            actionLink: {
                to: AUTH_FRONTEND_PATH.LOGIN,
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
                to: AUTH_FRONTEND_PATH.LOGIN,
                label: 'Sign in',
            },
        },
        success: {
            title: 'Success!',
            description: (data: { message: string }) => data.message,
            actionLink: {
                to: AUTH_FRONTEND_PATH.LOGIN,
                label: 'Return to login',
            },
        },
        error: {
            invalidToken: {
                title: 'Link Invalid',
                description: (error: { tokenErrorMessage: string }) => error.tokenErrorMessage,
                actionLink: {
                    to: MAILS_FRONTEND_PATH.FORGOT_PASSWORD,
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
                to: AUTH_FRONTEND_PATH.LOGIN,
                label: 'Sign in',
            },
        },
        success: {
            title: 'Success!',
            description: (data: { message: string }) => data.message,
            actionLink: {
                to: AUTH_FRONTEND_PATH.LOGIN,
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
                to: AUTH_FRONTEND_PATH.LOGIN,
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
                    to: MAILS_FRONTEND_PATH.RESEND_CONFIRMATION,
                    label: 'Request a new link',
                },
            },
        },
    },
} as const;
