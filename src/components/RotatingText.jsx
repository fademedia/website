import React, { useEffect, useState } from "react";
import { motion, AnimatePresence, color } from "framer-motion";

const items = [
  {
    id: 1,
    content: "ABCD",
    color: "text-red-400",
  },
  {
    id: 2,
    content: "EFGH",
    color: "text-yellow-400",
  },
  {
    id: 3,
    content: "HIJK",
    color: "text-green-500",
  },
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
    <div style={{ position: "relative" }}>
      <AnimatePresence>
        <motion.div
          key={items[index].id}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{ ease: "easeInOut" }}
          style={{ position: "absolute" }}
          className={items[index].color}
        >
          {items[index].content}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default RotatingText;
