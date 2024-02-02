import React from "react";
import { TypeAnimation } from "react-type-animation";

const Typography = () => {
  return (
    <TypeAnimation
      sequence={[
        "Fade.",
        1500,
        "Dynamic.",
        1500,
      ]}
      wrapper="span"
      speed={1}
      className="font-LeagueSpartan leading-relaxed sm:leading-normal text-[4.5rem] xl:text-[5rem] text-darkpastelblue"
      repeat={Infinity}
    />
  );
};

export default Typography;
