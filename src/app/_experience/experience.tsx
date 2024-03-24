"use client";

import { Environment, OrbitControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import Support from "./support";
import Bwing from "./b-wing";
import { useRef } from "react";
import { Group, Object3DEventMap } from "three";

function Experience() {
  const groupRef = useRef<Group<Object3DEventMap>>(null);
  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.001;
    }
  });
  return (
    <>
      <OrbitControls />
      <ambientLight intensity={0.5} />
      <hemisphereLight intensity={0.5} />
      <Environment preset="city" />
      <group ref={groupRef}>
        <Bwing />
        <Support />
      </group>
    </>
  );
}

export default Experience;
