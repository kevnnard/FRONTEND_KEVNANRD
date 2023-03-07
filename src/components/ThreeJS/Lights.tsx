import { Environment } from "@react-three/drei";
import React from "react";
import { SpotLightShadow } from "three";

function Lights({ luzPri, luzSec, luzTer }: any) {
  return (
    <>
      {/* <pointLight
        position={[1.5, 2, 1]}
        color={"#FF9F9F"}
        intensity={0}
        distance={4}
        decay={1}
        power={50}
        castShadow
        receiveShadow
        shadow-bias={-0.012}
      />
      <pointLight
        position={[-1.5, 2, 1]}
        color={"#FF9F9F"}
        intensity={0}
        distance={4}
        decay={1}
        power={50}
        castShadow
        receiveShadow
        shadow-bias={-0.012}
      /> */}
      <spotLight
        isSpotLight={luzPri}
        position={[-1, 4, -2.3]}
        angle={Math.PI / 3.8}
        color={"0xfff"}
        intensity={0}
        distance={6.1}
        penumbra={0.4}
        decay={1}
        power={20}
        castShadow
        receiveShadow
        shadow-bias={-0.02}
      />
      <pointLight
        isPointLight={luzSec}
        position={[1, 2, 1.1]}
        color={"#CFD8D7"}
        intensity={0}
        distance={6}
        decay={1.5}
        power={60}
        castShadow
        receiveShadow
        shadow-bias={-0.019}
      />
      <pointLight
        isPointLight={luzTer}
        position={[-1.1, 2.6, -2]}
        color={"#BC7C9C"}
        intensity={0}
        distance={6}
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
