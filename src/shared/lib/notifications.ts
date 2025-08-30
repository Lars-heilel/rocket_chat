import { toast } from 'sonner';

export const notificationService = {
    success: (message: string) => {
        console.log(`${message}`);
        toast.success(message);
    },
    error: (message: string) => {
        toast.error(message);
    },
    info: (message: string) => {
        toast.info(message);
    },
};
