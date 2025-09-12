import type { UseFormReturn } from 'react-hook-form';
import type { LoginFormData } from '@/entities/user';

export interface LoginFormProps {
    form: UseFormReturn<LoginFormData>;
    onSubmit: (values: LoginFormData) => void;
    isLoading: boolean;
    isError: boolean;
    errorMessage?: string;
}
