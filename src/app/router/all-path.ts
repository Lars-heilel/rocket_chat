const FRONTEND_PATHS = {
    LOGIN: '/',
    REGISTER: '/register',
    FORGOT_PASSWORD: '/forgot-password',
    RESET_PASSWORD: '/reset-password',
    VERIFY_ACCOUNT: '/verify-account',
    RESEND_CONFIRMATION: '/resend-confirmation',
};
const FRONTEND_PROTECTED_PATH = {
    MESSENGER: '/messenger',
};

// backend paths
const AUTH_PATH_BACKEND = {
    LOGIN: '/auth/login',
    REGISTER: '/auth/register',
    LOGOUT: '/auth/logout',
    REFRESH: '/auth/refresh',
};
export const MAILS_PATH_BACKEND = {
    FORGOT_PASSWORD: '/mails/forgot-password',
    RESET_PASSWORD: '/mails/reset-password',
    RESEND_CONFIRMATION: '/mails/resend-confirmation',
    VERIFY_ACCOUNT: '/mails/verify-account',
};
const USER_PATH_BACKEND = {
    MY_PROFILE: '/users/profile',
};
const FRIENDSHIP_PATH_BACKEND = {
    FRIENDSHIP: '/friendship',
    FRIENDLIST: '/friendship/list',
};
const CHAT_PATH_BACKEND = {
    CHAT: '/chat/history',
};
export {
    FRIENDSHIP_PATH_BACKEND,
    FRONTEND_PROTECTED_PATH,
    FRONTEND_PATHS,
    CHAT_PATH_BACKEND,
    USER_PATH_BACKEND,
    AUTH_PATH_BACKEND,
};
