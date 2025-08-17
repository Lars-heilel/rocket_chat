const FRONTEND_PATHS = {
  LOGIN: "/login",
  REGISTER: "/register",
  FORGOT_PASSWORD: "/forgot-password",
  RESET_PASSWORD: "/reset-password",
  CONFIRM_EMAIL: "/confirm-email",
  RESEND_CONFIRMATION: "/resend-confirmation",
};
const FRONTEND_PROTECTED_PATH = {
  MESSENGER: "/messenger",
};

// backend paths
const AUTH_PATH = {
  LOGIN: "/auth/login",
  REGISTER: "/auth/register",
  LOGOUT: "/auth/logout",
  REFRESH: "/auth/refresh",
};
export const MAILS_PATH = {
  FORGOT_PASSWORD: "/mails/forgot-password",
  RESET_PASSWORD: "/mails/reset-password",
  RESEND_CONFIRMATION: "/mails/resend-confirmation",
  VERIFY_ACCOUNT: "/mails/verify-account",
};
const USER_PATH = {
  USER: "/users",
};
const FRIENDSHIP_PATH = {
  FRIENDSHIP: "/friendship",
  FRIENDLIST: "/friendship/list",
};
const CHAT_PATH = {
  CHAT: "/chat/history",
};
export {
  FRIENDSHIP_PATH,
  FRONTEND_PROTECTED_PATH,
  FRONTEND_PATHS,
  CHAT_PATH,
  USER_PATH,
  AUTH_PATH,
};
