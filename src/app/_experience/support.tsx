"use client";

import { RoundedBox } from "@react-three/drei";

function Support() {
  return (
    <>
      <mesh castShadow receiveShadow>
        <RoundedBox
          args={[2.75, 0.25, 2.75]}
          radius={0.02}
          position={[0, -2.12, 0]}
        >
          <meshStandardMaterial color="#232B33" />
        </RoundedBox>
      </mesh>
      <mesh castShadow receiveShadow>
        <RoundedBox args={[3, 0.5, 3]} radius={0.02} position={[0, -2.3, 0]}>
          <meshStandardMaterial color="#2B3137" />
        </RoundedBox>
      </mesh>
    </>
  );
}

export default Support;
