import type { FormFieldConfig } from '@/shared/ui';
import type { SendMessageDto } from '../model/send-message.schema';

export const sendMessageFormFields: FormFieldConfig<SendMessageDto>[] = [
    {
        name: 'content',
        placeholder: 'write a new message',
    },
];
