import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  TransformControls,
  PivotControls,
  Sky,
  PresentationControls,
} from "@react-three/drei";
import { Suspense, useState } from "react";

import Camera from "@/components/ThreeJS/Camera";
import Lights from "@/components/ThreeJS/Lights";
import { Model } from "@/components/ThreeJS/Office";
import LoaderModel from "@/components/ui-components/LoaderModel";
import { ModelChair } from "@/components/ThreeJS/Chair";

const IndexPortafolio = () => {
  const [luzPri, setLuzpri] = useState(true);
  const [luzSec, setLuzSec] = useState(true);
  const [luzTer, setLuzTer] = useState(true);

  const OnclickLight = (): any => (luzPri ? setLuzpri(false) : setLuzpri(true));
  const OnclickLight2 = (): any =>
    luzSec ? setLuzSec(false) : setLuzSec(true);
  const OnclickLight3 = (): any =>
    luzTer ? setLuzTer(false) : setLuzTer(true);
  return (
    <div style={{ height: "100vh", width: "100%", background: "#3c2436" }}>
      <Canvas
        shadows={true}
        gl={{
          antialias: true,
          toneMappingExposure: 1,
        }}
        dpr={[1, 2]}
      >
        <Suspense fallback={<LoaderModel />}>
          <fog attach="fog" args={["#a69", 3, 60]} />
          {/* <Sky sunPosition={[0, -100, 0]} /> */}
          <Lights luzPri={luzPri} luzSec={luzSec} luzTer={luzTer} />
          <Camera />
          <PresentationControls
            global
            config={{ mass: 10, tension: 500, friction: 50 }}
            snap={{ mass: 4, tension: 1600, friction: 50 }}
            rotation={[0, 0, 0]}
            polar={[-Math.PI / 5, Math.PI / 5]}
            azimuth={[-Math.PI / 5, Math.PI / 5]}
          >
            <Model
              OnclickLight={OnclickLight}
              OnclickLight2={OnclickLight2}
              OnclickLight3={OnclickLight3}
            />
            <ModelChair />
          </PresentationControls>
        </Suspense>
        {/* <PivotControls /> */}
        {/* <TransformControls mode="translate" /> */}
        {/* <OrbitControls target={[0, 0, 0]} /> */}
      </Canvas>
      <div className="kevnnard">
        Copyright © 2023 derechos reservados Kevnnard{" "}
      </div>
    </div>
  );
};

export default IndexPortafolio;
