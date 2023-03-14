/* eslint-disable react-hooks/exhaustive-deps */
import { Html, useProgress } from "@react-three/drei";
import Logo from "./Logo";

function LoaderModel() {
  const { total, progress, loaded, active } = useProgress();
  return (
    <Html style={{ position: "relative" }} center>
      <div
        style={{
          height: "100%",
          width: `${Math.trunc(progress)}%`,
          backgroundColor: "#22151d",
          transition: "width .2s",
          overflow: "hidden",
        }}
      >
        <Logo />
      </div>

      <br />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          fontFamily: "Cascadia Code",
        }}
      >
        {Math.trunc(progress)}% loaded
      </div>
    </Html>
  );
}

export default LoaderModel;
