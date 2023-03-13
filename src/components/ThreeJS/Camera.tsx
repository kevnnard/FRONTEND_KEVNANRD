import { CameraControls, PerspectiveCamera } from "@react-three/drei";
import React, { useState, useRef } from "react";

function Camera({ cameraInit, cameraPhone, cameraMonitor, cameraTv }): any {
  const first: any = useRef();
  const width = window.innerWidth;
  if (cameraInit) {
    first.current.setFocalOffset(0, 0, 0, true);
    first.current.setPosition(-17.2, 9.51, 14.18, true);
  }
  if (cameraPhone) {
    first.current.setFocalOffset(0.659, -1.13, -14.1, true);
    first.current.setPosition(-9.1, 8, 3.2, true);
  }
  if (cameraMonitor) {
    first.current.setFocalOffset(0.77, -0.5, -8, true);
    first.current.setPosition(-8, 2, 0, true);
  }
  if (cameraTv) {
    first.current.setFocalOffset(-1.37, -0.6, -10, true);
    first.current.setPosition(0, 6, 10, true);
  }
  return (
    <CameraControls
      ref={first}
      minAzimuthAngle={-Math.PI / 4}
      maxAzimuthAngle={-Math.PI / 4}
      minPolarAngle={-Math.PI / 4}
      maxPolarAngle={Math.PI / 4}
      minDistance={5}
      maxDistance={30}
      mouseButtons={{ left: 0, right: 0, wheel: 0, middle: 0 }}
      touches={{ one: 0, two: 0, three: 0 }}
    >
      <PerspectiveCamera
        makeDefault
        position={[-17.2, 9.51, 14.18]}
        rotation={[-0.5, -0.81, -0.351]}
        fov={width > 390 ? 22 : 50}
        far={35}
        near={0.1}
      />
    </CameraControls>
  );
}

export default Camera;
