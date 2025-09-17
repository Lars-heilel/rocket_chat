import { useDisclosure } from '@/shared/lib/hooks/use-disclosure';
import { ProfileSidebar } from '../elements';
import { Button } from '@/shared/shadcn-ui/ui/button';
import { ArrowLeftCircleIcon } from 'lucide-react';

export function ViewProfile() {
    const { toggle: toggleOpen, isOpen } = useDisclosure();
    return (
        <>
            <Button variant="ghost" size="lg" onClick={toggleOpen}>
                <ArrowLeftCircleIcon></ArrowLeftCircleIcon>
                <p className="font-bold">View profile</p>
            </Button>
            {isOpen && <ProfileSidebar onClose={toggleOpen} />}
        </>
    );
}
