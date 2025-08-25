import { zodResolver } from '@hookform/resolvers/zod';
import { forgotPasswordSchema, type ForgotPasswordFormData } from '../schemas';
import { useForm } from 'react-hook-form';
import { rtkQueryTypeguard } from '@/shared/api/types/rtk-query.typeguard';
import { useForgotPasswordMutation } from '../store/mails-api-slice';

export function useForgotPassword() {
    const form = useForm<ForgotPasswordFormData>({
        resolver: zodResolver(forgotPasswordSchema),
        mode: 'onSubmit',
        defaultValues: { email: '' },
    });
    const [request, { isSuccess, ...mutationProps }] = useForgotPasswordMutation();
    const errorMessage = rtkQueryTypeguard(mutationProps.error);
    async function onSubmit(data: ForgotPasswordFormData) {
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
