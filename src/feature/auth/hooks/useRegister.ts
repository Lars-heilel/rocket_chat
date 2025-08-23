import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { registerSchema, type RegisterFormData } from '../schemas';
import { useRegisterMutation } from '@/shared/api/api-service';
import { rtkQueryTypeguard } from '@/shared/api/types/rtk-query.typeguard';

export function useRegister() {
    const form = useForm<RegisterFormData>({
        mode: 'onSubmit',
        resolver: zodResolver(registerSchema),
        defaultValues: {
            email: '',
            name: '',
            password: '',
            confirmPassword: '',
        },
    });
    const [request, { ...mutationProps }] = useRegisterMutation();
    const errorMessage = rtkQueryTypeguard(mutationProps.error);
    async function onSubmit(data: RegisterFormData) {
        await request(data).unwrap();
    }
    return { form, onSubmit, ...mutationProps, errorMessage };
}
