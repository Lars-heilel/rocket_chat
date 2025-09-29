import { Button } from '@/shared/shadcn-ui/ui/button';
import { useRouteError, isRouteErrorResponse, useNavigate } from 'react-router';

export function RouteErrorPage() {
    const error = useRouteError();
    const navigate = useNavigate();

    let errorMessage: string;
    let errorStatus: number | undefined;

    if (isRouteErrorResponse(error)) {
        errorMessage = error.data?.message || error.statusText;
        errorStatus = error.status;
    } else if (error instanceof Error) {
        errorMessage = error.message;
    } else {
        errorMessage = 'An unknown error occurred';
    }

    return (
        <div className="flex min-h-screen flex-col items-center justify-center gap-4 text-center">
            <h1 className="text-4xl font-bold">Oops! Something went wrong.</h1>
            <p className="text-muted-foreground">
                {errorStatus && <span className="font-bold">{errorStatus}: </span>}
                {errorMessage}
            </p>

            <p className="max-w-md text-sm text-muted-foreground">
                We couldn't load the page you were looking for. You may have mistyped the address, or an error occurred during loading.
            </p>
            <div className="flex gap-4">
                <Button onClick={() => navigate(-1)}>Go Back</Button>

                <Button variant="outline" onClick={() => navigate('/')}>
                    Back to Home
                </Button>
            </div>
        </div>
    );
}
