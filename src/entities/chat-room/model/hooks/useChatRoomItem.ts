import type { FriendshipWithUsers } from '@/entities/friendship';
import { useGetMyProfileQuery } from '@/entities/user';
interface UserChatRoomItemProp {
    chatRoomData: FriendshipWithUsers;
}
export function useChatRoomItem({ chatRoomData }: UseChatRoomItemProp) {
    const [data:currentUser] = useGetMyProfileQuery();

}
