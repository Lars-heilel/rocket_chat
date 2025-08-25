import { useLoginMutation } from '@/shared/api/api-service';
import { useNavigate } from 'react-router';
import { setCredentials } from '@/entities/session/store/sessionSlice';
import { FRONTEND_PROTECTED_PATH } from '@/app/router/all-path';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { LoginSchema, type LoginFormData } from '../schemas';
import { rtkQueryTypeguard } from '@/shared/api/types/rtk-query.typeguard';
import { useAppDispatch } from '@/shared/hooks/use-redux-hooks';

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
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const errorMessage = rtkQueryTypeguard(mutationProps.error);
    async function onSubmit(data: LoginFormData) {
        const response = await login(data).unwrap();
        if (response.token) {
            dispatch(setCredentials(response));
            navigate(FRONTEND_PROTECTED_PATH.MESSENGER);
        }
    }
    return { form, onSubmit, ...mutationProps, errorMessage };
}
