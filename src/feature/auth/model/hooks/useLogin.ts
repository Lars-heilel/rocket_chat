import { useNavigate } from 'react-router';
import { setCredentials } from '@/entities/session/model/slice/sessionSlice';
import { FRONTEND_PROTECTED_PATH } from '@/app/router/all-path';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { LoginSchema, type LoginFormData } from '../schemas';
import { useAppDispatch } from '@/shared/hooks/use-redux-hooks';
import { useLoginMutation } from '../store/auth-api-slice';
import { useCallback } from 'react';
import { rtkErrorParser } from '@/shared/lib/RTK/rtkErrorParser';
export function useLogin() {
    const form = useForm<LoginFormData>({
        resolver: zodResolver(LoginSchema),
        mode: 'onSubmit',
        defaultValues: {
            email: '',
            password: '',
        },
    });

    const [login, { ...mutationProps }] = useLoginMutation();
    const errorMessage = rtkErrorParser(mutationProps.error);
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const onSubmit = useCallback(
        async (data: LoginFormData) => {
            await login(data)
                .unwrap()
                .then((res) => {
                    if (res.token) {
                        dispatch(setCredentials(res));
                        navigate(FRONTEND_PROTECTED_PATH.MESSENGER);
                    }
                });
        },
        [login, dispatch, navigate],
    );
    return { form, onSubmit, ...mutationProps, errorMessage };
}
