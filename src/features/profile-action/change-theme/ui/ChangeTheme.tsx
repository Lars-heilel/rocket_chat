import { Palette } from 'lucide-react';
import { useTheme } from '@/entities/theme/ui/theme-provider';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/shared/shadcn-ui/ui/dropdown-menu';
import { CommandItem } from '@/shared/shadcn-ui';

export function ChangeTheme() {
    const { setTheme } = useTheme();

    return (
        <CommandItem>
            <DropdownMenu>
                <DropdownMenuTrigger className="flex">
                    <Palette className="mr-2 h-4 w-4" />
                    <span>Change theme</span>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                    <DropdownMenuItem onClick={() => setTheme('light')}>Light</DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setTheme('dark')}>Dark</DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setTheme('system')}>System</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </CommandItem>
    );
}
