import { ScrollArea } from '@/shared/components/ui/scroll-area';
import type { Users } from '../model';
import { UsersContainer } from './users-container';
import { Button } from '@/shared/components/ui/button';
import { UserPlus } from 'lucide-react';
import * as React from 'react';

interface UsersListProps {
    users: Users[];
}

export function UserList({ users }: UsersListProps) {
    return (
        <ScrollArea className="w-full">
            <div className="border-1 border-card-foreground rounded-2xl p-1">
                {users.map((user) => (
                    <React.Fragment key={user.id}>
                        <div className="flex flex-col gap-1 p-2 rounded-2xl">
                            <UsersContainer userData={user} />
                            <Button variant="default" size="sm">
                                <UserPlus className="mr-2 h-4 w-4" />
                                Add as friend
                            </Button>
                        </div>
                    </React.Fragment>
                ))}
            </div>
        </ScrollArea>
    );
}
