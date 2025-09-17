import { Check, X } from 'lucide-react';
import { UsersContainer } from '@/entities/user';
import { useUpdateFriendshipStatusMutation } from '../../../entities/friendship/model/api';
import type { FriendshipWithUsers } from '../../../entities/friendship/model/schemas/friendship.schema';
import { Card } from '@/shared/shadcn-ui/ui/card';
import { Button } from '@/shared/shadcn-ui/ui/button';

interface FriendRequestCardProps {
    request: FriendshipWithUsers;
}
export function FriendRequestCard({ request }: FriendRequestCardProps) {
    const [updateStatus, { isLoading }] = useUpdateFriendshipStatusMutation();
    const sender = request.requester;
    console.log(`${JSON.stringify(sender)}`);
    const handleAccept = () => {
        updateStatus({ friendshipId: request.id, body: { type: 'ACCEPTED' } });
    };

    const handleReject = () => {
        updateStatus({ friendshipId: request.id, body: { type: 'REJECTED' } });
    };

    return (
        <Card className="flex justify-between items-center gap-5 border-2 border-card-foreground">
            <UsersContainer userData={sender} />
            <div className="flex justify-between gap-6">
                <Button
                    size="sm"
                    className="bg-green-400"
                    variant="default"
                    onClick={handleAccept}
                    disabled={isLoading}
                    aria-label="Accept"
                >
                    Accept <Check className="h-4 w-4 text-white" />
                </Button>
                <Button size="sm" className="bg-red-400" variant="default" onClick={handleReject} disabled={isLoading} aria-label="Reject">
                    Reject
                    <X className="h-4 w-4 text-white" />
                </Button>
            </div>
        </Card>
    );
}
