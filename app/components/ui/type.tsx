"use client";

import { TypeAnimation } from "react-type-animation";

export default function Type() {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        "Frontend Developer",
        3000, // wait 1s before replacing "Mice" with "Hamsters"
        "React Developer",
        3000,
        "Javascript Developer",
        3000,
        "FullStack Developer",
        3000,
      ]}
      wrapper="span"
      speed={50}
      className="text-3xl font-medium font-secondary text-blue-500 tracking-wide"
      //   style={{ fontSize: "2em", display: "inline-block" }}
      repeat={Infinity}
    />
  );
}
