import { useSearchParams } from 'react-router';
import { useVerifyAccountMutation } from '@/shared/api/api-service';
import { rtkQueryTypeguard } from '@/shared/api/types/rtk-query.typeguard';
import { useEffect, useState } from 'react';
import { useAppDispatch } from '@/shared/hooks/use-redux-hooks';
import { setCredentials } from '@/entities/session/store/sessionSlice';

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
    const errorMessage = rtkQueryTypeguard(mutationProps.error);
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
