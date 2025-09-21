import { useGetMyProfileQuery } from '@/entities/user';
import { useAppSelector } from '@/shared/lib/redux/use-redux-hooks';
import { SendMessageForm, useSendMessage } from '@/features/chat/send-message';
import { ChatHeader } from './ui/chat-header';
import { ChatHistory, useChatHistory } from '@/features/chat/view-chat-history';

export function ChatWidget() {
    const { selectedChatId, friendData } = useAppSelector((state) => state.chatRoom);
    const { data: currentUser, isLoading: isLoadingUser } = useGetMyProfileQuery();
    const { form, handleSubmitMessage, isSubmitting } = useSendMessage();
    const { messages, isLoading: isLoadingMessages, isError, bottomTriggerRef } = useChatHistory(selectedChatId);
    if (!selectedChatId || !friendData || !currentUser) {
        return (
            <div className="flex h-screen w-full flex-col">
                <ChatHeader />
                <div className="flex-grow flex items-center justify-center">
                    <p className="text-muted-foreground">Select a chat to start messaging</p>
                </div>
            </div>
        );
    }

    return (
        <div className="flex h-screen w-full flex-col">
            <ChatHeader userData={friendData} />
            <ChatHistory
                messages={messages}
                isLoading={isLoadingMessages || isLoadingUser}
                isError={isError}
                currentUser={currentUser}
                friend={friendData}
                bottomTriggerRef={bottomTriggerRef}
            />
            <SendMessageForm form={form} onSubmit={handleSubmitMessage} isLoading={isSubmitting} />
        </div>
    );
}
