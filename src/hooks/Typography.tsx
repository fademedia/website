import React, { useEffect, useState } from "react";
import { motion, AnimatePresence, color } from "framer-motion";

const items = [
  {
    id: 1,
    content: "Fade.",
    color: "text-darkpastelblue",
  },
  {
    id: 2,
    content: "Dynamic.",
    color: "text-darkpastelblue",
  }
];

const RotatingText = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((state) => {
        if (state >= items.length - 1) return 0;
        return state + 1;
      });
    }, 2000);
    return () => clearInterval(id);
  }, []);

  return (
    <span
      style={{ position: "relative" }}
      className="block sm:inline -translate-x-[60%] text-6xl sm:text-6xl lg:text-7xl xl:text-7xl"
    >
      <AnimatePresence>
        <motion.span
          key={items[index].id}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{ ease: "easeInOut" }}
          className={`${items[index].color} absolute`}
        >
          {items[index].content}
        </motion.span>
      </AnimatePresence>
    </span>
  );
};

export default RotatingText;
