export const FRONTEND_ROUTES = {
    // --- Public routes ---
    LOGIN: '/',
    REGISTER: '/register',
    FORGOT_PASSWORD: '/forgot-password',
    RESET_PASSWORD: '/reset-password',
    VERIFY_ACCOUNT: '/verify-account',
    RESEND_CONFIRMATION: '/resend-confirmation',

    // --- Private routes ---
    MESSENGER: '/messenger',

    // --- Other ---
    NOT_FOUND: '*',
} as const;

export const BACKEND_ROUTES = {
    // --- Auth ---
    LOGIN: '/auth/login',
    REGISTER: '/auth/register',
    LOGOUT: '/auth/logout',
    REFRESH: '/auth/refresh',

    // --- Mails ---
    FORGOT_PASSWORD: '/mails/forgot-password',
    RESET_PASSWORD: '/mails/reset-password',
    RESEND_CONFIRMATION: '/mails/resend-confirmation',
    VERIFY_ACCOUNT: '/mails/verify-account',

    // --- Users ---
    MY_PROFILE: '/users/profile',
    USERS_MAIN: '/users',

    // --- Friendship ---
    FRIENDSHIP: '/friendship',
    FRIEND_LIST: '/friendship/list',

    // --- Chat ---
    CHAT_ROOM_PRIVATE: '/chat-room/private',

    // --- Message ---
    MESSAGE_HISTORY: '/message/history',
} as const;
