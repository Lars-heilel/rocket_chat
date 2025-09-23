import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { format, isToday, isYesterday } from 'date-fns';

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function formatChatTimestamp(date: Date | string): string {
    const d = new Date(date);
    if (isToday(d)) {
        return format(d, 'HH:mm');
    }
    if (isYesterday(d)) {
        return 'yesterday';
    }
    return format(d, 'dd.MM.yy');
}
