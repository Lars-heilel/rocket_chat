import { UpdateFriendsStatusButtons, useAcceptOrRejectRequest } from '@/features/friends/accept-or-reject-request';
import { useFriendList } from '@/features/friends/friendlist';
import Friendlist from '@/features/friends/friendlist/ui/Friendlist';
import { useGetIncomingRequestList } from '@/features/friends/incoming-requests';
import IncomingRequestList from '@/features/friends/incoming-requests/ui/IncomingRequestList';
import { Tabs, TabsList, TabsTrigger } from '@/shared/shadcn-ui/ui/tabs';
import { TabsContent } from '@radix-ui/react-tabs';
import { UserPlus, Users } from 'lucide-react';

export function FriendManagementWidget() {
    const { friends, isError: FriendlistError, isLoading: FriendlistLoading, isSuccess: FriendListSuccess } = useFriendList();
    const {
        requestsData,
        isError: requestListError,
        isLoading: requestListLoading,
        isSuccess: requestListSuccess,
    } = useGetIncomingRequestList();
    const { handleAccept, handleReject, isLoading } = useAcceptOrRejectRequest();
    return (
        <Tabs defaultValue="friends" className="flex h-full flex-col">
            <TabsList className="mx-2 grid w-auto grid-cols-2">
                <TabsTrigger value="friends">
                    <Users className="mr-2 h-4 w-4" />
                    Friends ({friends?.length || 0})
                </TabsTrigger>
                <TabsTrigger value="requests">
                    <UserPlus className="h-4 w-4" />
                    Requests ({requestsData?.length || 0})
                </TabsTrigger>
            </TabsList>
            <TabsContent value="friends" className="flex-1 overflow-y-auto">
                <Friendlist
                    isError={FriendlistError}
                    friendshipData={friends}
                    isLoading={FriendlistLoading}
                    isSuccess={FriendListSuccess}
                />
            </TabsContent>
            <TabsContent value="requests" className="flex-1 overflow-y-auto">
                <IncomingRequestList
                    requestData={requestsData}
                    isError={requestListError}
                    isLoading={requestListLoading}
                    isSuccess={requestListSuccess}
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
    );
}
