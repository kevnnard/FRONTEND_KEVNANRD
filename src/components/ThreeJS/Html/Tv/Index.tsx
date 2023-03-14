import { Button } from "@mui/material";
import React from "react";

const TvHtml = ({ cameraTv, cameraPositionInit }) => {
  return (
    <div
      style={
        cameraTv
          ? {
              background: "#fff",
              height: "100%",
              transition: " all ease-in-out 1s",
            }
          : {}
      }
    >
      <Button onClick={cameraPositionInit}>Inicion</Button>
    </div>
  );
};

export default TvHtml;
