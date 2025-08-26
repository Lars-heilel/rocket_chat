import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { registerSchema, type RegisterFormData } from '../schemas';
import { useRegisterMutation } from '../store/auth-api-slice';
import { useCallback } from 'react';
import { rtkErrorParser } from '@/shared/lib/RTK/rtkErrorParser';
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
    const errorMessage = rtkErrorParser(mutationProps.error);
    const onSubmit = useCallback(
        async (data: RegisterFormData) => {
            await request(data).unwrap();
        },
        [request],
    );
    return { form, onSubmit, ...mutationProps, errorMessage };
}
