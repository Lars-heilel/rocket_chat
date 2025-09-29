import { useGetIncomingRequestsQuery } from '@/entities/friendship';
import { useMemo } from 'react';
export function useGetIncomingRequestList() {
    const { data, isError, isLoading, isSuccess } = useGetIncomingRequestsQuery();
    const requestsData = useMemo(() => {
        return data || [];
    }, [data]);

    return { requestsData, isError, isSuccess, isLoading };
}
