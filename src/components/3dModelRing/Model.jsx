import React, { useMemo, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

// Preload the model at the top level
useGLTF.preload("/assets/jewelery_-_ring-_diamonds.glb");

const Model = React.memo((props) => {
  const gltf = useGLTF("/assets/jewelery_-_ring-_diamonds.glb");

  const { nodes, materials } = useMemo(() => {
    return {
      nodes: gltf.nodes,
      materials: gltf.materials,
    };
  }, [gltf]);

  const groupRef = useRef();

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.5;
    }
  });

  // useFrame(() => {
  //   if (groupRef.current) {
  //     groupRef.current.rotation.y += 0.01;
  //   }
  // });

  return (
    <group ref={groupRef} {...props} dispose={null}>
      <group rotation={[-1.096, 0.084, 0.162]} scale={1.469}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Prongs_Prongs_0.geometry}
            material={materials.Prongs}
            scale={10}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.ThinRing_ThinRing_0.geometry}
            material={materials.ThinRing}
            scale={10}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.ThinRing1_ThinRing1_0.geometry}
            material={materials.ThinRing1}
            scale={10}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.ThinRing2_ThinRing2_0.geometry}
            material={materials.ThinRing2}
            scale={10}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.ThinRing3_ThinRing3_0.geometry}
            material={materials.ThinRing3}
            scale={10}
          />
        </group>
      </group>
    </group>
  );
});

export default Model;
