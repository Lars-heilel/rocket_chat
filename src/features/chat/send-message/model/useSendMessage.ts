import { useAppSelector } from '@/shared/lib/redux/use-redux-hooks';
import { socketService } from '@/shared/api';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { sendMessageSchema, type SendMessageDto } from './send-message.schema';
import { useCallback, useMemo } from 'react';
import { Logger } from '@/shared/lib';

export function useSendMessage() {
    const logger = useMemo(() => new Logger('useSendMessage'), []);
    const form = useForm<SendMessageDto>({
        resolver: zodResolver(sendMessageSchema),
        mode: 'onSubmit',
        defaultValues: {
            content: '',
        },
    });

    const friend = useAppSelector((state) => state.chatRoom.friendData);
    const handleSubmitMessage = useCallback(
        async (newMessage: SendMessageDto) => {
            if (!friend?.id) {
                logger.error('Friend data is missing.');
                return;
            }
            try {
                socketService.sendMessage({ receiverId: friend.id, content: newMessage.content });
                logger.debug(`Message send`);
                form.reset();
            } catch (error) {
                logger.error('Failed to send message:', error);
            }
        },
        [friend, form, logger],
    );
    const { isSubmitting } = form.formState;
    return {
        form,
        handleSubmitMessage,
        isSubmitting,
    };
}
