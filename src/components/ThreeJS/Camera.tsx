import { CameraControls, PerspectiveCamera } from "@react-three/drei";
import React, { useState, useRef } from "react";

function Camera({ cameraInit, cameraPhone, cameraControlsRef2 }): any {
  const first: any = useRef();

  // console.log(first);
  if (cameraInit) {
    first.current.setFocalOffset(0, 0, 0, true);
    first.current.setPosition(-17.2, 10, 14.18, true);
  }
  if (cameraPhone) {
    first.current.setFocalOffset(0.83, -0.77, -13.1, true);
    first.current.setPosition(-9.1, 6.2, 3.9, true);
  }
  if (cameraControlsRef2) {
    first.current.setPosition(-17.2, 9.51, 14.19, true);
    first.current.setFocalOffset(0, 0, 0, true);
  }

  // console.log(first.current);
  return (
    <>
      {/* Camera for Dev */}
      {/* <PerspectiveCamera
        makeDefault
        aspect={11.11}
        rotation={[-0.5, -0.81, -0.351]}
        position={positionInit}
        fov={20}
        far={31}
        near={1}
      />
      ; */}

      {/* <OrthographicCamera makeDefault position={[0, 0, 0]} /> */}
      <CameraControls
        ref={first}
        minAzimuthAngle={-Math.PI / 4}
        maxAzimuthAngle={-Math.PI / 4}
        minPolarAngle={-Math.PI / 4}
        maxPolarAngle={Math.PI / 4}
        minDistance={5}
        maxDistance={28}
        mouseButtons={{ left: 0, right: 0, wheel: 0, middle: 0 }}
        touches={{ one: 0, two: 0, three: 0 }}
      >
        <PerspectiveCamera
          makeDefault
          position={[-17.2, 9.51, 14.18]}
          rotation={[-0.5, -0.81, -0.351]}
          fov={21}
          far={31}
          near={1}
        />
      </CameraControls>

      {/* <CameraControls /> */}
    </>
  );
}

export default Camera;
