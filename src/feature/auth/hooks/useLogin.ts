import { useLoginMutation } from '@/shared/api/api-service';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { setCredentials } from '../store/authSlices';
import { FRONTEND_PROTECTED_PATH } from '@/app/router/all-path';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { JwtTokenSchema, LoginSchema, type LoginFormData } from '../schemas';

export function useLogin() {
  const form = useForm<LoginFormData>({
    resolver: zodResolver(LoginSchema),
    mode: 'onChange',
    defaultValues: {
      email: '',
      password: '',
    },
  });
  const [requset, { isError, isLoading, isSuccess }] = useLoginMutation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  async function onSubmit(data: LoginFormData) {
    try {
      const response = await requset(data).unwrap();
      const parseResult = await JwtTokenSchema.safeParseAsync(response);
      if (!parseResult.success) {
        throw new Error(`${parseResult.error}`);
      } else {
        dispatch(setCredentials(parseResult.data));
        navigate(`${FRONTEND_PROTECTED_PATH.MESSENGER}`);
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        throw new Error(error.message);
      }
    }
  }
  return { form, isError, isLoading, isSuccess, onSubmit };
}
