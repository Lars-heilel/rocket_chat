import { AuthCard } from "../ui/elements/auth-card";
import { FRONTEND_PATHS } from "@/shared/constants/all-path";
import { Link } from "react-router";
export function ConfirmEmailPage({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <AuthCard
      title="Confirmation"
      errorTitle="aboba"
      className={className}
      footerContent={
        <>
          <span>Return to login?</span>
          <Link className="hover:underline" to={FRONTEND_PATHS.LOGIN}>
            {"Login"}
          </Link>
        </>
      }
      {...props}
    >
      <div>Thanks for registering</div>
    </AuthCard>
  );
}
