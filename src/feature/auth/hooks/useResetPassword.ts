import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { MailParamsTokenSchema, resetPasswordSchema, type ResetPasswordFormData } from '../schemas';
import { useSearchParams } from 'react-router';
import { useResetPasswordMutation } from '@/shared/api/api-service';
import { useState } from 'react';

export function useResetPassword() {
  const [resMessage, setResMessage] = useState('');
  const [searchParams] = useSearchParams();
  const paramsData = searchParams.get('token');
  const form = useForm<ResetPasswordFormData>({
    resolver: zodResolver(resetPasswordSchema),
    mode: 'onChange',
    defaultValues: { password: '', confirmPassword: '' },
  });
  const [request, { isSuccess }] = useResetPasswordMutation();
  async function onSubmit(data: ResetPasswordFormData) {
    const validate = await MailParamsTokenSchema.safeParseAsync(paramsData);
    if (validate.success) {
      const response = await request({
        password: data.password,
        mailParamsToken: validate.data,
      }).unwrap();
      setResMessage(response.message);
    } else {
      console.error('Ошибка валидации токена:', validate.error.message);
    }
  }

  return {
    form,
    onSubmit,
    resMessage,
    isSuccess,
  };
}
