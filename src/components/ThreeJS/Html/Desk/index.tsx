import { Button } from "@mui/material";
import React from "react";

const MonitorHtml = ({ cameraMonitor, cameraPositionInit }) => {
  return (
    <div
      style={
        cameraMonitor
          ? {
              background: "#ccc",
              height: "100%",
              transition: "all ease-in-out 1s",
            }
          : {}
      }
    >
      <Button onClick={cameraPositionInit}>Inicion</Button>
    </div>
  );
};

export default MonitorHtml;
