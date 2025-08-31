import { Button } from '@components/button';
import { Input } from '@components/input';
import { Paperclip, SendHorizonal } from 'lucide-react';

export function ChatInput() {
    return (
        <div className="border-t p-4">
            <form className="relative">
                <Input placeholder="Напишите сообщение..." className="pr-20" />
                <div className="absolute top-1/2 right-2 flex -translate-y-1/2 items-center gap-2">
                    <Button type="button" variant="ghost" size="icon">
                        <Paperclip className="h-5 w-5" />
                    </Button>
                    <Button type="submit" size="icon">
                        <SendHorizonal className="h-5 w-5" />
                    </Button>
                </div>
            </form>
        </div>
    );
}
