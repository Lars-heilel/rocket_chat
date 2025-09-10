import { useSearchParams } from 'react-router';
import { useEffect, useState } from 'react';
import { useVerifyAccountMutation } from '@/entities/user';
import { rtkErrorParser, useAppDispatch } from '@/shared/lib';
import { setCredentials } from '@/entities/session';

export function useVerifyAccount() {
    const [searchParams] = useSearchParams();
    const [tokenError, setTokenError] = useState<boolean>(false);
    const [tokenErrorMessage, setTokenErrorMessage] = useState<string>('');
    const token = searchParams.get('token');

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

    const [request, { ...mutationProps }] = useVerifyAccountMutation();
    const errorMessage = rtkErrorParser(mutationProps.error);
    const dispatch = useAppDispatch();

    async function handleVerify() {
        if (!token) {
            return;
        } else {
            const response = await request({ token: token }).unwrap();
            dispatch(setCredentials(response));
        }
    }

    return {
        ...mutationProps,
        errorMessage,
        tokenError,
        tokenErrorMessage,
        handleVerify,
    };
}
