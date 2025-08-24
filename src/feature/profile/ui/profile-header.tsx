import type { Users } from '@/shared/schemas/userSchema';
import { Avatar, AvatarFallback, AvatarImage } from '@components/avatar';
import { User } from 'lucide-react';
interface ProfileHeaderI {
    userData: Users;
}
export function ProfileHeader({ userData }: ProfileHeaderI) {
    return (
        <div className="flex items-center">
            <Avatar className="mr-2 h-8 w-8">
                <AvatarImage
                    src="https://github.com/your-username.png"
                    alt={userData?.name.slice(0, 1)}
                />
                <AvatarFallback>
                    <User className="h-4 w-4" />
                </AvatarFallback>
            </Avatar>
            <div className="flex flex-col items-start">
                <span className="font-medium">{userData?.name}</span>
                <span className="text-muted-foreground text-sm ">{userData?.email}</span>
            </div>
        </div>
    );
}
