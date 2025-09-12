import { RegisterForm } from '@/features/auth/auth-register';
import { useRegister } from '@/features/auth/auth-register/model';

export function Component() {
    const registerLogic = useRegister();
    return <RegisterForm {...registerLogic} />;
}
