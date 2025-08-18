import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../store/reduxStore";
import { useRefreshMutation } from "@/shared/api/api-service";
import { useEffect } from "react";
import { TokenZodSchema } from "@/feature/auth/schemas";
import { logOut, setCredentials } from "@/feature/auth/store/authSlices";
import { Outlet } from "react-router";
import { Spiner } from "@/shared/components/ui/spiner";

export function AuthProvider() {
  const { token } = useSelector((state: RootState) => state.auth);
  const [refresh, { isSuccess, isLoading }] = useRefreshMutation();
  const dispatch = useDispatch();
  useEffect(() => {
    const refreshSession = async () => {
      const response = await refresh().unwrap();
      const validate = await TokenZodSchema.safeParseAsync(response.token);
      if (validate.success) {
        dispatch(setCredentials(response));
      } else {
        dispatch(logOut());
      }
    };
    if (!token) {
      refreshSession();
    }
  }, [dispatch, refresh, token]);
  if (isLoading) {
    return <Spiner />;
  }
  if (isSuccess) {
    return <Outlet></Outlet>;
  }
}
