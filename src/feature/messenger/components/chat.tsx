import {Avatar, AvatarFallback, AvatarImage} from "@components/avatar";
import {Button} from "@components/button";
import {Input} from "@components/input";
import {Paperclip, SendHorizonal} from "lucide-react";
import {ScrollArea} from "@components/scroll-area";
import {SidebarTrigger} from "@/shared/components/ui/sidebar";

const messages = [
  {
    id: 1,
    sender: "Иван Иванов",
    text: "Привет! Как дела?",
    time: "10:30",
    own: false,
  },
  {
    id: 2,
    sender: "Вы",
    text: "Привет! Все отлично, спасибо!",
    time: "10:31",
    own: true,
  },
];

function ChatHeader({
  contactName,
  contactAvatar,
}: {
  contactName: string;
  contactAvatar: string;
}) {
  return (
    <div className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
      <SidebarTrigger className="md:hidden" />

      <Avatar>
        <AvatarImage src={contactAvatar} alt={contactName} />
        <AvatarFallback>{contactName.charAt(0)}</AvatarFallback>
      </Avatar>
      <h2 className="text-lg font-semibold">{contactName}</h2>
    </div>
  );
}

function ChatMessages() {
  return (
    <ScrollArea className="flex-1">
      <div className="flex flex-col gap-4 p-4">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex items-end gap-2 ${
              msg.own ? "justify-end" : "justify-start"
            }`}
          >
            {!msg.own && (
              <Avatar className="h-8 w-8">
                <AvatarImage src="https://github.com/ivan.png" />
                <AvatarFallback>И</AvatarFallback>
              </Avatar>
            )}
            <div
              className={`max-w-xs rounded-lg p-3 ${
                msg.own ? "bg-primary text-primary-foreground" : "bg-muted"
              }`}
            >
              <p className="text-sm">{msg.text}</p>
              <p className="mt-1 text-right text-xs text-muted-foreground">
                {msg.time}
              </p>
            </div>
          </div>
        ))}
      </div>
    </ScrollArea>
  );
}

function ChatInput() {
  return (
    <div className="border-t p-4">
      <form className="relative">
        <Input placeholder="Напишите сообщение..." className="pr-20" />
        <div className="absolute top-1/2 right-2 flex -translate-y-1/2 items-center gap-2">
          <Button type="button" variant="ghost" size="icon">
            <Paperclip className="h-5 w-5" />
          </Button>
          <Button type="submit" size="icon">
            <SendHorizonal className="h-5 w-5" />
          </Button>
        </div>
      </form>
    </div>
  );
}

export function ChatWindow() {
  const selectedChat = {
    name: "Иван Иванов",
    avatar: "https://github.com/ivan.png",
  };

  if (!selectedChat) {
    return (
      <div className="flex  h-full flex-col items-center justify-center bg-muted/50">
        <p>Выберите чат, чтобы начать общение</p>
      </div>
    );
  }

  return (
    <div className="flex h-screen flex-col">
      <ChatHeader
        contactName={selectedChat.name}
        contactAvatar={selectedChat.avatar}
      />
      <ChatMessages />
      <ChatInput />
    </div>
  );
}
