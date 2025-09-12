import type { RequestResetPasswordFormData } from '@/entities/user';
import type { UseFormReturn } from 'react-hook-form';

export interface RequestResetPasswordFormProps {
    form: UseFormReturn<RequestResetPasswordFormData>;
    onSubmit: (values: RequestResetPasswordFormData) => void;
    isLoading: boolean;
    isSuccess: boolean;
    isError: boolean;
    data: undefined;
    errorMessage: string;
}
