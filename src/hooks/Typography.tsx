import React from "react";
import { TypeAnimation } from "react-type-animation";

const Typography = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        "Fade.",
        1500, // wait 1s before replacing "Mice" with "Hamsters"
        "Dynamic.",
        1500,
      ]}
      wrapper="span"
      speed={1}
      className="font-LeagueSpartan sm:text-[5rem] lg:text-[5rem] xl:text-[5rem] text-darkpastelblue"
      repeat={Infinity}
    />
  );
};

export default Typography