import { useCallback } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { rtkErrorParser } from '@/shared/lib/redux/rtkErrorParser';
import { registerSchema, useRegisterMutation, type RegisterFormData } from '@/entities/user';
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
