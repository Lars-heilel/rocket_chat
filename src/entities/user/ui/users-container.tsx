import { User } from 'lucide-react';
import type { Users } from '@/entities/user/model/schemas/userSchema';
import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar';

interface UsersContainerProps extends React.ComponentProps<'div'> {
    userData: Users;
    nameHidden?: boolean;
}
export function UsersContainer({ userData, nameHidden = false, ...props }: UsersContainerProps) {
    return (
        <div {...props} className="flex  flex-col  gap-3">
            <div className="flex justify-start items-center gap-6">
                <Avatar className="border-2 border-amber-50 rounded-full p-2">
                    <AvatarImage alt={userData?.name.slice(0, 1)} />
                    <AvatarFallback>
                        <User />
                    </AvatarFallback>
                </Avatar>
                {nameHidden ? null : <span className="font-bold text-lg">{userData.name.slice(0, 15)}</span>}
            </div>
        </div>
    );
}
