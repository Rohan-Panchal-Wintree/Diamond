import { Canvas } from "@react-three/fiber";
import React, { useMemo } from "react";
import Model from "./Model";
import {
  Environment,
  MeshTransmissionMaterial,
  OrbitControls,
} from "@react-three/drei";
import useDeviceType from "../../utils/useDeviceType";

const Scene = React.memo(() => {
  const deviceType = useDeviceType();

  const cameraProps = useMemo(() => ({ fov: 60, position: [0, 0, 460] }), []);

  return (
    <Canvas camera={cameraProps}>
      {/* Camera now at (0, 1, 3) */}
      <directionalLight intensity={3} position={[0, 3, 2]} />
      <Environment preset="city" />
      <Model />
      <OrbitControls enableZoom={false} />
      <MeshTransmissionMaterial />
    </Canvas>
  );
});

export default Scene;
