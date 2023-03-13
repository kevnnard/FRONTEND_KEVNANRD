/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function ModelParedes(props: any) {
  const { nodes, materials }: any = useGLTF("/models3D/office.gltf");
  return (
    <group {...props} dispose={null}>
      <group position={[1.93715453, 1.98820949, -2.81586194]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.paredes_suelo_ventana_vertex.geometry}
          material={materials.Suelo}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.paredes_suelo_ventana_vertex_1.geometry}
          material={materials["Pared Derecha"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.paredes_suelo_ventana_vertex_2.geometry}
          material={materials.Vidrios}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.paredes_suelo_ventana_vertex_3.geometry}
          material={materials.glass_border1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.paredes_suelo_ventana_vertex_4.geometry}
          material={materials.handle}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.paredes_suelo_ventana_vertex_5.geometry}
          material={materials.window1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.paredes_suelo_ventana_vertex_6.geometry}
          material={materials.window2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.paredes_suelo_ventana_vertex_7.geometry}
          material={materials.sill}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.paredes_suelo_ventana_vertex_8.geometry}
          material={materials["Pared Principal"]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/models3D/office.gltf");