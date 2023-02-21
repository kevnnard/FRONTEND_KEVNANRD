/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect } from "react";
import Loader from "@/components/ui-components/Loader";
import PropTypes from "prop-types";
import LayoutNoAuth from "@/components/app";

const noGuard = ({ children }: any) => {
  useEffect(() => {
    <Loader />;
  }, []);

  return <LayoutNoAuth>{children}</LayoutNoAuth>;
};

noGuard.propTypes = {
  children: PropTypes.node,
};

export default noGuard;
