import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  TransformControls,
  PivotControls,
} from "@react-three/drei";
import { Suspense } from "react";

import Camera from "@/components/ThreeJS/Camera";
import Lights from "@/components/ThreeJS/Lights";
import { Model } from "@/components/ThreeJS/Office";
import LoaderModel from "@/components/ui-components/LoaderModel";
import { ModelChair } from "@/components/ThreeJS/Chair";

const IndexPortafolio = () => {
  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <Canvas
        shadows={true}
        gl={{
          antialias: true,
          toneMappingExposure: 1.1,
        }}
        dpr={[1, 2]}
      >
        <Suspense fallback={<LoaderModel />}>
          <Lights />

          <Camera />
          {/* <Maincraft /> */}
          <Model />
          <ModelChair />
        </Suspense>
        {/* <PivotControls /> */}
        {/* <TransformControls mode="translate" /> */}
        {/* <OrbitControls target={[0, 0, 0]} /> */}
      </Canvas>
    </div>
  );
};

export default IndexPortafolio;
