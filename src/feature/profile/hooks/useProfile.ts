import { useGetMyProfileQuery } from '@/shared/api/api-service';
import { useCallback, useState } from 'react';
export function useProfile() {
    const { data, isLoading } = useGetMyProfileQuery();
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const toggleOpen = useCallback(() => {
        setIsOpen((prev) => !prev);
    }, []);
    return { data, isLoading, isOpen, toggleOpen };
}
