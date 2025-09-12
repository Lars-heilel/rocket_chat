import type { RegisterFormData, RegisterResponse } from '@/entities/user';
import type { UseFormReturn } from 'react-hook-form';

export interface RegisterFormProps {
    form: UseFormReturn<RegisterFormData>;
    onSubmit: (values: RegisterFormData) => void;
    isLoading: boolean;
    isSuccess: boolean;
    isError: boolean;
    data: RegisterResponse | undefined;
    errorMessage: string;
}
