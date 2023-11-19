import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export const Navbar = () => {
  const [isHidden, setIsHidden] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setIsHidden(currentScrollPos > prevScrollPos && currentScrollPos > 0);
      setPrevScrollPos(currentScrollPos);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <nav
      className={`w-full h-20 flex flex-col justify-center items-center fixed z-40 duration-300 navbar ${
        isHidden ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <div className="2xl:w-[1380px] xl:w-10/12 w-11/12 flex justify-between items-center relative">
        <a href="#home" aria-label="Home" className="flex items-center">
          <img
            className="logo w-[3rem] h-[3rem] md:w-16 md:h-16 z-30"
            src="/logo.webp"
            alt="Fade Media Logo"
          />
          <span className="text-3xl absolute left-5 opacity-0 text-zinc-200 font-bold">
            Fade Media
          </span>
        </a>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          exit={{ opacity: 0 }}
        >
          <div className="grow basis-0 justify-end items-center flex">
            <a
              className="custom-button-colored w-28 sm:w-40 h-8 sm:h-10 mr-0 sm:mr-4 lg:mr-4 sm:mb-0"
              href="#contact"
            >
              Contact Us
            </a>
          </div>
        </motion.div>
      </div>
    </nav>
  );
};
