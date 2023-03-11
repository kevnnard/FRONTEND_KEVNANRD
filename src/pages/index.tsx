import { Canvas } from "@react-three/fiber";
import {
  PresentationControls,
  ContactShadows,
  Sky,
  Cloud,
  PositionalAudio,
} from "@react-three/drei";
import { Suspense, useState } from "react";

import Camera from "@/components/ThreeJS/Camera";
import Lights from "@/components/ThreeJS/Lights";
import { Model } from "@/components/ThreeJS/Office";
import LoaderModel from "@/components/ui-components/LoaderModel";
import { ModelChair } from "@/components/ThreeJS/Chair";

const App3d = () => {
  //Move Camera
  const [cameraInit, setCameraInit] = useState(false);
  const [cameraPhone, setCameraPhone] = useState(false);
  const [cameraControlsRef2, setcameraControlsRef2] = useState(false);
  //Lights On - Off
  const [luzPri, setLuzpri] = useState(true);
  const [luzSec, setLuzSec] = useState(true);
  const [luzTer, setLuzTer] = useState(true);
  // F U N C T I O N S
  const OnclickLight = (): void =>
    luzPri ? setLuzpri(false) : setLuzpri(true);
  const OnclickLight2 = (): void =>
    luzSec ? setLuzSec(false) : setLuzSec(true);
  const OnclickLight3 = (): void =>
    luzTer ? setLuzTer(false) : setLuzTer(true);

  const cameraPositionInit = (): void => {
    setCameraInit(true);
    setCameraPhone(false);
    setLuzpri(true);
  };
  const positionPhone = (): void => {
    setCameraPhone(true);
  };
  const positionInitCamera = (): void => {
    setcameraControlsRef2(cameraControlsRef2 ? false : true);
  };
  return (
    <div style={{ height: "100vh", maxWidth: "100%", background: "#22151f" }}>
      <Canvas
        shadows={true}
        gl={{
          antialias: true,
          toneMappingExposure: 1,
        }}
        dpr={[1, 2]}
      >
        <>
          <Suspense fallback={null}>
            <fog attach="fog" args={["#a69", 10, 52]} />
            {/* <Sky sunPosition={[1, -2, 300]} /> */}
            <Lights luzPri={luzPri} luzSec={luzSec} luzTer={luzTer} />
            {/* <Cloud
          speed={1}
          position={[0, -3, -3]}
          color={"#a69"}
          segments={10}
          opacity={0.9}
        /> */}
            <Camera
              cameraInit={cameraInit}
              cameraPhone={cameraPhone}
              cameraControlsRef2={cameraControlsRef2}
            />
            <PresentationControls
              global
              config={{ mass: 10, tension: 500, friction: 50 }}
              snap={{ mass: 5, tension: 1600, friction: 50 }}
              rotation={[0, 0, 0]}
              polar={[-Math.PI / 4, Math.PI / 4]}
              azimuth={[-Math.PI / 4, Math.PI / 4]}
            >
              {/* <Model
                position={[0, -1.7, 0.22]}
                cameraPositionInit={cameraPositionInit}
                OnclickLight={OnclickLight}
                OnclickLight2={OnclickLight2}
                OnclickLight3={OnclickLight3}
                positionPhone={positionPhone}
                positionInitCamera={positionInitCamera}
              /> */}
              <ModelChair position={[0, -1.7, 0.22]} />
              <ContactShadows
                frames={10}
                rotation-x={[Math.PI / 2]}
                position={[0, -0.33, 0]}
                far={0.4}
                width={2}
                height={2}
                blur={10}
              />
            </PresentationControls>
            {/* <PivotControls /> */}
            {/* <TransformControls mode="translate" /> */}
            {/* <OrbitControls target={[0, 0, 0]} /> */}
            {/* <Cloud speed={0.2} position={[-15, 0, 0]} segments={10} /> */}
          </Suspense>
          <PositionalAudio autoplay url="/music/intro.mp3" distance={2} loop />
        </>
      </Canvas>
      <div className="kevnnard">
        Copyright © Kevnnard 2023 Todos los derechos reservados{" "}
      </div>
    </div>
  );
};

export default App3d;
