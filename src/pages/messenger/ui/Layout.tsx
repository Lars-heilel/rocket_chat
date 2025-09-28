import * as React from 'react';
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarProvider } from '@/shared/shadcn-ui/ui/sidebar';
import { SearchForm, SearchResultsContainer, useUserSearch } from '@/features/search';
import { useDisclosure } from '@/shared/lib/hooks/use-disclosure';
import { ChatWidget } from '@/widgets/chat-window';
import { TabsManagementWidget } from '@/widgets/tabs-manager';
import { ProfileWidget } from '@/widgets/profile /ProfileWidget';
import { AppInfo } from '@/shared/ui';

export function MessengerLayout({ ...props }: React.ComponentProps<typeof Sidebar>) {
    const { isOpen: isSearchActive, open: activateSearch, close: deactivateSearch } = useDisclosure();
    const { searchQuery, setSearchQuery, queryResult } = useUserSearch();
    const handleCloseAndClearSearch = () => {
        deactivateSearch();
        setSearchQuery('');
    };
    return (
        <SidebarProvider>
            <div className="flex h-screen w-screen overflow-hidden bg-background">
                <Sidebar {...props}>
                    <SidebarHeader>
                        <ProfileWidget />
                    </SidebarHeader>
                    <SidebarContent>
                        <SearchForm value={searchQuery} onChange={setSearchQuery} openSearch={activateSearch} />
                        {isSearchActive ? (
                            <SearchResultsContainer searchQuery={searchQuery} queryResult={queryResult} close={handleCloseAndClearSearch} />
                        ) : (
                            <TabsManagementWidget />
                        )}
                    </SidebarContent>
                    <SidebarFooter className="border-t p-3">
                        <AppInfo />
                    </SidebarFooter>
                </Sidebar>
                <ChatWidget />
            </div>
        </SidebarProvider>
    );
}
