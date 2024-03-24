import { useGLTF } from "@react-three/drei";

function Bwing() {
  const { scene } = useGLTF("/b-wing.glb");
  scene.scale.set(10, 10, 10);
  scene.position.set(0, -2, 0);
  scene.rotation.y = (Math.PI / 2) * 3.5;
  return <primitive object={scene} />;
}

export default Bwing;
