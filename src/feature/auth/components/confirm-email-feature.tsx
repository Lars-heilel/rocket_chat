import {FRONTEND_PATHS} from "@/app/router/all-path";
import {AuthCard} from "../ui/auth-card";

import {Link} from "react-router";

export function ConfirmEmailFeature({
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
