/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import { Html, PositionalAudio, useGLTF } from "@react-three/drei";
import Image from "next/image";
import MovilHtml from "./Html/Movil";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";

export function Model(props: any) {
  const {
    cameraPositionInit,
    OnclickLight,
    OnclickLight2,
    OnclickLight3,
    positionPhone,
    positionInitCamera,
  } = props;

  const { nodes, materials }: any = useGLTF("./models/OfiiceDraco.gltf", true);
  return (
    <group {...props} dispose={null}>
      <mesh
        name="Malla029"
        castShadow
        receiveShadow
        geometry={nodes.Malla029.geometry}
        material={materials["27_mat(3001852).002"]}
      />
      <mesh
        name="Malla029_1"
        castShadow
        receiveShadow
        geometry={nodes.Malla029_1.geometry}
        material={materials["28_mat(3001852).002"]}
      />
      <mesh
        name="7_obj(3001852)"
        castShadow
        receiveShadow
        geometry={nodes["7_obj(3001852)"].geometry}
        material={materials["32_mat(3001852).002"]}
      />
      <mesh
        name="9_obj(3001852)"
        castShadow
        receiveShadow
        geometry={nodes["9_obj(3001852)"].geometry}
        material={materials["31_mat(3001852).002"]}
      />
      <mesh
        name="Malla038"
        castShadow
        receiveShadow
        geometry={nodes.Malla038.geometry}
        material={materials["27_mat(3001852).003"]}
      />
      <mesh
        name="Malla038_1"
        castShadow
        receiveShadow
        geometry={nodes.Malla038_1.geometry}
        material={materials["28_mat(3001852).003"]}
      />
      <mesh
        name="7_obj(3001852)001"
        castShadow
        receiveShadow
        geometry={nodes["7_obj(3001852)001"].geometry}
        material={materials["32_mat(3001852).003"]}
      />
      <mesh
        name="9_obj(3001852)001"
        castShadow
        receiveShadow
        geometry={nodes["9_obj(3001852)001"].geometry}
        material={materials["31_mat(3001852).003"]}
      />
      <mesh
        name="B"
        castShadow
        receiveShadow
        geometry={nodes.B.geometry}
        material={materials["Material.008"]}
      />
      <mesh
        name="A"
        castShadow
        receiveShadow
        geometry={nodes.A.geometry}
        material={materials["Material.009"]}
      />
      <mesh
        name="Object003"
        castShadow
        receiveShadow
        geometry={nodes.Object003.geometry}
        material={materials.Ceramic}
      />
      <mesh
        name="Malla019"
        castShadow
        receiveShadow
        geometry={nodes.Malla019.geometry}
        material={materials["03 - Default"]}
      />
      <mesh
        name="Malla019_1"
        castShadow
        receiveShadow
        geometry={nodes.Malla019_1.geometry}
        material={materials.Ceramic}
      />
      <mesh
        name="TV서람장_위_선반"
        castShadow
        receiveShadow
        geometry={nodes.TV서람장_위_선반.geometry}
        material={materials["03 - Default"]}
      />
      <mesh
        name="Object001"
        castShadow
        receiveShadow
        geometry={nodes.Object001.geometry}
        material={materials["04 - Default"]}
      />
      <mesh
        name="Object004"
        castShadow
        receiveShadow
        geometry={nodes.Object004.geometry}
        material={materials["04 - Default"]}
      />
      <mesh
        name="Malla022"
        castShadow
        receiveShadow
        geometry={nodes.Malla022.geometry}
        material={materials["27_mat(3001852).001"]}
      />
      <mesh
        name="Malla022_1"
        castShadow
        receiveShadow
        geometry={nodes.Malla022_1.geometry}
        material={materials["28_mat(3001852)"]}
      />
      <mesh
        name="2_obj(3001852)"
        castShadow
        receiveShadow
        geometry={nodes["2_obj(3001852)"].geometry}
        material={materials["32_mat(3001852)"]}
      />
      <mesh
        name="10_obj(3001852)"
        castShadow
        receiveShadow
        geometry={nodes["10_obj(3001852)"].geometry}
        material={materials["31_mat(3001852)"]}
      />
      <mesh
        name="Malla031"
        castShadow
        receiveShadow
        geometry={nodes.Malla031.geometry}
        material={materials["27_mat(3001852).004"]}
      />
      <mesh
        name="Malla031_1"
        castShadow
        receiveShadow
        geometry={nodes.Malla031_1.geometry}
        material={materials["28_mat(3001852).001"]}
      />
      <mesh
        name="2_obj(3001852)001"
        castShadow
        receiveShadow
        geometry={nodes["2_obj(3001852)001"].geometry}
        material={materials["32_mat(3001852).001"]}
      />
      <mesh
        name="10_obj(3001852)001"
        castShadow
        receiveShadow
        geometry={nodes["10_obj(3001852)001"].geometry}
        material={materials["31_mat(3001852).001"]}
      />
      <mesh
        name="Monitor"
        castShadow
        receiveShadow
        geometry={nodes.Monitor.geometry}
        material={materials["Material.013"]}
      >
        <Html
          scale={0.009}
          rotation={[0, -0.81, 0]}
          position={[3.14, 2.05, 0.5]}
          transform
          occlude
        >
          <Image
            className="icon__point_red"
            src="/images/points/info.png"
            width={750}
            height={1000}
            alt={""}
          />
        </Html>
      </mesh>
      <mesh
        name="MouseThermaltakeBlack_1"
        castShadow
        receiveShadow
        geometry={nodes.MouseThermaltakeBlack_1.geometry}
        material={materials.wire_000000083}
      />
      <mesh
        name="MouseThermaltakeBlack_2"
        castShadow
        receiveShadow
        geometry={nodes.MouseThermaltakeBlack_2.geometry}
        material={materials.wire_000000125}
      />
      <mesh
        name="MouseThermaltakeBlack_3"
        castShadow
        receiveShadow
        geometry={nodes.MouseThermaltakeBlack_3.geometry}
        material={materials.wire_169255193}
      />
      <mesh
        name="MouseThermaltakeBlack_4"
        castShadow
        receiveShadow
        geometry={nodes.MouseThermaltakeBlack_4.geometry}
        material={materials.wire_000083069}
      />
      <mesh
        name="MouseThermaltakeBlack_5"
        castShadow
        receiveShadow
        geometry={nodes.MouseThermaltakeBlack_5.geometry}
        material={materials.wire_197131131}
      />
      <mesh
        name="MouseThermaltakeBlack_6"
        castShadow
        receiveShadow
        geometry={nodes.MouseThermaltakeBlack_6.geometry}
        material={materials.wire_083035000}
      />
      <mesh
        name="MouseThermaltakeBlack_7"
        castShadow
        receiveShadow
        geometry={nodes.MouseThermaltakeBlack_7.geometry}
        material={materials.wire_000083000}
      />
      <mesh
        name="MouseThermaltakeBlack_8"
        castShadow
        receiveShadow
        geometry={nodes.MouseThermaltakeBlack_8.geometry}
        material={materials.wire_255215169}
      />
      <mesh
        name="Light_Desktop"
        castShadow
        receiveShadow
        geometry={nodes.Light_Desktop.geometry}
        material={materials["Light Light Desktop"]}
        onPointerEnter={OnclickLight2}
      />
      <mesh
        name="iphone_11_max_pro"
        castShadow
        receiveShadow
        geometry={nodes.iphone_11_max_pro.geometry}
        material={materials.iphone_11_max_pro}
      >
        <Html
          scale={0.009}
          rotation={[0, -0.81, 0]}
          position={[2.65, 1.38, -0.48]}
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
        name="Light001"
        castShadow
        receiveShadow
        geometry={nodes.Light001.geometry}
        material={materials["Light.001"]}
        onPointerEnter={OnclickLight3}
      />
      <mesh
        name="Cube002"
        castShadow
        receiveShadow
        geometry={nodes.Cube002.geometry}
        material={materials["Material.001"]}
      />
      <mesh
        name="Cube003"
        castShadow
        receiveShadow
        geometry={nodes.Cube003.geometry}
        material={materials["Material.001"]}
      />
      <mesh
        name="Cube004_1"
        castShadow
        receiveShadow
        geometry={nodes.Cube004_1.geometry}
        material={materials["Material.001"]}
      />
      <mesh
        name="Cube004_2"
        castShadow
        receiveShadow
        geometry={nodes.Cube004_2.geometry}
        material={materials["Material.010"]}
      />
      <mesh
        name="Cube001"
        castShadow
        receiveShadow
        geometry={nodes.Cube001.geometry}
        material={materials["Material.001"]}
      />
      <mesh
        name="Cube001_1"
        castShadow
        receiveShadow
        geometry={nodes.Cube001_1.geometry}
        material={materials["Material.010"]}
      />
      <mesh
        name="Cube006_1"
        castShadow
        receiveShadow
        geometry={nodes.Cube006_1.geometry}
        material={materials["Material.001"]}
      />
      <mesh
        name="Cube006_2"
        castShadow
        receiveShadow
        geometry={nodes.Cube006_2.geometry}
        material={materials["Material.010"]}
      />
      <mesh
        name="Cube007_1"
        castShadow
        receiveShadow
        geometry={nodes.Cube007_1.geometry}
        material={materials["Material.001"]}
      />
      <mesh
        name="Cube007_2"
        castShadow
        receiveShadow
        geometry={nodes.Cube007_2.geometry}
        material={materials["Material.010"]}
      />
      <mesh
        name="Cube008_1"
        castShadow
        receiveShadow
        geometry={nodes.Cube008_1.geometry}
        material={materials["Material.001"]}
      />
      <mesh
        name="Cube008_2"
        castShadow
        receiveShadow
        geometry={nodes.Cube008_2.geometry}
        material={materials["Material.010"]}
      />
      <mesh
        name="Industrial_Fan_1001_Cube011_1"
        castShadow
        receiveShadow
        geometry={nodes.Industrial_Fan_1001_Cube011_1.geometry}
        material={materials["Material.010"]}
      />
      <mesh
        name="Industrial_Fan_1001_Cube011_2"
        castShadow
        receiveShadow
        geometry={nodes.Industrial_Fan_1001_Cube011_2.geometry}
        material={materials["Material.001"]}
      />
      <mesh
        name="Industrial_Fan_1002_Cube012_1"
        castShadow
        receiveShadow
        geometry={nodes.Industrial_Fan_1002_Cube012_1.geometry}
        material={materials["Material.010"]}
      />
      <mesh
        name="Industrial_Fan_1002_Cube012_2"
        castShadow
        receiveShadow
        geometry={nodes.Industrial_Fan_1002_Cube012_2.geometry}
        material={materials["Material.001"]}
      />
      <mesh
        name="Industrial_Fan_1003_Cube013_1"
        castShadow
        receiveShadow
        geometry={nodes.Industrial_Fan_1003_Cube013_1.geometry}
        material={materials["Material.010"]}
      />
      <mesh
        name="Industrial_Fan_1003_Cube013_2"
        castShadow
        receiveShadow
        geometry={nodes.Industrial_Fan_1003_Cube013_2.geometry}
        material={materials["Material.001"]}
      />
      <mesh
        name="Industrial_Fan_1_Cube009_1"
        castShadow
        receiveShadow
        geometry={nodes.Industrial_Fan_1_Cube009_1.geometry}
        material={materials["Material.010"]}
      />
      <mesh
        name="Industrial_Fan_1_Cube009_2"
        castShadow
        receiveShadow
        geometry={nodes.Industrial_Fan_1_Cube009_2.geometry}
        material={materials["Material.001"]}
      >
        <PositionalAudio autoplay loop url="/music/intro.mp3" distance={1} />
      </mesh>
      <mesh
        name="Plane001"
        castShadow
        receiveShadow
        geometry={nodes.Plane001.geometry}
        material={materials["Material.001"]}
      />
      <mesh
        name="Plane002_Plane007"
        castShadow
        receiveShadow
        geometry={nodes.Plane002_Plane007.geometry}
        material={materials["Material.001"]}
      />
      <mesh
        name="Plane003_Plane008"
        castShadow
        receiveShadow
        geometry={nodes.Plane003_Plane008.geometry}
        material={materials["Material.001"]}
      />
      <mesh
        name="Plane004_Plane009"
        castShadow
        receiveShadow
        geometry={nodes.Plane004_Plane009.geometry}
        material={materials["Material.001"]}
      />
      <mesh
        name="Plane005_Plane010"
        castShadow
        receiveShadow
        geometry={nodes.Plane005_Plane010.geometry}
        material={materials["Material.001"]}
      />
      <mesh
        name="Plane006_Plane011"
        castShadow
        receiveShadow
        geometry={nodes.Plane006_Plane011.geometry}
        material={materials["Material.001"]}
      />
      <mesh
        name="Plane007_Plane002"
        castShadow
        receiveShadow
        geometry={nodes.Plane007_Plane002.geometry}
        material={materials["Material.001"]}
      />
      <mesh
        name="Malla005"
        castShadow
        receiveShadow
        geometry={nodes.Malla005.geometry}
        material={materials["klothh_XSIPOLYCLS.klothh_material"]}
      />
      <mesh
        name="Malla005_1"
        castShadow
        receiveShadow
        geometry={nodes.Malla005_1.geometry}
        material={materials["Default_XSIPOLYCLS.default_material"]}
      />
      <mesh
        name="Malla005_2"
        castShadow
        receiveShadow
        geometry={nodes.Malla005_2.geometry}
        material={materials["syhh_XSIPOLYCLS.syhh_material"]}
      />
      <mesh
        name="Malla005_3"
        castShadow
        receiveShadow
        geometry={nodes.Malla005_3.geometry}
        material={materials["logoo_XSIPOLYCLS.logoo_material"]}
      />
      <mesh
        name="Malla005_4"
        castShadow
        receiveShadow
        geometry={nodes.Malla005_4.geometry}
        material={
          materials["metalikkplastik_XSIPOLYCLS.metalikkplastik_material"]
        }
      />
      <mesh
        name="Malla005_5"
        castShadow
        receiveShadow
        geometry={nodes.Malla005_5.geometry}
        material={materials["yazilar_XSIPOLYCLS.yazilar_material"]}
      />
      <mesh
        name="Audifonnos_1"
        castShadow
        receiveShadow
        geometry={nodes.Audifonnos_1.geometry}
        material={materials.blinn1}
      />
      <mesh
        name="Audifonnos_2"
        castShadow
        receiveShadow
        geometry={nodes.Audifonnos_2.geometry}
        material={materials.blinn2}
      />
      <mesh
        name="Audifonnos_3"
        castShadow
        receiveShadow
        geometry={nodes.Audifonnos_3.geometry}
        material={materials.blinn3}
      />
      <mesh
        name="Audifonnos_4"
        castShadow
        receiveShadow
        geometry={nodes.Audifonnos_4.geometry}
        material={materials.kulaklik_pilastik1_file4}
      />
      <mesh
        name="Audifonnos_5"
        castShadow
        receiveShadow
        geometry={nodes.Audifonnos_5.geometry}
        material={materials.kulaklik_pilastik2}
      />
      <mesh
        name="Audifonnos_6"
        castShadow
        receiveShadow
        geometry={nodes.Audifonnos_6.geometry}
        material={materials.kulaklik_pilastik}
      />
      <mesh
        name="Audifonnos_7"
        castShadow
        receiveShadow
        geometry={nodes.Audifonnos_7.geometry}
        material={materials.blinn5}
      />
      <mesh
        name="Audifonnos_8"
        castShadow
        receiveShadow
        geometry={nodes.Audifonnos_8.geometry}
        material={materials.metal}
      />
      <mesh
        name="Audifonnos_9"
        castShadow
        receiveShadow
        geometry={nodes.Audifonnos_9.geometry}
        material={materials["kulaklik_pilastik1_file4.001"]}
      />
      <mesh
        name="Base"
        castShadow
        receiveShadow
        geometry={nodes.Base.geometry}
        material={materials["Material.005"]}
      />
      <mesh
        name="AV"
        castShadow
        receiveShadow
        geometry={nodes.AV.geometry}
        material={materials.wire_204204204}
      />
      <mesh
        name="AV002"
        castShadow
        receiveShadow
        geometry={nodes.AV002.geometry}
        material={materials.wire_204204204}
      />
      <mesh
        name="Body"
        castShadow
        receiveShadow
        geometry={nodes.Body.geometry}
        material={materials.wire_204204204}
      />
      <mesh
        name="HDMIPORT001"
        castShadow
        receiveShadow
        geometry={nodes.HDMIPORT001.geometry}
        material={materials.wire_204204204}
      />
      <mesh
        name="HDMIPORT002"
        castShadow
        receiveShadow
        geometry={nodes.HDMIPORT002.geometry}
        material={materials.wire_204204204}
      />
      <mesh
        name="Service"
        castShadow
        receiveShadow
        geometry={nodes.Service.geometry}
        material={materials.wire_204204204}
      />
      <mesh
        name="Base001"
        castShadow
        receiveShadow
        geometry={nodes.Base001.geometry}
        material={materials.wire_088144225}
      />
      <mesh
        name="Base002"
        castShadow
        receiveShadow
        geometry={nodes.Base002.geometry}
        material={materials.wire_088144225}
      />
      <mesh
        name="Mode"
        castShadow
        receiveShadow
        geometry={nodes.Mode.geometry}
        material={materials.wire_088144225}
      />
      <mesh
        name="Power"
        castShadow
        receiveShadow
        geometry={nodes.Power.geometry}
        material={materials.wire_088144225}
      />
      <mesh
        name="PowerIndicator"
        castShadow
        receiveShadow
        geometry={nodes.PowerIndicator.geometry}
        material={materials.wire_088144225}
      />
      <mesh
        name="Rectangle001"
        castShadow
        receiveShadow
        geometry={nodes.Rectangle001.geometry}
        material={materials.wire_088144225}
      />
      <mesh
        name="Rectangle002"
        castShadow
        receiveShadow
        geometry={nodes.Rectangle002.geometry}
        material={materials.wire_088144225}
      />
      <mesh
        name="VolumeDOWN"
        castShadow
        receiveShadow
        geometry={nodes.VolumeDOWN.geometry}
        material={materials.wire_088144225}
      />
      <mesh
        name="VolumeUp"
        castShadow
        receiveShadow
        geometry={nodes.VolumeUp.geometry}
        material={materials.wire_088144225}
      />
      <mesh
        name="WifiSignalIndicator"
        castShadow
        receiveShadow
        geometry={nodes.WifiSignalIndicator.geometry}
        material={materials.wire_088144225}
      />
      <mesh
        name="keyboard_us-compact-horizontalobj"
        castShadow
        receiveShadow
        geometry={nodes["keyboard_us-compact-horizontalobj"].geometry}
        material={materials["Default.002"]}
      />
      <mesh
        name="Screen"
        castShadow
        receiveShadow
        geometry={nodes.Screen.geometry}
        material={materials.Screen}
      />
      <mesh
        name="Imagen_Celular"
        castShadow
        receiveShadow
        geometry={nodes.Imagen_Celular.geometry}
        position={[0, 0.036, 0.049]}
        rotation={[-0.05, 0, 0.0002]}
      >
        <Html
          transform
          scale={0.02}
          rotation={[0, -1, -0.04]}
          position={[2.60478, 1.04821, -0.445702]}
          style={{
            height: "550px",
            width: "240px",
            color: "#000",
          }}
        >
          <MovilHtml
            positionPhone={positionPhone}
            cameraPositionInit={cameraPositionInit}
          />
        </Html>
      </mesh>
      <mesh
        name="TvDisplay"
        castShadow
        receiveShadow
        geometry={nodes.Display.geometry}
        material={materials["Material.011"]}
      >
        <Html
          scale={0.009}
          rotation={[0, -0.5, 0]}
          position={[-1.5, 1.71, -2.7]}
          transform
          occlude
        >
          <Image
            className="icon__point_red"
            src="/images/points/info.png"
            width={750}
            height={1000}
            alt={""}
          />
        </Html>
      </mesh>
      <mesh
        name="Cube001_Cube_1"
        castShadow
        receiveShadow
        geometry={nodes.Cube001_Cube_1.geometry}
        material={materials["Material.001"]}
      />
      <mesh
        name="Cube001_Cube_2"
        castShadow
        receiveShadow
        geometry={nodes.Cube001_Cube_2.geometry}
        material={materials["Material.004"]}
      />
      <mesh
        name="Cube_Cube001_1"
        castShadow
        receiveShadow
        geometry={nodes.Cube_Cube001_1.geometry}
        material={materials["Material.001"]}
      />
      <mesh
        name="Cube_Cube001_2"
        castShadow
        receiveShadow
        geometry={nodes.Cube_Cube001_2.geometry}
        material={materials["Material.015"]}
      />
      <mesh
        name="Cube_Cube001_3"
        castShadow
        receiveShadow
        geometry={nodes.Cube_Cube001_3.geometry}
        material={materials["Material.016"]}
      />
      <mesh
        name="Suelo"
        castShadow
        receiveShadow
        geometry={nodes.Suelo.geometry}
        material={materials.Suelo}
      />
      <mesh
        name="Pata_Izquierda_Escritorio"
        castShadow
        receiveShadow
        geometry={nodes.Pata_Izquierda_Escritorio.geometry}
        material={materials["paint RAL 7035"]}
      />
      <mesh
        name="Pata_Izquierda_Escritorio_1"
        castShadow
        receiveShadow
        geometry={nodes.Pata_Izquierda_Escritorio_1.geometry}
        material={materials["paint black"]}
      />
      <mesh
        name="Pata_Izquierda_Escritorio_2"
        castShadow
        receiveShadow
        geometry={nodes.Pata_Izquierda_Escritorio_2.geometry}
        material={materials.steel}
      />
      <mesh
        name="Pata_Izquierda_Escritorio_3"
        castShadow
        receiveShadow
        geometry={nodes.Pata_Izquierda_Escritorio_3.geometry}
        material={materials["plastic black"]}
      />
      <mesh
        name="Pata_Derecha_Escritorio"
        castShadow
        receiveShadow
        geometry={nodes.Pata_Derecha_Escritorio.geometry}
        material={materials["paint RAL 7035"]}
      />
      <mesh
        name="Pata_Derecha_Escritorio_1"
        castShadow
        receiveShadow
        geometry={nodes.Pata_Derecha_Escritorio_1.geometry}
        material={materials["paint black"]}
      />
      <mesh
        name="Pata_Derecha_Escritorio_2"
        castShadow
        receiveShadow
        geometry={nodes.Pata_Derecha_Escritorio_2.geometry}
        material={materials.steel}
      />
      <mesh
        name="Pata_Derecha_Escritorio_3"
        castShadow
        receiveShadow
        geometry={nodes.Pata_Derecha_Escritorio_3.geometry}
        material={materials["plastic black"]}
      />
      <mesh
        name="table_top"
        castShadow
        receiveShadow
        geometry={nodes.table_top.geometry}
        material={materials["paint RAL 7035"]}
      />
      <mesh
        name="Base_de_Escritorio"
        castShadow
        receiveShadow
        geometry={nodes.Base_de_Escritorio.geometry}
        material={materials["paint RAL 7035"]}
      />
      <mesh
        name="Base_de_Escritorio_1"
        castShadow
        receiveShadow
        geometry={nodes.Base_de_Escritorio_1.geometry}
        material={materials.steel}
      />
      <mesh
        name="Base_de_Escritorio_2"
        castShadow
        receiveShadow
        geometry={nodes.Base_de_Escritorio_2.geometry}
        material={materials["plastic black"]}
      />
      <mesh
        name="Ventana_1"
        castShadow
        receiveShadow
        geometry={nodes.Ventana_1.geometry}
        material={materials.Vidrios}
      />
      <mesh
        name="Ventana_2"
        castShadow
        receiveShadow
        geometry={nodes.Ventana_2.geometry}
        material={materials.glass_border1}
      />
      <mesh
        name="Ventana_3"
        castShadow
        receiveShadow
        geometry={nodes.Ventana_3.geometry}
        material={materials.handle}
      />
      <mesh
        name="Ventana_4"
        castShadow
        receiveShadow
        geometry={nodes.Ventana_4.geometry}
        material={materials.window1}
      />
      <mesh
        name="Ventana_5"
        castShadow
        receiveShadow
        geometry={nodes.Ventana_5.geometry}
        material={materials.window2}
      />
      <mesh
        name="Ventana_6"
        castShadow
        receiveShadow
        geometry={nodes.Ventana_6.geometry}
        material={materials.sill}
      />
      <mesh
        name="Mesh_Default_0"
        castShadow
        receiveShadow
        geometry={nodes.Mesh_Default_0.geometry}
        material={materials.clock}
      />
      <mesh
        name="Mesh_Default_0_1"
        castShadow
        receiveShadow
        geometry={nodes.Mesh_Default_0_1.geometry}
        material={materials["Prism Glass.001"]}
      />
      <mesh
        name="Pared_Derecha"
        castShadow
        receiveShadow
        geometry={nodes.Pared_Derecha.geometry}
        material={materials["Pared Derecha"]}
      />
      <mesh
        name="Pared_Principal"
        castShadow
        receiveShadow
        geometry={nodes.Pared_Principal.geometry}
        material={materials["Pared Principal"]}
      />
      <mesh
        name="Couch"
        castShadow
        receiveShadow
        geometry={nodes.Couch.geometry}
        material={materials.Chocofur_Fabric_Solid_20}
      />
    </group>
  );
}

useGLTF.preload("./models/Ofiice.glb");
