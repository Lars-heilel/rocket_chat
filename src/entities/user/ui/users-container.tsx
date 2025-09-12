import { User } from 'lucide-react';
import type { Users } from '@/entities/user/model/schemas/userSchema';
import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar';

interface UsersContainerProps {
    userData: Users;
}
export function UsersContainer({ userData }: UsersContainerProps) {
    return (
        <div className="flex items-center flex-1 gap-3">
            <Avatar>
                <AvatarImage alt={userData?.name.slice(0, 1)} />
                <AvatarFallback>
                    <User />
                </AvatarFallback>
            </Avatar>
            <div>
                <span className="font-bold text-lg">{userData.name}</span>
            </div>
        </div>
    );
}
