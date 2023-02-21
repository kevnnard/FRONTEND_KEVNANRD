/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect } from "react";
import PropTypes from "prop-types";
import Loader from "@/components/ui-components/Loader";
import useAuth from "@/hooks/useAuth";
import { useRouter } from "next/router";
import DashboardContentIndex from "@/components/DasboardComponents/Index";

const authGuard = ({ children }: any) => {
  const {
    authState: { isloggedIn },
  } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isloggedIn) {
      router.push("/login");
    }
  }, [isloggedIn]);

  if (!isloggedIn) return <Loader />;
  return <DashboardContentIndex>{children}</DashboardContentIndex>;
};

authGuard.propTypes = {
  children: PropTypes.node,
};
export default authGuard;
