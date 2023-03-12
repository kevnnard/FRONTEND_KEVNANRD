import { Environment } from "@react-three/drei";
import React from "react";
import { SpotLightShadow } from "three";

function Lights({ luzPri, luzSec, luzTer }: any) {
  return (
    <>
      <spotLight
        isSpotLight={luzPri}
        position={[3, 3.5, 1]}
        angle={Math.PI / 3.8}
        color={"#fff"}
        intensity={0}
        distance={5}
        penumbra={0.5}
        decay={1}
        power={40}
        castShadow
        receiveShadow
        shadow-bias={-0.02}
      />
      <pointLight
        isLight={luzSec}
        position={[1, 2, 1.1]}
        color={"#CFD8D7"}
        intensity={0}
        distance={7}
        decay={1.5}
        power={60}
        castShadow
        receiveShadow
        shadow-bias={-0.019}
      />
      <pointLight
        isLight={luzTer}
        position={[-1.1, 2.6, -2]}
        color={"#BC7C9C"}
        intensity={0}
        distance={7}
        decay={1.1}
        power={80}
        castShadow
        receiveShadow
        shadow-bias={-0.012}
      />
      {/* <ambientLight color={"#001"} intensity={10} /> */}
    </>
  );
}
export default Lights;
