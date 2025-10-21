import { motion } from "framer-motion";
import heroModel from "../../Assets/Images/heroModel.png";
import { Link } from "react-router-dom";
import CustomBotton from "../shopping/components/CutstomBtn";

const HomePage = () => {
  return (
    <section className="min-h-screen flex flex-col lg:flex-row items-center justify-center px-6 lg:px-24 py-10 lg:py-20 gap-12 lg:gap-20">
      {/* Text Content */}
      <div className="w-full lg:w-1/2  text-center flex flex-col  lg:text-left space-y-6">
        <motion.p
          className="text-xs sm:text-sm font-medium text-gray-800 uppercase tracking-[0.25em] mb-2"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          New Collection
        </motion.p>

        <motion.h2
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight 
                     bg-gradient-to-r from-gray-900 via-gray-700 to-gray-500 
                     text-transparent bg-clip-text"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Luxury Without <br /> Labels
        </motion.h2>

        <motion.p
          className="text-base sm:text-lg text-gray-600 leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.4 }}
        >
          Explore new-in products and discover future bestsellers made just for
          you.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.5 }}
          className="w-full flex  md:flex-row justify-center items-center md:justify-start"
        >
          <Link to="/store">
            <CustomBotton text={`Start Shopping`} />
          </Link>
        </motion.div>
      </div>

      {/* Hero Image */}
      <div className="w-full lg:w-1/2 flex items-center justify-center">
        <motion.img
          src={heroModel}
          alt="Hero Model"
          loading="lazy"
          className="w-full max-w-sm sm:max-w-md lg:max-w-lg object-contain 
                     rounded-full ring-4 ring-gray-100 shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        />
      </div>
    </section>
  );
};

export default HomePage;
