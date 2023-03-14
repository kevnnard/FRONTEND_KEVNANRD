/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import { Canvas } from "@react-three/fiber";
import {
  PresentationControls,
  ContactShadows,
  Sky,
  Cloud,
  PositionalAudio,
  Text,
  Text3D,
  Html,
  Stars,
  ScrollControls,
  Scroll,
} from "@react-three/drei";
import { Suspense, useState, useEffect, useRef } from "react";

import Camera from "@/components/ThreeJS/Camera";
import Lights from "@/components/ThreeJS/Lights";
import LoaderModel from "@/components/ui-components/LoaderModel";
import { ModelParedes } from "@/components/ThreeJS/ModelParedes";
import { ModelEscritorio } from "@/components/ThreeJS/Escritorio";
import { ModelChair } from "@/components/ThreeJS/Chair";
import ModelSala from "@/components/ThreeJS/Sala";
import Intro from "@/components/ThreeJS/Intro";

const App3d = () => {
  // I n t r o
  const groupIntro = useRef();
  const [ready, setReady] = useState(false);
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
        <Suspense fallback={<LoaderModel />}>
          <Intro
            setLuzpri={setLuzpri}
            setLuzSec={setLuzSec}
            setLuzTer={setLuzTer}
            setReady={setReady}
            groupIntro={groupIntro}
          />
          <fog attach="fog" args={["#a69", 8, 52]} />
          <Lights luzPri={luzPri} luzSec={luzSec} luzTer={luzTer} />
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
              ready={ready}
              cameraPositionInit={cameraPositionInit}
              cameraPhone={cameraPhone}
              positionPhone={positionPhone}
              cameraMonitor={cameraMonitor}
              positionMonitor={positionMonitor}
              position={[0, -1.7, 0.22]}
            />
            <ModelChair position={[0, -1.7, 0.22]} />
            <ModelSala
              OnclickLight2={OnclickLight2}
              OnclickLight3={OnclickLight3}
              cameraPositionInit={cameraPositionInit}
              cameraTv={cameraTv}
              positionTv={positionTv}
              position={[0, -1.7, 0.22]}
            />
          </PresentationControls>
          {/* <PivotControls /> */}
          {/* <TransformControls mode="translate" /> */}
          {/* <OrbitControls target={[0, 0, 0]} /> */}
          <Text
            color="#fff"
            font="/assets/fonts/CascadiaCode.ttf"
            fontSize={0.12}
            rotation={[0, -0.87, -0.0105]}
            position={[0, -5.25, 0.4]}
            characters="abcdefghijklmnopqrstuvwxyz0123456789!"
          >
            Copyright © Kevnnard 2023 Todos los derechos reservados
          </Text>
        </Suspense>
      </Canvas>
    </div>
  );
};

export default App3d;
