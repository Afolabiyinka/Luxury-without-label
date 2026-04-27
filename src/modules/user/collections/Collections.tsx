import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import CollectionCard from "./components/CollectionCard";

type Collection = {
  name: string;
  imgSrc: string;
};

const collections: Collection[] = [
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

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};

const Collections = () => {
  return (
    <div className="px-4 md:px-8 py-12 max-w-7xl mx-auto">
      {/* Heading */}
      <div className="text-center mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
          Luxury Collections
        </h1>
        <p className="text-gray-500 mt-2 text-sm">
          Curated selections for a refined lifestyle
        </p>
      </div>

      {/* Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {collections.map((collection) => (
          <CollectionWithAnimation
            key={collection.name}
            collection={collection}
          />
        ))}
      </motion.div>
    </div>
  );
};

type CollectionWithAnimationProps = {
  collection: Collection;
};

const CollectionWithAnimation = ({
  collection,
}: CollectionWithAnimationProps) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <motion.div
      ref={ref}
      variants={itemVariants}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="w-full"
    >
      <CollectionCard collection={collection} />
    </motion.div>
  );
};

export default Collections;