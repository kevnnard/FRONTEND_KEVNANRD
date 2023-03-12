import { Button } from "@mui/material";
import React from "react";

const MonitorHtml = ({ cameraPositionInit }) => {
  return (
    <div style={{ background: "#fff", height: "100%" }}>
      <Button onClick={cameraPositionInit}>Inicion</Button>
    </div>
  );
};

export default MonitorHtml;
