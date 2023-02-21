import React from "react";
import Header from "./header/Header";

const LayoutNoAuth = ({ children }: any) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default LayoutNoAuth;
