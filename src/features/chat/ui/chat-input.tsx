import { useState, type FormEvent } from 'react';
import { SendHorizonal } from 'lucide-react';
import { useAppSelector } from '@/shared/lib/redux/use-redux-hooks';
import { socketService } from '@/shared/api';
import { Input } from '@/shared/shadcn-ui/ui/input';
import { Button } from '@/shared/shadcn-ui/ui/button';

export function ChatInput() {
    const [message, setMessage] = useState<string>('');
    const friend = useAppSelector((state) => state.chatRoom.friendData);
    const hundleSubmitMessage = (e: FormEvent) => {
        e.preventDefault();
        if (!friend) {
            return;
        }
        socketService.sendMessage({ receiverId: friend?.id, content: message });
        setMessage('');
    };

    return (
        <div className="border-t p-4">
            <form onSubmit={hundleSubmitMessage} className="relative flex justify-center items-center gap-2">
                <Input value={message} onChange={(e) => setMessage(e.target.value)} placeholder="write a message..." className="pr-20" />
                <div>
                    <Button type="submit" size="sm">
                        <SendHorizonal />
                    </Button>
                </div>
            </form>
        </div>
    );
}
