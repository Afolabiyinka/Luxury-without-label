import React from "react";
import CollectionCard from "../../Components/Card";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Collections = () => {
  const collections = [
    {
      name: "Luxury Watches",
      imgSrc:
        "https://images.pexels.com/photos/380782/pexels-photo-380782.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      name: "Chic Wardrobe",
      imgSrc:
        "https://images.pexels.com/photos/15893780/pexels-photo-15893780/free-photo-of-various-dresses-hanging-on-coathangers.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      name: "Sleek Steps",
      imgSrc:
        "https://images.pexels.com/photos/5264901/pexels-photo-5264901.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      name: "Fragrance Essence",
      imgSrc:
        "https://images.pexels.com/photos/15007551/pexels-photo-15007551/free-photo-of-bottles-of-perfumes-displayed-on-black-ba.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ];

  return (
    <div className="text-center pt-4 px-4 flex flex-col justify-center items-center">
      <h1 className="text-3xl sm:text-4xl md:text-3xl font-bold leading-tight bg-gradient-to-r from-black to-gray-700 text-transparent bg-clip-text mb-3">
        Luxury Collections
      </h1>
      <div className="min-h-screen w-full  px-4 py-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-center items-center">
        {collections.map((collection) => (
          <CollectionWithAnimation
            collection={collection}
            key={collection.name}
          />
        ))}
      </div>
    </div>
  );
};

const CollectionWithAnimation = ({ collection }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <motion.div
      ref={ref}
      className="w-full"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <CollectionCard collection={collection} />
    </motion.div>
  );
};

export default Collections;
