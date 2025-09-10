import { useCallback } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import { setCredentials } from '@/entities/session/model/slice';
import { useAppDispatch } from '@/shared/lib/redux/use-redux-hooks';
import { rtkErrorParser } from '@/shared/lib/redux/rtkErrorParser';
import { useLoginMutation } from '@/entities/user';
import { LoginSchema, type LoginFormData } from './schema';
import { FRONTEND_ROUTES } from '@/shared/config';
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
                        navigate(FRONTEND_ROUTES.MESSENGER);
                    }
                });
        },
        [login, dispatch, navigate],
    );
    return { form, onSubmit, ...mutationProps, errorMessage };
}
