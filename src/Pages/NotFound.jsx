import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Frown } from "lucide-react";

const NotFound = () => {
  return (
    <motion.div
      className="flex flex-col items-center justify-center min-h-screen px-4 py-3"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="max-w-3xl w-full bg-white rounded-lg shadow-xl p-8 md:p-12">
        <div className="text-center mb-10">
          <span className="flex justify-center items-center gap-3">
            <h1 className="font-serif text-9xl font-ligh tracking-widest ">
              404
            </h1>
          </span>
          <div className="h-px w-32 bg-black mx-auto my-6"></div>
          <h2 className="font-serif text-2xl mb-2">Page Not Found</h2>
          <p className="font-light">
            The page you are looking for does not exist or has been moved.
          </p>
        </div>
        <div className="text-center">
          <p className=" mb-6">Please choose where you would like to go next</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/"
              className="px-8 py-3 bg-gray-800 text-white transition-colors rounded-sm text-sm uppercase tracking-wider font-medium"
            >
              Return Home
            </Link>
            <Link
              to="/store"
              className="px-8 py-3 border border-gray-400  hover:bg-gray-200 transition-colors rounded-sm text-sm uppercase tracking-wider font-medium"
            >
              Browse Collections
            </Link>
          </div>
        </div>
      </div>
      <div className="mt-10 text-amber-600 font-serif italic">
        Refined Luxury, Exceptional Experience
      </div>
    </motion.div>
  );
};

export default NotFound;
