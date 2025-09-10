import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { rtkErrorParser } from '@/shared/lib/redux/rtkErrorParser';
import { RequestResetPasswordSchema, useRequsetResetPasswordMutation, type RequestResetPasswordFormData } from '@/entities/user';

export function useForgotPassword() {
    const form = useForm<RequestResetPasswordFormData>({
        resolver: zodResolver(RequestResetPasswordSchema),
        mode: 'onSubmit',
        defaultValues: { email: '' },
    });
    const [request, { isSuccess, ...mutationProps }] = useRequsetResetPasswordMutation();
    const errorMessage = rtkErrorParser(mutationProps.error);
    async function onSubmit(data: RequestResetPasswordFormData) {
        await request(data).unwrap();
    }
    return {
        form,
        onSubmit,
        isSuccess,
        ...mutationProps,
        errorMessage,
    };
}
