import React from "react";
import CollectionCard from "../../Components/Card";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer"; // Import the hook

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
  ];

  return (
    <div className="min-h-screen px-4 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
      {collections.map((collection) => (
        <CollectionWithAnimation
          collection={collection}
          key={collection.name}
        />
      ))}
    </div>
  );
};

const CollectionWithAnimation = ({ collection }) => {
  // Using the useInView hook to detect if the collection is in view
  const { ref, inView } = useInView({
    triggerOnce: true, // Animation will trigger only once when in view
    threshold: 0.3, // Triggers when 30% of the element is in view
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
