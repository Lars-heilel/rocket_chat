import { useDeleteFriendMutation } from '@/entities/friendship';
import { Logger } from '@/shared/lib';
export function useDeleteFriends() {
    const logger = new Logger('useDeleteFriends');
    const [deleteFriend, { isLoading }] = useDeleteFriendMutation();
    const handleDelete = async (friendshipId: string) => {
        try {
            const response = await deleteFriend({ friendshipId }).unwrap();
            logger.log(`Success!${response}`);
        } catch (error) {
            logger.error(`Error:${JSON.stringify(error)}`);
        }
    };
    return { handleDelete, isLoading };
}
