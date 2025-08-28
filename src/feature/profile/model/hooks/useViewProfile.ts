import { setUser, useGetMyProfileQuery } from '@/entities/user/model';
import { useDisclosure } from '@/shared/hooks/use-disclosure';
import { useAppDispatch } from '@/shared/hooks/use-redux-hooks';

export function useViewProfile() {
    const { data, isLoading } = useGetMyProfileQuery();
    const dispatch = useAppDispatch();
    if (data) {
        dispatch(setUser(data));
    }
    const { isOpen, toggle } = useDisclosure();
    return { data, isLoading, isOpen, toggleOpen: toggle };
}
