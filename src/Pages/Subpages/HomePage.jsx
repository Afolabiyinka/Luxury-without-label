import React from "react";
import { motion } from "framer-motion";
import heroModel from "../../Assets/Images/heroModel.png";
import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center  px-6 md:px-16 py-10 gap-10 md:gap-5">
      <div className="w-full md:w-1/2 text-center md:text-left">
        <motion.p
          className="text-sm text-black uppercase tracking-widest mb-2"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          NEW COLLECTION
        </motion.p>

        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight bg-gradient-to-r from-black to-gray-700 text-transparent bg-clip-text"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Luxury Without
          <br />
          Labels
        </motion.h2>

        <motion.p
          className="mt-4 text-base sm:text-lg text-gray-600"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.4 }}
        >
          Explore new-in products and future bestsellers..
        </motion.p>

        <motion.div
          className="mt-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.5 }}
        >
          <Link to="/store">
            <button className="text-white bg-black/90 px-11 py-2.5 hover:bg-gray-800 transition-all duration-300 ease-in-out">
              View Products
            </button>
          </Link>
        </motion.div>
      </div>

      <div className="w-full md:w-1/2 flex items-center justify-center">
        <motion.img
          src={heroModel}
          alt="Hero Model"
          className="w-full h-full max-w-md md:max-w-lg object-contain ring-4 ring-white shadow-lg p-2 rounded-full"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        />
      </div>
    </div>
  );
};

export default HomePage;
