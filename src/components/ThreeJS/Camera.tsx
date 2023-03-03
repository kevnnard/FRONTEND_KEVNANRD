import { PerspectiveCamera } from "@react-three/drei";
import React from "react";

function Camera() {
  return (
    <>
      <PerspectiveCamera makeDefault position={[0.1, 1.7, 2.8]} fov={90} />;
      {/* <PerspectiveCamera
        makeDefault
        rotation={[-0.2, 0, -0.001]}
        position={[-0.1, 1.6, 0]}
        fov={50}
      /> */}
      ;
    </>
  );
}

export default Camera;
