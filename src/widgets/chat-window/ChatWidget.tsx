import { useGetMyProfileQuery } from '@/entities/user';
import { useAppSelector } from '@/shared/lib/redux/use-redux-hooks';
import { SendMessageForm, useSendMessage } from '@/features/chat/send-message';
import { ChatHeader } from './ui/chat-header';
import { ChatHistory, useChatHistory } from '@/features/chat/view-chat-history';
import { Button } from '@/shared/shadcn-ui';
import { MoveDownIcon } from 'lucide-react';
export function ChatWidget() {
    const { selectedChatId, friendData } = useAppSelector((state) => state.chatRoom);
    const { ...currentUser } = useGetMyProfileQuery();
    const { form, handleSubmitMessage, isSubmitting } = useSendMessage();
    const { ...history } = useChatHistory(selectedChatId);
    if (!selectedChatId || !friendData) {
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
        <div className="flex relative h-screen w-full justify-between flex-col">
            <ChatHeader userData={friendData} />
            <ChatHistory
                newMessageAnchorRef={history.newMessageAnchorRef}
                scrollContainerRef={history.scrollContainerRef}
                messages={history.sortedMessage}
                isLoading={history.isLoading}
                isError={history.isError}
                currentUser={currentUser.data!}
                friend={friendData}
                paginationTriggerRef={history.paginationAnchorRef}
            />
            <Button variant="default" size="icon" className="rounded-full absolute right-1.5 bottom-1/4 w-10 h-10 mr-10 ">
                <MoveDownIcon></MoveDownIcon>
            </Button>

            <SendMessageForm form={form} onSubmit={handleSubmitMessage} isLoading={isSubmitting} />
        </div>
    );
}
