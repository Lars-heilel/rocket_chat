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
    const [request, { error, data, isError, isSuccess, isLoading }] = useRegisterMutation();
    const errorMessage = rtkErrorParser(error);
    const onSubmit = useCallback(
        async (data: RegisterFormData) => {
            await request(data).unwrap();
        },
        [request],
    );
    return { form, onSubmit, data, errorMessage, isError, isLoading, isSuccess };
}
