import { useEffect, useState } from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useSearchParams } from 'react-router';

import { rtkErrorParser } from '@/shared/lib/RTK/rtkErrorParser';

import { resetPasswordSchema, type ResetPasswordFormData } from '../schemas';
import { useResetPasswordMutation } from '../store/mails-api-slice';


export function useResetPassword() {
    const form = useForm<ResetPasswordFormData>({
        resolver: zodResolver(resetPasswordSchema),
        mode: 'onSubmit',
        defaultValues: { password: '', confirmPassword: '' },
    });
    const [request, { ...mutationProps }] = useResetPasswordMutation();
    const errorMessage = rtkErrorParser(mutationProps.error);
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
