import { motion } from "framer-motion";
import { Overlay } from "./Overlay";

export const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  const textVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <section
      className="w-screen flex justify-center items-center mb-4"
      id="home"
    >
      <Overlay />
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        transition={{ duration: 0.5, delay: 0.05 }}
      >
        
        <div className="text-5xl sm:text-6xl lg:text-7xl xl:text-7xl font-bold tracking-wide leading-relaxed h-screen -translate-y-5 flex justify-center items-center">
          <motion.span
            variants={textVariants}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="md:inline bg-gradient-to-t from-purple-200 via-purple-400 to-purple-800 text-transparent bg-clip-text tracking-wide sm:leading-relaxed text-center"
          >
            Digital Visionaries.
          </motion.span>
        </div>
      </motion.div>
    </section>
  );
};
