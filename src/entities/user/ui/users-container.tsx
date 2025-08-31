import type { Users } from '@/entities/user/model/schemas/userSchema';
import { Avatar, AvatarFallback, AvatarImage } from '@components/avatar';
import { User } from 'lucide-react';
interface UsersContainerProps {
    userData: Users;
}
export function UsersContainer({ userData }: UsersContainerProps) {
    return (
        <div className="max-w-full flex items-center">
            <Avatar className="mr-2 h-8 w-8  ">
                <AvatarImage alt={userData?.name.slice(0, 1)} />
                <AvatarFallback>
                    <User className="h-4 w-4" />
                </AvatarFallback>
            </Avatar>
            <div className="flex flex-1 flex-col items-start min-w-0">
                <span className="font-bold dark:text-white text-black truncate w-full">
                    {userData?.name}
                </span>
                <span className="text-muted-foreground text-sm truncate w-full">
                    {userData?.email}
                </span>
            </div>
        </div>
    );
}
