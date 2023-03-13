/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { Html, useGLTF } from "@react-three/drei";
import TvHtml from "./Html/Tv/Index";
import Image from "next/image";

export default function ModelSala(props: any) {
  const { positionTv, cameraPositionInit, OnclickLight2, OnclickLight3 } =
    props;
  const { nodes, materials }: any = useGLTF("/models3D/sala.gltf");
  return (
    <group {...props} dispose={null}>
      <group position={[-0.52480882, 0.91112393, -1.25316823]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.sala_hex.geometry}
          material={materials["03 - Default"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.sala_hex_1.geometry}
          material={materials.Ceramic}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.sala_hex_2.geometry}
          material={materials.wire_088144225}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.sala_hex_3.geometry}
          material={materials.wire_204204204}
        >
          <Html
            scale={0.009}
            rotation={[0, -0.81, 0]}
            position={[-0.9, 0.8, -1.45]}
            transform
            occlude
          >
            <Image
              className="icon__point_red"
              src="/images/points/info.png"
              width={750}
              height={1000}
              alt={""}
              onPointerEnter={positionTv}
            />
          </Html>
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.sala_hex_4.geometry}
          material={materials["Material.011"]}
        >
          <Html
            scale={0.02}
            rotation={[0, 0, 0]}
            position={[-0.84, 0.15, -1.43]}
            style={{
              height: "1700px",
              width: "2800px",
              color: "#000",
            }}
            transform
            // occlude
          >
            <TvHtml cameraPositionInit={cameraPositionInit} />
          </Html>
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.sala_hex_5.geometry}
          material={materials["32_mat(3001852)"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.sala_hex_6.geometry}
          material={materials["27_mat(3001852).001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.sala_hex_7.geometry}
          material={materials["28_mat(3001852)"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.sala_hex_8.geometry}
          material={materials["31_mat(3001852)"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.sala_hex_9.geometry}
          material={materials["27_mat(3001852).004"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.sala_hex_10.geometry}
          material={materials["28_mat(3001852).001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.sala_hex_11.geometry}
          material={materials["32_mat(3001852).001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.sala_hex_12.geometry}
          material={materials["31_mat(3001852).001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.sala_hex_13.geometry}
          material={materials["Light.001"]}
          onPointerEnter={OnclickLight3}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.sala_hex_14.geometry}
          material={materials.Chocofur_Fabric_Solid_20}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.sala_hex_15.geometry}
          material={materials.clock}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.sala_hex_16.geometry}
          material={materials["04 - Default"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.sala_hex_17.geometry}
          material={materials["Light Light Desktop"]}
          onPointerEnter={OnclickLight2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.sala_hex_18.geometry}
          material={materials["27_mat(3001852).002"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.sala_hex_19.geometry}
          material={materials["28_mat(3001852).002"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.sala_hex_20.geometry}
          material={materials["32_mat(3001852).002"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.sala_hex_21.geometry}
          material={materials["31_mat(3001852).002"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.sala_hex_22.geometry}
          material={materials["31_mat(3001852).003"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.sala_hex_23.geometry}
          material={materials["32_mat(3001852).003"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.sala_hex_24.geometry}
          material={materials["27_mat(3001852).003"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.sala_hex_25.geometry}
          material={materials["28_mat(3001852).003"]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/models3D/sala.gltf");