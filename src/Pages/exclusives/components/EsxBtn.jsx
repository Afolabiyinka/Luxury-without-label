import { ShoppingBag } from "lucide-react";
import { motion } from "framer-motion";
import React from "react";

const Button = () => {
  return (
    <motion.button
      className="relative overflow-hidden rounded-full bg-black px-12 py-5 text-white font-light uppercase tracking-wider transition-all duration-300 focus:outline-none"
      variants={{
        initial: {},
        hover: {},
      }}
      initial="initial"
      whileHover="hover"
      whileTap={{ scale: 0.95 }}
    >
      <motion.span
        className="relative z-10 flex items-center gap-2"
        variants={{
          initial: { y: 0 },
          hover: { y: 120 },
        }}
        transition={{ duration: 0.45, ease: "easeInOut" }}
      >
        Buy Now
        <motion.div
          variants={{
            initial: { x: 0 },
            hover: { x: 10 },
          }}
          transition={{ duration: 0.45, ease: "easeInOut" }}
        >
          <ShoppingBag size={20} />
        </motion.div>
      </motion.span>

      <motion.span
        className="absolute inset-0 flex items-center justify-center gap-3 text-red-400 font-bold"
        variants={{
          initial: { y: "-120%" },
          hover: { y: 0 },
        }}
        transition={{ duration: 0.45, ease: "easeInOut" }}
      >
        Only 2 Left
        <motion.div
          variants={{
            initial: { x: -10 },
            hover: { x: 0 },
          }}
          transition={{ duration: 0.45, ease: "easeInOut" }}
        >
          <ShoppingBag size={20} strokeWidth={2.5} />
        </motion.div>
      </motion.span>
    </motion.button>
  );
};

export default Button;
