import { Canvas } from "@react-three/fiber";
import MyRotatingBox from "../components/Animations";

const MainNav = () => {
  return (
    <div className="h-[80px] w-[60%] flex place-items-center place-content-between">
      <div className="p-0  h-[80px]">
        <Canvas>
          {/* <ambientLight intensity={0.25} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, -5, -10]} /> */}
          {/* <directionalLight intensity={0.9} position={[10, 1.5, 5]} /> */}
          {/* <directionalLight
      color="yellow"
      position={[0, 0, 5]}
      intensity={0.5}
    /> */}
          {/* <group>
      <mesh>
        <sphereGeometry args={[3]} />
        <meshStandardMaterial color="red" />
      </mesh>
    </group> */}
          <MyRotatingBox />
        </Canvas>
      </div>
      <div className="flex p-1">
        <div className="p-2">ABOUT ME</div>
        <div className="p-2">PROJECTS</div>
        <div className="p-2">REFERENCES</div>
        <div className="p-2">CONTACT ME</div>
      </div>
    </div>
  );
};

export default MainNav;
