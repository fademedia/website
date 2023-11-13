import { useState } from "react";
import { motion } from "framer-motion";

import { InvitationModal } from "./InvitationModal";

export const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section
      className="w-screen flex flex-wrap justify-center items-center"
      id="home"
    >
      <div className="w-full xl:w-[800px] flex flex-col justify-center items-center pt-16 md:pt-16 lg:pt-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-customSecondary text-sm sm:text-base  mb-6 sm:mt-32 mt-16  font-bold">
            Welcome to the future of digital visionaries
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
        >
          <div className="text-5xl sm:text-6xl lg:text-7xl xl:text-7xl font-bold tracking-wide  text-zinc-900  px-8 sm:px-8 md:px-20 lg:px-4">
            <span className="md:inline">Redefining Digital Excellence</span>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="text-zinc-800 text-sm lg:text-base xl:text-lg sm:text-base mt-10 px-12 sm:px-48 ">
            Where Innovation Meets Digital Prowess in Marketing and Education
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <div className="flex flex-col gap-2 sm:flex-row mt-14 mb-24 sm:mb-40 justify-center">
            
          </div>
        </motion.div>
        <div className="relative w-screen flex justify-center "></div>
      </div>
      <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
      >
      <div>
        <img
          className="rounded-xl scale-75 shadow-dark"
          src="https://raw.githubusercontent.com/jenisnmm/images/main/F%20(V2)(BLACK)%20CREAM%20BG.svg"
          alt="hero-image"
        />
      </div>
      </motion.div>
      {isModalOpen && (
        <InvitationModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
      )}
    </section>
  );
};
