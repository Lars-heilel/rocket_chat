import * as React from "react";
import { User, Users, UserPlus } from "lucide-react";
import { SearchForm } from "@/feature/messenger/ui/elements/search-form";
import { Sidebar, SidebarContent, SidebarHeader } from "@components/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@components/avatar";
import { Button } from "@components/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@components/tabs";
import { ScrollArea } from "@components/scroll-area";
import { Link } from "react-router";

// Моковые данные для примера
const friends = [
  { id: 1, name: "Иван Иванов", avatar: "https://github.com/ivan.png" },
  { id: 2, name: "Мария Кузнецова", avatar: "https://github.com/maria.png" },
  // ... другие друзья
];

const friendRequests = [
  { id: 3, name: "Петр Петров", avatar: "https://github.com/petr.png" },
];

function UserProfileButton() {
  return (
    <Link to="/profile">
      <Button variant="ghost" className="h-auto w-full justify-start p-2">
        <Avatar className="mr-2 h-8 w-8">
          <AvatarImage
            src="https://github.com/your-username.png"
            alt="@your-username"
          />
          <AvatarFallback>
            <User className="h-4 w-4" />
          </AvatarFallback>
        </Avatar>
        <div className="flex flex-col items-start">
          <span className="font-medium">Ваше Имя</span>
          <span className="text-muted-foreground text-sm">@username</span>
        </div>
      </Button>
    </Link>
  );
}

function ContactList({ contacts }: { contacts: typeof friends }) {
  return (
    <ScrollArea className="flex-1">
      <div className="flex flex-col gap-1 p-2">
        {contacts.map((contact) => (
          <Button
            key={contact.id}
            variant="ghost"
            className="h-auto w-full justify-start p-2"
          >
            <Avatar className="mr-2 h-8 w-8">
              <AvatarImage src={contact.avatar} alt={contact.name} />
              <AvatarFallback>{contact.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <span>{contact.name}</span>
          </Button>
        ))}
      </div>
    </ScrollArea>
  );
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props}>
      <SidebarHeader className="p-2">
        <UserProfileButton />
        <SearchForm />
      </SidebarHeader>
      <SidebarContent className="p-0">
        <Tabs defaultValue="friends" className="flex h-full flex-col">
          <TabsList className="mx-2 grid w-auto grid-cols-2">
            <TabsTrigger value="friends">
              <Users className="mr-2 h-4 w-4" />
              Друзья
            </TabsTrigger>
            <TabsTrigger value="requests">
              <UserPlus className="mr-2 h-4 w-4" />
              Запросы
            </TabsTrigger>
          </TabsList>
          <TabsContent value="friends" className="flex-1 overflow-y-auto">
            <ContactList contacts={friends} />
          </TabsContent>
          <TabsContent value="requests" className="flex-1 overflow-y-auto">
            <ContactList contacts={friendRequests} />
          </TabsContent>
        </Tabs>
      </SidebarContent>
    </Sidebar>
  );
}
