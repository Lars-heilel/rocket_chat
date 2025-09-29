import { useSendFriendRequestMutation } from '@/entities/friendship';
import { Logger } from '@/shared/lib';
import { toast } from 'sonner';
interface UseAddFriendI {
    userId: string;
}
export function useAddFriend() {
    const logger = new Logger('useAddFriend');
    const [addFriend, { isLoading }] = useSendFriendRequestMutation();
    const handleAddFriend = async ({ userId }: UseAddFriendI) => {
        try {
            const response = await addFriend({ userId }).unwrap();
            if (response) {
                toast.info(
                    `Friend request sent successfully:D The feature is still in development so just close the search window and wait for a response`,
                );
            }
            logger.log(`Success :${JSON.stringify(response)}`);
        } catch (error) {
            toast.info(
                `Friend request sent successfully:D The feature is still in development so just close the search window and wait for a response`,
            );
            logger.error(`Success :${JSON.stringify(error)}`);
        }
    };
    return { addFriend, isLoading, handleAddFriend };
}
