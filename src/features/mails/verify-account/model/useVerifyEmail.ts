import { useSearchParams } from 'react-router';
import { useEffect, useState } from 'react';
import { useVerifyAccountMutation } from '@/entities/user';
import { rtkErrorParser, useAppDispatch } from '@/shared/lib';
import { setCredentials } from '@/entities/session';

export function useVerifyAccount() {
    const [searchParams] = useSearchParams();
    const [paramsError, setParamsError] = useState<boolean>(false);
    const [paramsErrorMessage, setParamsErrorMessage] = useState<string>('');
    const token = searchParams.get('token');

    useEffect(() => {
        const validate = async () => {
            if (!token) {
                setParamsErrorMessage('invalid url, request not possible');
                setParamsError(true);
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
        paramsError,
        paramsErrorMessage,
        handleVerify,
    };
}
