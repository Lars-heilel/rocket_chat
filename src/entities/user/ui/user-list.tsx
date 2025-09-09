import { UserPlus } from 'lucide-react';

import { useSendFriendRequestMutation } from '@/feature/friends/model/store/friendship-api-slice';
import { Button } from '@/shared/components/ui/button';

import { UsersContainer } from './users-container';

import type { Users } from '../model';

interface UsersListProps {
    users: Users[];
}

export function UserList({ users }: UsersListProps) {
    const [send] = useSendFriendRequestMutation();
    return (
        <>
            {users.map((user) => (
                <div key={user.id} className="flex gap-1 flex-col border-card-foreground rounded-2xl p-2 border-2">
                    <UsersContainer userData={user} />
                    <Button onClick={() => send({ userId: user.id })} variant="default" size="default">
                        <UserPlus className="mr-2 h-4 w-4" />
                        Add as friend
                    </Button>
                </div>
            ))}
        </>
    );
}
