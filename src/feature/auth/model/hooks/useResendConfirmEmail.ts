import { zodResolver } from '@hookform/resolvers/zod';
import { forgotPasswordSchema, type ResendConfirmationFormData } from '../schemas';
import { useForm } from 'react-hook-form';
import { useResendConfirmEmailMutation } from '../store/mails-api-slice';
import { rtkErrorParser } from '@/shared/lib/RTK/rtkErrorParser';

export default function useResendConfirmEmail() {
    const form = useForm<ResendConfirmationFormData>({
        resolver: zodResolver(forgotPasswordSchema),
        mode: 'onSubmit',
        defaultValues: { email: '' },
    });

    const [request, { ...mutationProps }] = useResendConfirmEmailMutation();
    const errorMessage = rtkErrorParser(mutationProps.error);
    async function onSubmit(data: ResendConfirmationFormData) {
        await request(data).unwrap();
    }
    return {
        form,
        onSubmit,
        ...mutationProps,
        errorMessage,
    };
}
