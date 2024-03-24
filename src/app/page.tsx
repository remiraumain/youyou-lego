"use client";

import { Canvas } from "@react-three/fiber";
import Experience from "./_experience/experience";

export default function Home() {
  return (
    <main className="">
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden bg-gradient-to-tr from-[#15151a] to-slate-900">
        <Canvas>
          <Experience />
        </Canvas>
      </div>
    </main>
  );
}
