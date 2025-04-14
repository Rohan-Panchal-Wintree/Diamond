import { Canvas } from "@react-three/fiber";
import React from "react";
import { Model } from "./Model";
import {
  Environment,
  MeshTransmissionMaterial,
  OrbitControls,
} from "@react-three/drei";
import useDeviceType from "../../utils/useDeviceType";

const Scene = () => {
  const deviceType = useDeviceType();

  return (
    <Canvas camera={{ fov: 60, position: [0, 0, 460] }}>
      {/* Camera now at (0, 1, 3) */}
      <directionalLight intensity={3} position={[0, 3, 2]} />
      <Environment preset="city" />
      <Model />
      <OrbitControls enableZoom={false} />
      <MeshTransmissionMaterial />
    </Canvas>
  );
};

export default Scene;
