import { Button } from '@/shared/shadcn-ui/ui/button';
import { Check, X } from 'lucide-react';
interface UpdateFriendsStatusButtonsProps {
    handleAccept(friendshipId: string): void;
    handleReject(friendshipId: string): void;
    isLoading: boolean;
    friendshipId: string;
}
export function UpdateFriendsStatusButtons({ handleAccept, handleReject, isLoading, friendshipId }: UpdateFriendsStatusButtonsProps) {
    return (
        <div className="flex justify-between gap-6">
            <Button
                size="sm"
                className="bg-green-400"
                variant="default"
                onClick={() => handleAccept(friendshipId)}
                disabled={isLoading}
                aria-label="Accept"
            >
                Accept <Check className="h-4 w-4 text-white" />
            </Button>
            <Button
                size="sm"
                className="bg-red-400"
                variant="default"
                onClick={() => handleReject(friendshipId)}
                disabled={isLoading}
                aria-label="Reject"
            >
                Reject
                <X className="h-4 w-4 text-white" />
            </Button>
        </div>
    );
}
