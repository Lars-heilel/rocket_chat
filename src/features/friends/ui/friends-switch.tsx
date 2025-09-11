import { Frown, UserPlus, Users } from 'lucide-react';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/shared/shadcn-ui/ui/tabs';

import { FriendCard } from './FriendCard';
import { FriendRequestCard } from './FriendshpRequestCard';
import { useGetFriendListQuery, useGetIncomingRequestsQuery } from '../model/store/friendship-api-slice';
import { Spinner } from '@/shared/ui';

export function FirendsSwitch() {
    const { data: friends, isLoading: isLoadingFriends, isError: isFriendsError } = useGetFriendListQuery();
    const { data: requests, isLoading: isLoadingRequests, isError: isRequestsError } = useGetIncomingRequestsQuery();
    const renderFriendListContent = () => {
        if (isLoadingFriends) {
            return <Spinner />;
        }
        if (isFriendsError) {
            return (
                <div className="flex h-full flex-col items-center justify-center gap-2 p-4 text-center text-destructive">
                    <Frown />
                    <span>sorry, there was an error loading your friends list</span>
                </div>
            );
        }
        if (!isFriendsError && !isLoadingFriends) {
            return (
                <>
                    {friends && friends.length > 0 ? (
                        <div className="flex flex-col gap-1 p-2">
                            {friends.map((friendship) => (
                                <FriendCard key={friendship.id} friendship={friendship} />
                            ))}
                        </div>
                    ) : (
                        <div className="flex h-full flex-col items-center justify-center gap-2 p-4 text-center text-muted-foreground">
                            <Frown />
                            <span>Your friends list is empty, try to find someone!</span>
                        </div>
                    )}
                </>
            );
        }
    };
    const renderRequestListContent = () => {
        if (isLoadingRequests) {
            return <Spinner />;
        }
        if (isRequestsError) {
            return (
                <div className="flex h-full flex-col items-center justify-center gap-2 p-4 text-center text-destructive">
                    <Frown />
                    <span>sorry, there was an error loading your requests list</span>
                </div>
            );
        }
        if (!isRequestsError && !isLoadingRequests) {
            return (
                <>
                    {requests && requests.length > 0 ? (
                        <div className="flex flex-col gap-1 p-2">
                            {requests.map((request) => (
                                <FriendRequestCard key={request.id} request={request} />
                            ))}
                        </div>
                    ) : (
                        <div className="flex h-full flex-col items-center justify-center gap-2 p-4 text-center text-muted-foreground">
                            <Frown />
                            <span>No requests received from other users</span>
                        </div>
                    )}
                </>
            );
        }
    };
    return (
        <Tabs defaultValue="friends" className="flex h-full flex-col">
            <TabsList className="mx-2 grid w-auto grid-cols-2">
                <TabsTrigger value="friends">
                    <Users className="mr-2 h-4 w-4" />
                    Friends ({friends?.length || 0})
                </TabsTrigger>
                <TabsTrigger value="requests">
                    <UserPlus className="h-4 w-4" />
                    Requests ({requests?.length || 0})
                </TabsTrigger>
            </TabsList>
            <TabsContent value="friends" className="flex-1 overflow-y-auto">
                {renderFriendListContent()}
            </TabsContent>
            <TabsContent value="requests" className="flex-1 overflow-y-auto">
                {renderRequestListContent()}
            </TabsContent>
        </Tabs>
    );
}
