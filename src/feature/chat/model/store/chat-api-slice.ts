import { apiService } from '@/shared/api/api-service';
import type { GetHistoryDto, Message } from '../schemas';
import { CHAT_PATH_BACKEND } from '../const';

export const chatApiSlice = apiService.injectEndpoints({
    endpoints: (builder) => ({
        chatHistory: builder.query<Message[], GetHistoryDto>({
            query: (dto) => ({ url: CHAT_PATH_BACKEND.HISTORY, params: dto }),
        }),
    }),
});
