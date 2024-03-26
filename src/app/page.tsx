"use client";

import { Canvas } from "@react-three/fiber";
import Experience from "./_experience/experience";
import Image from "next/image";
import { useEffect, useState } from "react";

const positionAttributes = {
  tr: { fileName: "tr.png", tailwindClass: "top-0 right-0" },
  tl: { fileName: "tl.png", tailwindClass: "top-0 left-0" },
  br: { fileName: "br.png", tailwindClass: "bottom-0 right-0" },
  bl: { fileName: "bl.png", tailwindClass: "bottom-0 left-0" },
};

export default function Home() {
  const [isVisible, setIsVisible] = useState(true);
  const [position, setPosition] = useState("br");

  useEffect(() => {
    // Function to randomly set position and visibility
    const setRandomAttributes = () => {
      const availablePositions = Object.keys(positionAttributes);
      const randomPosition =
        availablePositions[
          Math.floor(Math.random() * availablePositions.length)
        ];
      setPosition(randomPosition);
      setIsVisible(Math.random() < 0.5);
    };

    // Function to handle animation and visibility
    const handleAnimation = () => {
      // Change position and visibility every 1 to 6 seconds
      const changeInterval = setInterval(() => {
        setRandomAttributes();
      }, Math.floor(Math.random() * 5000) + 1000); // Random interval between 1 to 6 seconds

      // Clear the intervals on component unmount
      return () => {
        clearInterval(changeInterval);
      };
    };

    handleAnimation();
  }, []);

  return (
    <main className="">
      <div className="absolute -z-10 top-0 left-0 w-full h-full overflow-hidden bg-gradient-to-tr from-[#15151a] to-slate-900">
        <Canvas>
          <Experience />
        </Canvas>
      </div>
      {isVisible && (
        <div
          className={`absolute ${
            positionAttributes[position as keyof typeof positionAttributes]
              .tailwindClass
          }`}
        >
          <Image
            src={`/${
              positionAttributes[position as keyof typeof positionAttributes]
                .fileName
            }`}
            width={300}
            height={300}
            alt="minime surprise"
            className="w-[150px] h-[150px] sm:w-[300px] sm:h-[300px]" // Add this line
          />
        </div>
      )}
    </main>
  );
}
