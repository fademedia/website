import { motion } from "framer-motion";

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
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        transition={{ duration: 0.5, delay: 0.05 }}
      >
        <div className="text-5xl sm:text-6xl lg:text-7xl xl:text-7xl font-bold tracking-wide leading-normal h-[100vh] -translate-y-20 flex justify-center items-center px-8 sm:px-8 md:px-20 lg:px-4">
          <motion.span
            variants={textVariants}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="md:inline bg-gradient-to-r from-purple-600 to-purple-500 text-transparent bg-clip-text tracking-wide whitespace-nowrap"
          >
            Digital Visionaries
          </motion.span>
        </div>
      </motion.div>
    </section>
  );
};
