export const SOCKET_EVENTS = {
    //socketEvents
    CONNECT: 'connect',
    DISCONNECT: 'disconnect',
    CONNECTION_SUCCESS: 'connection_success',
    CONNECTION_ERROR: 'connection_error',
    //chatEvents
    NEW_MESSAGE: 'new_message',
    NEW_MESSAGE_SENT: 'new_message_sent',
    SEND_MESSAGE: 'send_message',
    // friendshipEvents
    FRIENDSHIP_REQUEST_RECEIVED: 'friendship_request_received',
    FRIENDSHIP_REQUEST_ACCEPTED: 'friendship_request_accepted',
    FRIENDSHIP_REQUEST_REJECTED: 'friendship_request_rejected',
    FRIENDSHIP_DELETED: 'friendship_deleted',
    //ROOM_EVENT
    JOIN_ROOM: 'join_room',
} as const;
