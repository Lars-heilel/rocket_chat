import { LoginForm, useLogin } from '@/features/auth/auth-login';
export function Component() {
    const loginLogic = useLogin();
    return <LoginForm {...loginLogic} />;
}
