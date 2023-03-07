import {
  CameraControls,
  OrthographicCamera,
  PerspectiveCamera,
} from "@react-three/drei";
import React, { useState } from "react";

function Camera() {
  const [positionInit, setPosition] = useState([0, 0, 0]);
  return (
    <>
      {/* Camera for Dev */}
      <PerspectiveCamera
        makeDefault
        aspect={11.11}
        rotation={[-0.5, -0.81, -0.351]}
        position={[-17, 9.51, 14.18] || positionInit}
        fov={20}
        far={31}
        near={1}
      />
      ;
      {/* <PerspectiveCamera
        makeDefault
        rotation={[-0.2, 0, -0.001]}
        position={[-0.1, 1.6, 0]}
        fov={50}
        // far={15}
      /> */}
      {/* <OrthographicCamera makeDefault position={[0, 0, 0]} /> */}
      {/* <CameraControls /> */}
    </>
  );
}

export default Camera;
