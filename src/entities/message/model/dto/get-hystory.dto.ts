export type GetHistoryDto = {
    chatRoomId: string;
    limit: number;
    cursor?:
        | {
              id?: string | undefined;
              createAt?: string | undefined;
          }
        | undefined;
};
