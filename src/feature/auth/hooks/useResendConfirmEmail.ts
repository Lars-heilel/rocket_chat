import { zodResolver } from '@hookform/resolvers/zod';
import { forgotPasswordSchema, type ResendConfirmationFormData } from '../schemas';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { useResendConfirmEmailMutation } from '@/shared/api/api-service';

export default function useResendConfirmEmail() {
  const form = useForm<ResendConfirmationFormData>({
    resolver: zodResolver(forgotPasswordSchema),
    mode: 'onChange',
    defaultValues: { email: '' },
  });
  const [resMessage, setResMessage] = useState('');
  const [request, { isSuccess, isLoading, error }] = useResendConfirmEmailMutation();
  async function onSubmit(data: ResendConfirmationFormData) {
    const response = await request(data).unwrap();
    setResMessage(response.message);
  }
  return {
    form,
    onSubmit,
    resMessage,
    isLoading,
    isSuccess,
    error,
  };
}
