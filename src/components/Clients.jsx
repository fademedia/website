// Clients.js
import React from "react";
import { motion } from "framer-motion";

export const Clients = () => {
  const logos = [
    <img
      src="/clients/amaauto.png"
      alt="AMA Auto"
      style={{ width: "80%", maxWidth: "150px" }}
    />,
    <img
      src="/clients/cyborgfitnessclub.png"
      alt="Cyborg Fitness Club"
      style={{ width: "80%", maxWidth: "150px" }}
    />,
    <img
      src="/clients/hungrywok.png"
      alt="Hungry Wok"
      style={{ width: "80%", maxWidth: "150px" }}
    />,
    <img
      src="/clients/mas.png"
      alt="Mas"
      style={{ width: "80%", maxWidth: "150px" }}
    />,
    <img
      src="/clients/polyfans.png"
      alt="Poly fans"
      style={{ width: "80%", maxWidth: "150px" }}
    />,
    <img
      src="/clients/s2fimexllp.png"
      alt="S2FIXMEX LLP"
      style={{ width: "80%", maxWidth: "150px" }}
    />,
    <img
      src="/clients/tylers.png"
      alt="Tyler's"
      style={{ width: "80%", maxWidth: "150px" }}
    />,
  ];

  const marqueeVariants = {
    initial: {
      x: "100%", // Initial position off-screen to the right
    },
    animate: {
      x: "-100%", // Move to the left
      transition: {
        x: {
          repeat: Infinity, // Repeat the animation infinitely
          duration: 20, // Duration of one loop
          ease: "linear", // Linear easing for a constant speed
        },
      },
    },
  };

  return (
    <div className="marquee-section" style={{ overflow: "hidden" }}>
      <div className="custom-block-big-title text-center mb-6 mt-48">
        Our clients, not just customers
      </div>
      <div className="custom-block-title text-center mb-16 px-8 sm:px-24 md:px-48">
        People work with us, not just for us.
      </div>
      <div>
        <motion.div
          className="marquee-container inline-block my-36"
          variants={marqueeVariants}
          initial="initial"
          animate="animate"
          style={{ display: "flex", gap: "1rem" }} // Set the gap between logos
        >
          {logos.map((logo, index) => (
            <motion.div
              key={index}
              className="logo-container flex hover:filter-none filter justify-center"
            >
              {logo}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};
