import { useState, type FormEvent } from 'react';

import { SendHorizonal } from 'lucide-react';

import { socketService } from '@/shared/api/web-socket/socket';
import { useAppSelector } from '@/shared/hooks/use-redux-hooks';

import { Button } from '@components/button';
import { Input } from '@components/input';

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
            <form onSubmit={hundleSubmitMessage} className="relative">
                <Input value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Напишите сообщение..." className="pr-20" />
                <div className="absolute top-1/2 right-2 flex -translate-y-1/2 items-center gap-2">
                    <Button type="submit" size="icon">
                        <SendHorizonal className="h-5 w-5" />
                    </Button>
                </div>
            </form>
        </div>
    );
}
