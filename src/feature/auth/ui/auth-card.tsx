import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/shared/components/ui/card";
import { cn } from "@/shared/lib/utils";
import { AuthApiError } from "./authApiError";

interface AuthCardProps extends React.ComponentProps<"div"> {
  title: string;
  serverError?: string | null;
  errorTitle: string;
  children: React.ReactNode;
  footerContent: React.ReactNode;
}
export function AuthCard({
  title,
  serverError,
  errorTitle,
  children,
  footerContent,
  className,
  ...props
}: AuthCardProps) {
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader className="text-center">
          {serverError ? (
            <AuthApiError title={errorTitle} description={serverError} />
          ) : (
            <CardTitle>{title}</CardTitle>
          )}
        </CardHeader>
        <CardContent>{children}</CardContent>
        <CardFooter className="flex justify-between">
          {footerContent}
        </CardFooter>
      </Card>
    </div>
  );
}
