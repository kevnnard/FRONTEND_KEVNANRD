import { Environment } from "@react-three/drei";
import React from "react";
import { SpotLightShadow } from "three";

function Lights() {
  return (
    <>
      {/* <ambientLight /> */}
      <spotLight
        position={[-3.4, 3.6, 1.6]}
        angle={1.3}
        color={"#FAA99C"}
        intensity={15}
        distance={5.5}
        penumbra={1.5}
        decay={1.3}
        power={30}
        castShadow={true}
        receiveShadow
        shadow-bias={-0.003}
        // shadow-mapSize={2}
      />
      <spotLight
        position={[3.3, 2.9, 2.3]}
        angle={4}
        color={"#FAA99C"}
        intensity={15}
        distance={5.5}
        penumbra={1.5}
        decay={1.3}
        power={30}
        receiveShadow
        shadow-bias={-0.003}
      />
      <spotLight
        position={[-0.1, 1.9, -2.8]}
        angle={0.7}
        color={"#0066ff"}
        intensity={20}
        distance={4}
        penumbra={0.1}
        decay={2}
        power={20}
        castShadow
        receiveShadow
        shadow-bias={-0.003}
      />
      <spotLight
        position={[-0.1, 3.7, -2.8]}
        angle={1}
        color={"#fff"}
        intensity={20}
        distance={5.2}
        penumbra={0.1}
        decay={0.9}
        power={15}
        castShadow
        receiveShadow
        shadow-bias={-0.005}
      />
      <pointLight
        position={[2.5, 1.8, -2]}
        color={"#FFD07B "}
        intensity={5}
        distance={5}
        decay={3}
        power={40}
        castShadow
        receiveShadow
        shadow-bias={-0.003}
      />
      <pointLight
        position={[-2.5, 1.8, -2]}
        color={"#BC7C9C"}
        intensity={10}
        distance={5}
        decay={3}
        power={100}
        castShadow
        receiveShadow
        shadow-bias={-0.003}
      />
      {/* <ambientLight color={"#000"} intensity={1} /> */}
    </>
  );
}
export default Lights;
