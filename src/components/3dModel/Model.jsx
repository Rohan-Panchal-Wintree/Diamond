import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import useDeviceType from "../../utils/useDeviceType";

export function Model(props) {
  const { nodes, materials } = useGLTF(
    "/assets/blue_diamond_-_free_giveaway.glb"
  );

  const meshRef = useRef();

  const deviceType = useDeviceType();

  let scale, rotationSpeed;

  switch (deviceType) {
    case "mobile":
      // For mobile: Make the model smaller and closer to the camera
      scale = [0.8, 0.8, 0.8]; // Smaller size for mobile
      rotationSpeed = 0.01; // Faster rotation speed for mobile
      break;
    case "tablet":
      // For tablet: Medium size and position
      scale = [0.8, 0.8, 0.8];
      rotationSpeed = 0.01;
      break;
    default:
      // For desktop: Default size and position
      scale = [1, 1, 1]; // Default size
      rotationSpeed = 0.01; // Default rotation speed
      break;
  }

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += rotationSpeed;
    }
  });

  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          ref={meshRef}
          castShadow
          receiveShadow
          geometry={nodes.defaultMaterial.geometry}
          material={materials.DiamondOutside}
          rotation={[Math.PI / 2, 0, 0]}
          scale={scale}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/assets/blue_diamond_-_free_giveaway.glb");
