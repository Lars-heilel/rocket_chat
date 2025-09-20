import { useSendFriendRequestMutation } from '@/entities/friendship';
import { Logger } from '@/shared/lib';
interface UseAddFriendI {
    userId: string;
}
export function useAddFriend({ userId }: UseAddFriendI) {
    const logger = new Logger('useAddFriend');
    const [addFriend, { isLoading }] = useSendFriendRequestMutation();
    const handleAddFriend = async () => {
        try {
            const response = await addFriend({ userId }).unwrap();
            logger.log(`Success :${JSON.stringify(response)}`);
        } catch (error) {
            logger.error(`Success :${JSON.stringify(error)}`);
        }
    };
    return { addFriend, isLoading, handleAddFriend };
}
