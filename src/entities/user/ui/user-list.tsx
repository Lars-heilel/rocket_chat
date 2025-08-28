import { ScrollArea } from '@/shared/components/ui/scroll-area';
import type { Users } from '../model';
import { UsersContainer } from './users-container';
import { Button } from '@/shared/components/ui/button';
interface UsersListProps {
    users: Users[];
}
export function UserList({ users }: UsersListProps) {
    return (
        <ScrollArea>
            <div className=" flex flex-col gap2 p-2">
                {users.map((user) => (
                    <div className=" flex flex-col gap-1">
                        <UsersContainer key={user.id} userData={user}></UsersContainer>
                        <Button variant={'default'}>Add as friend</Button>
                    </div>
                ))}
            </div>
        </ScrollArea>
    );
}
