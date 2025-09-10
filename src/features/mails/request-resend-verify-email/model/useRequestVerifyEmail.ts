import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { rtkErrorParser } from '@/shared/lib/redux/rtkErrorParser';
import { resendVerifyEmailSchema, useResendVerifyEmailMutation, type ResendVerifyEmailFormData } from '@/entities/user';

export default function useResendVerifyEmail() {
    const form = useForm<ResendVerifyEmailFormData>({
        resolver: zodResolver(resendVerifyEmailSchema),
        mode: 'onSubmit',
        defaultValues: { email: '' },
    });

    const [request, { ...mutationProps }] = useResendVerifyEmailMutation();
    const errorMessage = rtkErrorParser(mutationProps.error);
    async function onSubmit(data: ResendVerifyEmailFormData) {
        await request(data).unwrap();
    }
    return {
        form,
        onSubmit,
        ...mutationProps,
        errorMessage,
    };
}
