import { sendMessageFormFields } from '../config/config';
import { BaseForm } from '@/shared/ui';
import type { SendMessageDto } from '../model/send-message.schema';
import type { UseFormReturn } from 'react-hook-form';
import { SendHorizonal } from 'lucide-react';
export interface SendMessageFormProps {
    form: UseFormReturn<SendMessageDto>;
    onSubmit: (data: SendMessageDto) => void;
    isLoading: boolean;
}
export function SendMessageForm({ form, onSubmit, isLoading }: SendMessageFormProps) {
    return (
        <div className="border-t p-4">
            <BaseForm
                form={form}
                onSubmit={onSubmit}
                fields={sendMessageFormFields}
                isLoading={isLoading}
                variant="textarea"
                btnSize="icon"
                btnVariant="default"
                btnChildren={<SendHorizonal />}
            />
        </div>
    );
}
