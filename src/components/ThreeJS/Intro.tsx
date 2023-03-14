import { Center, Cloud, Html, Text, Text3D } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

const Intro = ({ setReady, groupIntro, setLuzpri, setLuzSec, setLuzTer }) => {
  const movimiento: any = useRef();
  // useFrame((state, delta) => {
  //   const t = state.clock.getElapsedTime();
  //   groupIntro.current.rotation.x = -Math.PI / 1.75 + Math.cos(t / 4) / 8;
  //   groupIntro.current.rotation.y = Math.sin(t / 4) / 8;
  //   groupIntro.current.rotation.z = (1 + Math.sin(t / 1.5)) / 20;
  //   groupIntro.current.position.y = (1 + Math.sin(t / 1.5)) / 10;
  // });

  const moveIntro = () => {
    movimiento.current.position.y = 30;
    setReady(true);
    setLuzpri(true);
    setLuzSec(true);
    setLuzTer(true);
  };
  return (
    <group ref={movimiento}>
      <Center
        ref={groupIntro}
        rotation={[0, -0.87, -0.0105]}
        position={[-2, 1, 2.8]}
      >
        <Text
          position={[0, 0.7, 0]}
          color="#fff"
          font="/assets/fonts/CascadiaCode.ttf"
          fontSize={0.3}
        >
          Bienvendido a
        </Text>
        <Text
          position={[0, 0, 0]}
          strokeOpacity={100}
          visible
          color="#fff"
          font="/assets/fonts/CascadiaCode.ttf"
          fontSize={1}
        >
          KEVNNARD
        </Text>
        <Text
          position={[0, -3, 0]}
          strokeOpacity={100}
          visible
          color="#fff"
          font="/assets/fonts/CascadiaCode.ttf"
          fontSize={0.3}
          onClick={moveIntro}
        >
          Comenzar!
        </Text>
      </Center>
      <Cloud
        speed={1}
        position={[0, 2, -3]}
        color={"#a69"}
        segments={45}
        opacity={0.6}
      />
    </group>
  );
};

export default Intro;
