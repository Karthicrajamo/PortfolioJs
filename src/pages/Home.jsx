import { Suspense, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import Loader from "../components/Loader";
import Island from "../models/Island";
import Sky from "../models/sky";
import Bird from "../models/bird";
import Plane from "../models/plane";
import HomeInfo from "../components/HomeInfo";

export const Home = () => {
  const [isRotating, setIsRotating] = useState(false);
  const [currentStage, setCurrentStage] = useState(1);
  const [islandScale, setIslandScale] = useState([1, 1, 1]);
  const [islandPosition, setIslandPosition] = useState([0, -6.5, -43.4]);
  const [planeScale, setPlaneScale] = useState([3, 3, 3]);
  const [planePosition, setPlanePosition] = useState([0, -4, -4]);

  const adjustPlaneScreenSize = () => {
    if (window.innerWidth < 768) {
      setPlaneScale([1.5, 1.5, 1.5]);
      setPlanePosition([0, -1.5, 0]);
    } else {
      setPlaneScale([3, 3, 3]);
      setPlanePosition([0, -4, -4]);
    }
  };

  const adjustIslandForScreenSize = () => {
    if (window.innerWidth < 768) {
      setIslandScale([0.9, 0.9, 0.9]);
      setIslandPosition([0, -0.6, -43.4]);
    } else {
      setIslandScale([1, 1, 1]);
      setIslandPosition([0, -6.5, -43.4]);
    }
  };

  useEffect(() => {
    adjustPlaneScreenSize();
    adjustIslandForScreenSize();
    window.addEventListener('resize', adjustPlaneScreenSize);
    window.addEventListener('resize', adjustIslandForScreenSize);
    return () => {
      window.removeEventListener('resize', adjustPlaneScreenSize);
      window.removeEventListener('resize', adjustIslandForScreenSize);
    };
  }, []);

  return (
    <div className="w-full h-screen relative">
      <div className="absolute top-28 left-0 right-0 z-10 justify-center items-center flex">
        {currentStage && <HomeInfo currentStage={currentStage} />}
      </div>
      <Canvas
        className={`w-full h-screen bg-transparent ${isRotating ? "cursor-grabbing" : "cursor-grab"}`}
        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<Loader />}>
          <directionalLight position={[1, 1, 1]} intensity={2} />
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 5, 10]} intensity={2} />
          <spotLight
            position={[0, 50, 10]}
            angle={0.15}
            penumbra={1}
            intensity={2}
          />
          <hemisphereLight
            // skyColor="#b1e1ff"
            groundColor="#000000"
            intensity={1}
          />
          <Sky isRotating={isRotating} />
          <Island
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            position={islandPosition}
            scale={islandScale}
            setCurrentStage={setCurrentStage}
            rotation={[0.1, 4.7077, 0]}
          />
          <Bird />
          <Plane
            isRotating={isRotating}
            scale={planeScale}
            position={planePosition}
            rotation={[0, 20.1, 0]}
          />
        </Suspense>
      </Canvas>
    </div>
  );
};
