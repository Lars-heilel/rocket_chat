import { useGetMyProfileQuery } from '@/entities/user';
import { useViewChatRoomList } from '@/features/chat/view-chat-room-list/model/useVievChatRoomList';
import ChatRoomlist from '@/features/chat/view-chat-room-list/ui/ChatRoomList';
import { UpdateFriendsStatusButtons, useAcceptOrRejectRequest } from '@/features/friends/accept-or-reject-request';
import { useFriendList } from '@/features/friends/friendlist';
import Friendlist from '@/features/friends/friendlist/ui/Friendlist';
import { useGetIncomingRequestList } from '@/features/friends/incoming-requests';
import IncomingRequestList from '@/features/friends/incoming-requests/ui/IncomingRequestList';
import { Tabs, TabsList, TabsTrigger } from '@/shared/shadcn-ui/ui/tabs';
import { TabsContent } from '@radix-ui/react-tabs';
import { MessageSquare, UserPlus, Users } from 'lucide-react';

export function TabsManagementWidget() {
    const { friends, isError: friendsError, isLoading: friendsLoading } = useFriendList();
    const { requestsData, isError: requestsError, isLoading: requestsLoading } = useGetIncomingRequestList();
    const { handleAccept, handleReject, isLoading } = useAcceptOrRejectRequest();
    const { rooms, isError: roomsError, isLoading: roomsLoading } = useViewChatRoomList();
    const { data: currentUser } = useGetMyProfileQuery();
    return (
        <Tabs defaultValue="tabs_manager" className="flex h-full flex-col">
            <TabsList className="flex w-full">
                <TabsTrigger value="chats">
                    <MessageSquare className="mr-2 h-4 w-4" />
                    Chats ({friends.length || 0})
                </TabsTrigger>
                <TabsTrigger value="friends-management">
                    <Users className="mr-2 h-4 w-4" />
                    Friends
                </TabsTrigger>
            </TabsList>
            <TabsContent className="flex-1" value="chats">
                <ChatRoomlist currentUser={currentUser!} isError={roomsError} isLoading={roomsLoading} chatRooms={rooms} />
            </TabsContent>
            <TabsContent className="flex-1" value="friends-management">
                <Tabs defaultValue="friend-list" className="flex h-full  flex-col">
                    <TabsList className="flex w-full">
                        <TabsTrigger value="friend-list">
                            <Users className="mr-2 h-4 w-4" />
                            Friendlist ({friends.length || 0})
                        </TabsTrigger>
                        <TabsTrigger value="requests">
                            <UserPlus className="mr-2 h-4 w-4" />
                            Requests ({requestsData?.length || 0})
                        </TabsTrigger>
                    </TabsList>
                    <TabsContent className=" overflow-y-auto" value="friend-list">
                        <Friendlist isError={friendsError} friendshipData={friends} isLoading={friendsLoading} />
                    </TabsContent>
                    <TabsContent className="flex-1" value="requests">
                        <IncomingRequestList
                            isError={requestsError}
                            requestData={requestsData}
                            isLoading={requestsLoading}
                            updateStatusButtons={requestsData.map((request) => (
                                <UpdateFriendsStatusButtons
                                    handleAccept={handleAccept}
                                    handleReject={handleReject}
                                    friendshipId={request.id}
                                    isLoading={isLoading}
                                    key={request.id}
                                />
                            ))}
                        />
                    </TabsContent>
                </Tabs>
            </TabsContent>
        </Tabs>
    );
}
