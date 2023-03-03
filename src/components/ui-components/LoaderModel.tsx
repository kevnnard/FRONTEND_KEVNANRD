import { Html, useProgress } from "@react-three/drei";
import React, { useState, useEffect } from "react";

function LoaderModel() {
  const [filled, setFilled] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const { total, progress, loaded, active } = useProgress();

  useEffect(() => {
    if (filled < 100 && isRunning) {
      setTimeout(() => setFilled((prev) => (prev += 2)), 200);
    }
  }, [filled, isRunning]);

  useEffect(() => {
    setIsRunning(true);
  }, []);
  return (
    <Html center>
      <div
        style={{
          height: "100%",
          width: `${filled}%`,
          backgroundColor: "#a66cff",
          transition: "width 0.5s",
        }}
      >
        {progress}% loaded
      </div>
    </Html>
  );
}

export default LoaderModel;
