import { useGetMyProfileQuery } from '@/entities/user/model';
import { useDisclosure } from '@/shared/hooks/use-disclosure';

export function useViewProfile() {
    const { data, isLoading } = useGetMyProfileQuery();
    const { isOpen, toggle } = useDisclosure();
    return { data, isLoading, isOpen, toggleOpen: toggle };
}
