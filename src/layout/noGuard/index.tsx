/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect } from "react";
import Loader from "@/components/ui-components/Loader";
import PropTypes from "prop-types";

const noGuard = ({ children }: any) => {
  useEffect(() => {
    <Loader />;
  }, []);

  return <>{children}</>;
};

noGuard.propTypes = {
  children: PropTypes.node,
};

export default noGuard;
