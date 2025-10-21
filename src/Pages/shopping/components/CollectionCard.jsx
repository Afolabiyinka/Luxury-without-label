import { ArrowRight } from "lucide-react";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
export default function CollectionCard({ collection }) {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`max-w-sm rounded-sm shadow-xl relative transition-all hover:scale-110 duration-300 cursor-pointer flex flex-col 
      `}
    >
      <div className="h-80 overflow-hidden rounded-none p-0.5 ">
        <img
          src={collection.imgSrc}
          alt={collection.name}
          className={`h-full w-full object-cover ${
            isHovered ? "bg-black/90 opacity-80" : ""
          }`}
        />
      </div>
      <div>
        {isHovered && (
          <AnimatePresence>
            <motion.button
              className="absolute top-[10rem]  right-[8rem] md:right-[9rem] rounded-full border p-2"
              initial={{ scaleX: 0.4 }}
              animate={{ scaleX: 1 }}
              exit={{ scale: 0.4 }}
              transition={{
                duration: 0.2,
              }}
            >
              <ArrowRight color="white" className="h-[4rem] w-[4rem]" />
            </motion.button>
          </AnimatePresence>
        )}
      </div>
      <div className="text-center py-6">
        <h5 className="text-xl font-bold  tracking-wide">{collection.name}</h5>
      </div>
    </div>
  );
}
