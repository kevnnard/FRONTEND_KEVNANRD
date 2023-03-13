import { Button } from "@mui/material";
import React from "react";

const TvHtml = ({ cameraPositionInit }) => {
  return (
    <div style={{ height: "100%", background: "#fff" }}>
      <Button onClick={cameraPositionInit}>Inicion</Button>
    </div>
  );
};

export default TvHtml;
