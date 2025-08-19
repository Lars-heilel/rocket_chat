import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { registerSchema, type RegisterFormData } from '../schemas';
import { useRegisterMutation } from '@/shared/api/api-service';
import { useState } from 'react';

export function useRegister() {
  const [resMessage, setResMessage] = useState('');
  const form = useForm<RegisterFormData>({
    mode: 'onChange',
    resolver: zodResolver(registerSchema),
    defaultValues: {
      email: '',
      name: '',
      password: '',
      confirmPassword: '',
    },
  });
  const [request, { isLoading, isSuccess, error }] = useRegisterMutation();
  async function onSubmit(data: RegisterFormData) {
    const response = await request(data).unwrap();
    setResMessage(response.message);
  }
  return { form, onSubmit, isLoading, isSuccess, error, resMessage };
}
