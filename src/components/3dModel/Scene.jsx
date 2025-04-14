import { Canvas } from "@react-three/fiber";
import React from "react";
import { Model } from "./Model";
import {
  Environment,
  MeshTransmissionMaterial,
  OrbitControls,
  PerspectiveCamera,
} from "@react-three/drei";
import useDeviceType from "../../utils/useDeviceType";

const Scene = () => {
  const deviceType = useDeviceType();

  return (
    <Canvas>
      <PerspectiveCamera
        makeDefault
        position={[0, 0, 6.5]}
        fov={deviceType === "tablet" ? 16.5 : deviceType === "mobile" ? 17 : 23}
      />
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
