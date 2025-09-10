import { useEffect } from 'react';

import { finishSessionInit } from '@/entities/session/model/slice';
import { useGetMyProfileQuery } from '@/entities/user';
import { useAppDispatch } from '@/shared/lib/redux/use-redux-hooks';
export function SessionProvider({ children }: { children: React.ReactNode }) {
    const dispatch = useAppDispatch();
    const { isLoading } = useGetMyProfileQuery();

    useEffect(() => {
        if (!isLoading) {
            dispatch(finishSessionInit());
        }
    }, [isLoading, dispatch]);
    return children;
}
