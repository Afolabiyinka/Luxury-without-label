import { ArrowRightIcon } from "@phosphor-icons/react";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
export default function CollectionCard({ collection }: { collection: any }) {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`max-w-sm rounded-sm shadow-xl relative transition-all hover:scale-110 duration-300 cursor-pointer flex flex-col 
      `}
    >
      <div className="h-96 overflow-hidden rounded-none">
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
              className="absolute top-40  right-32 md:right-36 rounded-full border p-2"
              initial={{ scaleX: 0.4 }}
              animate={{ scaleX: 1 }}
              exit={{ scale: 0.4 }}
              transition={{
                duration: 0.2,
              }}
            >
              <ArrowRightIcon
                color="white"
                className="h-16 w-16"
                weight="thin"
              />
            </motion.button>
          </AnimatePresence>
        )}
      </div>
      <div className="text-left p-2 py-4 backdrop-blur-2xl absolute bottom-0  w-full ">
        <h5 className="text-2xl font-bold tracking-widest font-[Lato] text-white">
          {collection.name}
        </h5>
      </div>
    </div>
  );
}
