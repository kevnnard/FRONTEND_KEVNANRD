/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import {
  Html,
  PositionalAudio,
  TransformControls,
  useGLTF,
} from "@react-three/drei";
import Image from "next/image";
import MovilHtml from "./Html/Movil";
import MonitorHtml from "./Html/Desk";

export function ModelEscritorio(props: any) {
  const {
    cameraPositionInit,
    OnclickLight,
    OnclickLight2,
    OnclickLight3,
    positionPhone,
    positionMonitor,
  } = props;
  const { nodes, materials }: any = useGLTF("/models3D/escritorio.gltf");
  return (
    <group {...props} dispose={null}>
      <group position={[2.76907086, 0.65455389, 0.94157887]}>
        <mesh castShadow receiveShadow>
          <Html
            scale={0.02}
            rotation={[-1.052, -1, -0.9]}
            position={[-0.17959, 0.416, -1.38728]}
            style={{
              height: "415px",
              width: "210px",
              color: "#000",
            }}
            transform
          >
            <MovilHtml cameraPositionInit={cameraPositionInit} />
          </Html>
          <PositionalAudio
            autoplay
            loop
            url="./music/intro.mp3"
            distance={15}
          />
        </mesh>

        <mesh
          castShadow
          receiveShadow
          geometry={nodes.escritorio_hex_1.geometry}
          material={materials.iphone_11_max_pro}
        >
          <Html
            scale={0.009}
            rotation={[0, -0.81, 0]}
            position={[-0.1, 0.74, -1.45]}
            transform
            occlude
          >
            <Image
              className="icon__point_red"
              src="/images/points/info.png"
              width={750}
              height={1000}
              alt={""}
              onPointerEnter={positionPhone}
            />
          </Html>
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.escritorio_hex_2.geometry}
          material={materials.base_phone}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.escritorio_hex_3.geometry}
          material={materials.screen_monitor_material}
        >
          <Html
            scale={0.02}
            rotation={[0.003, -1.56, 0]}
            position={[0.366673, 0.81999, -0.381]}
            style={{
              height: "1500px",
              width: "3000px",
              color: "#000",
            }}
            transform
            //   occlude
          >
            <MonitorHtml cameraPositionInit={cameraPositionInit} />
          </Html>
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.escritorio_hex_4.geometry}
          material={materials.monitor}
        >
          <Html
            scale={0.009}
            rotation={[0, -0.81, 0]}
            position={[0.45, 1.37, -0.35]}
            transform
            occlude
          >
            <Image
              className="icon__point_red"
              src="/images/points/info.png"
              width={750}
              height={1000}
              alt={""}
              onPointerEnter={positionMonitor}
            />
          </Html>
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.escritorio_hex_5.geometry}
          material={materials["teclado.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.escritorio_hex_6.geometry}
          material={materials.frontal}
        />

        <mesh
          castShadow
          receiveShadow
          geometry={nodes.escritorio_hex_7.geometry}
          material={materials.demas}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.escritorio_hex_8.geometry}
          material={materials.Material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.escritorio_hex_9.geometry}
          material={materials.wire_000000083}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.escritorio_hex_10.geometry}
          material={materials.wire_169255193}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.escritorio_hex_11.geometry}
          material={materials["Material.001"]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/models3D/escritorio.gltf");