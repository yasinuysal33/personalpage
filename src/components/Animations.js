import {
  Decal,
  Environment,
  OrbitControls,
  useTexture,
} from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

export default function MyRotatingBox(props) {
  const myMesh = useRef();
  // const meshRef = useRef();
  const [
    jsicon,
    tsicon,
    reacticon,
    tailwindicon,
    htmlicon,
    cssicon,
    reactbootstrapicon,
    materialuiicon,
    nextjsicon,
    githubicon,
    threeicon,
    googleicon,
  ] = useTexture([
    "/img/js.svg",
    "/img/type-script.png",
    "/img/logo192.png",
    "/img/tailwind-css-icon.svg",
    "/img/html5.svg",
    "/img/css3.svg",
    "/img/reactbootstrap.svg",
    "/img/materialui.png",
    "/img/nextjs.svg",
    "/img/github.svg",
    "/img/three.png",
    "/img/google-cloud-platform.svg",
  ]);

  useFrame(({ clock }) => {
    const a = clock.getElapsedTime();

    myMesh.current.rotation.x = a / 3;
    myMesh.current.rotation.y = a / 3;
    myMesh.current.rotation.z = a / 6;
  });

  return (
    <>
      <ambientLight intensity={0.25} />
      {/* <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, -5, -10]} /> */}
      <group {...props}>
        <mesh
          ref={myMesh}
          scale={2.25}
          castShadow
          receiveShadow
          dispose={null}
          onClick={() => console.log("clicked")}
        >
          <dodecahedronGeometry args={[1.25]} />
          <meshStandardMaterial
            color="black"
            // emissive="#370037"
            // envMapIntensity={0.2}
            roughness={0}
            metalness={0.5}
          />
          <Decal
            /*debug*/ position={[0.5, 0.0, 0.9]}
            scale={0.7}
            rotation={[0, 0, 0]}
            map={jsicon}
            map-anisotropy={16}
          />
          <Decal
            /*debug*/ position={[-0.5, 0.0, 0.9]}
            scale={0.9}
            rotation={[0, 0, 0]}
            map={reacticon}
            map-anisotropy={16}
          />
          <Decal
            /*debug*/ position={[0, 0.85, 0.5]}
            scale={[0.8, 0.4, 0.8]}
            rotation={[0, 0, 0]}
            map={tsicon}
            map-anisotropy={16}
          />
          <Decal
            /*debug*/ position={[-0.88, 0.5, 0]}
            scale={[1.2, 0.5, 1]}
            rotation={[Math.PI / 2, Math.PI, Math.PI / 2]}
            map={htmlicon}
            map-anisotropy={16}
          />
          <Decal
            /*debug*/ position={[-0.88, -0.5, 0]}
            scale={[0.9, 0.5, 1]}
            rotation={[-Math.PI / 2, Math.PI, Math.PI / 2]}
            map={cssicon}
            map-anisotropy={16}
          />
          <Decal
            /*debug*/ position={[0.88, 0.5, 0]}
            scale={[1, 0.5, 1]}
            rotation={[Math.PI / 2, Math.PI, -Math.PI / 2]}
            map={nextjsicon}
            map-anisotropy={16}
          />
          <Decal
            /*debug*/ position={[0.88, -0.5, 0]}
            scale={[1, 0.5, 1]}
            rotation={[Math.PI / 2, Math.PI, -Math.PI / 2]}
            map={githubicon}
            map-anisotropy={16}
          />
          <Decal
            /*debug*/ position={[0, 0.85, -0.5]}
            scale={[1, 0.7, 1]}
            // rotation={[0, 0, 0]}
            map={tailwindicon}
            map-anisotropy={16}
          />
          <Decal
            /*debug*/ position={[0.5, 0.0, -0.9]}
            rotation={[0, Math.PI, 0]}
            map={materialuiicon}
            map-anisotropy={16}
          />
          <Decal
            /*debug*/ position={[-0.5, 0.0, -0.85]}
            scale={0.95}
            rotation={Math.PI}
            // rotation={[0, Math.PI / 2, Math.PI]}
            // rotation={[0, Math.PI / 2, Math.PI]}
            map={reactbootstrapicon}
            map-anisotropy={16}
          />
          <Decal
            /*debug*/ position={[-0.1, -1.2, 0.6]}
            // scale={1}
            // rotation={[0, 0, 0]}
            map={threeicon}
            map-anisotropy={16}
          />
          <Decal
            /*debug*/ position={[0, -1.0, -0.7]}
            scale={[1, 0.8, 1]}
            // rotation={[0, 0, 0]}
            map={googleicon}
            map-anisotropy={16}
          />
        </mesh>
      </group>
      <OrbitControls />
      <Environment files="./img/potsdamer_platz_1k.hdr" background={false} />
    </>
  );
}
