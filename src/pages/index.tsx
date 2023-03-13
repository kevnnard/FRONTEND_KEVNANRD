import { Canvas } from "@react-three/fiber";
import {
  PresentationControls,
  ContactShadows,
  Sky,
  Cloud,
  PositionalAudio,
} from "@react-three/drei";
import { Suspense, useState, useEffect } from "react";

import Camera from "@/components/ThreeJS/Camera";
import Lights from "@/components/ThreeJS/Lights";
import LoaderModel from "@/components/ui-components/LoaderModel";
import { ModelParedes } from "@/components/ThreeJS/ModelParedes";
import { ModelEscritorio } from "@/components/ThreeJS/Escritorio";
import { ModelChair } from "@/components/ThreeJS/Chair";
import ModelSala from "@/components/ThreeJS/Sala";

const App3d = () => {
  //Move Camera
  const [cameraInit, setCameraInit] = useState(false);
  const [cameraPhone, setCameraPhone] = useState(false);
  const [cameraMonitor, setCameraMonitor] = useState(false);
  const [cameraTv, setCameraTv] = useState(false);
  //Lights On - Off
  const [luzPri, setLuzpri] = useState(false);
  const [luzSec, setLuzSec] = useState(false);
  const [luzTer, setLuzTer] = useState(false);
  // M U S I C

  // F U N C T I O N S
  const OnclickLight = (): void =>
    luzPri ? setLuzpri(false) : setLuzpri(true);
  const OnclickLight2 = (): void =>
    luzSec ? setLuzSec(false) : setLuzSec(true);
  const OnclickLight3 = (): void =>
    luzTer ? setLuzTer(false) : setLuzTer(true);

  const cameraPositionInit = (): void => {
    setCameraPhone(false);
    setCameraMonitor(false);
    setCameraTv(false);
    setCameraInit(true);
  };
  const positionPhone = (): void => {
    setCameraMonitor(false);
    setCameraInit(false);
    setCameraTv(false);
    setCameraPhone(true);
  };
  const positionMonitor = (): void => {
    setCameraInit(false);
    setCameraPhone(false);
    setCameraTv(false);
    setCameraMonitor(true);
  };

  const positionTv = (): void => {
    setCameraInit(false);
    setCameraPhone(false);
    setCameraMonitor(false);
    setCameraTv(true);
  };

  const initScene = (): void => {
    setTimeout(() => {
      setLuzpri(true);
      setLuzSec(true);
      setLuzTer(true);
    }, 10000);
  };

  useEffect(() => {
    initScene();
  }, []);

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
          <Suspense fallback={<LoaderModel />}>
            <fog attach="fog" args={["#a69", 8, 52]} />
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
              cameraMonitor={cameraMonitor}
              cameraTv={cameraTv}
            />
            <PresentationControls
              global
              config={{ mass: 10, tension: 500, friction: 50 }}
              snap={{ mass: 5, tension: 1600, friction: 50 }}
              rotation={[0, 0, 0]}
              polar={[-Math.PI / 4, Math.PI / 4]}
              azimuth={[-Math.PI / 4, Math.PI / 4]}
            >
              <ModelParedes position={[0, -1.7, 0.22]} />
              <ModelEscritorio
                cameraPositionInit={cameraPositionInit}
                positionPhone={positionPhone}
                positionMonitor={positionMonitor}
                position={[0, -1.7, 0.22]}
              />
              <ModelChair position={[0, -1.7, 0.22]} />
              <ModelSala
                OnclickLight2={OnclickLight2}
                OnclickLight3={OnclickLight3}
                cameraPositionInit={cameraPositionInit}
                positionTv={positionTv}
                position={[0, -1.7, 0.22]}
              />
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
        </>
      </Canvas>
      <div className="kevnnard">
        Copyright © Kevnnard 2023 Todos los derechos reservados{" "}
      </div>
    </div>
  );
};

export default App3d;
