import { useGetMyProfileQuery } from '@/entities/user';
import { useViewChatRoomList } from '@/features/chat/view-chat-room-list/model/useVievChatRoomList';
import ChatRoomlist from '@/features/chat/view-chat-room-list/ui/ChatRoomList';
import { useFriendList } from '@/features/friends/friendlist';
import { useGetIncomingRequestList } from '@/features/friends/incoming-requests';
import { Tabs, TabsList, TabsTrigger } from '@/shared/shadcn-ui/ui/tabs';
import { TabsContent } from '@radix-ui/react-tabs';
import { MessageSquare, UserPlus, Users } from 'lucide-react';
import React from 'react';

export function TabsManagementWidget() {
    const { friends, isError: friendsError, isLoading: friendsLoading } = useFriendList();
    const { requestsData, isError: requestsError, isLoading: requestsLoading } = useGetIncomingRequestList();
    const { rooms, isError: roomsError, isLoading: roomsLoading } = useViewChatRoomList();
    const { data: currentUser } = useGetMyProfileQuery();
    const LazyFriendlist = React.lazy(() =>
        import('@/features/friends/friendlist/ui/Friendlist').then((module) => ({
            default: module.default,
        })),
    );
    const LazyIncomingRequestList = React.lazy(() =>
        import('@/features/friends/incoming-requests/ui/IncomingRequestList').then((module) => ({
            default: module.default,
        })),
    );
    const renderChatRoomList = () => {
        return (
            <TabsContent value="chats">
                <ChatRoomlist currentUser={currentUser!} isError={roomsError} isLoading={roomsLoading} chatRooms={rooms} />
            </TabsContent>
        );
    };
    const renderFriendList = () => {
        return (
            <TabsContent value="friend-list">
                <LazyFriendlist isError={friendsError} friendData={friends} isLoading={friendsLoading} />
            </TabsContent>
        );
    };
    const renderIncomingRequestList = () => {
        return (
            <TabsContent value="requests">
                <LazyIncomingRequestList
                    isError={requestsError}
                    requestData={requestsData}
                    isLoading={requestsLoading}
                ></LazyIncomingRequestList>
            </TabsContent>
        );
    };
    return (
        <Tabs className="w-full p-2" defaultValue="chats">
            <TabsList className="w-full">
                <TabsTrigger value="chats">
                    <MessageSquare className="mr-2 h-4 w-4" />
                    Chats ({friends.length || 0})
                </TabsTrigger>
                <TabsTrigger value="friends-management">
                    <Users className="mr-2 h-4 w-4" />
                    Friends
                </TabsTrigger>
            </TabsList>
            {renderChatRoomList()}
            <TabsContent value="friends-management">
                <Tabs defaultValue="friend-list">
                    <TabsList>
                        <TabsTrigger value="friend-list">
                            <Users className=" h-4 w-4" />
                            Friendlist ({friends.length || 0})
                        </TabsTrigger>
                        <TabsTrigger value="requests">
                            <UserPlus className=" h-4 w-4" />
                            Request ({requestsData?.length || 0})
                        </TabsTrigger>
                    </TabsList>
                    {renderFriendList()}
                    {renderIncomingRequestList()}
                </Tabs>
            </TabsContent>
        </Tabs>
    );
}
