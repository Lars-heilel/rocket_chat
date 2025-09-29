import { Button } from '@/shared/shadcn-ui/ui/button';
import { Github, Rocket } from 'lucide-react';

export function AppInfo() {
    return (
        <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
                <Rocket className="h-5 w-5 text-muted-foreground" />
                <div>
                    <span className="font-bold text-sm">Rocket-chat</span>
                    <p className="text-xs text-muted-foreground">v. alpha.2.28</p>
                </div>
            </div>
            <Button variant="ghost" size="icon" asChild>
                <a
                    href="https://github.com/Lars-heilel/rocket_chat"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub Repository"
                >
                    <Github className="h-4 w-4" />
                </a>
            </Button>
        </div>
    );
}
