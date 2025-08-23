import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { resetPasswordSchema, type ResetPasswordFormData } from '../schemas';
import { useSearchParams } from 'react-router';
import { useResetPasswordMutation } from '@/shared/api/api-service';
import { rtkQueryTypeguard } from '@/shared/api/types/rtk-query.typeguard';
import { useEffect, useState } from 'react';

export function useResetPassword() {
    const form = useForm<ResetPasswordFormData>({
        resolver: zodResolver(resetPasswordSchema),
        mode: 'onSubmit',
        defaultValues: { password: '', confirmPassword: '' },
    });
    const [request, { ...mutationProps }] = useResetPasswordMutation();
    const errorMessage = rtkQueryTypeguard(mutationProps.error);
    const [searchToken] = useSearchParams();
    const [tokenError, setTokenError] = useState<boolean>(false);
    const [tokenErrorMessage, setTokenErrorMessage] = useState<string>('');
    const token = searchToken.get('token');
    useEffect(() => {
        const validate = async () => {
            if (!token) {
                setTokenErrorMessage('token not found, request not possible');
                setTokenError(true);
                return;
            }
        };
        validate();
    }, [token]);
    async function onSubmit(data: ResetPasswordFormData) {
        if (!token) {
            return;
        }
        await request({ password: data.password, mailParamsToken: token }).unwrap();
    }

    return {
        form,
        onSubmit,
        ...mutationProps,
        errorMessage,
        tokenError,
        tokenErrorMessage,
    };
}
