import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 py-3">
      <div className="max-w-3xl w-full bg-white border border-amber-200 rounded-lg shadow-xl p-8 md:p-12">
        {/* Elegant 404 header */}
        <div className="text-center mb-10">
          <h1 className="font-serif text-9xl font-light text-amber-800 tracking-widest">
            404
          </h1>
          <div className="h-px w-32 bg-gradient-to-r from-transparent via-amber-300 to-transparent mx-auto my-6"></div>
          <h2 className="font-serif text-2xl text-amber-900 mb-2">
            Page Not Found
          </h2>
          <p className="text-amber-700 font-light">
            The page you are looking for does not exist or has been moved.
          </p>
        </div>

        <div className="flex justify-center mb-10">
          <div className="w-12 h-12 border border-amber-200 rounded-full flex items-center justify-center">
            <div className="w-12 h-12 border border-amber-300 rounded-full flex items-center justify-center">
              <div className="w-8 h-8 bg-gradient-to-br from-amber-400 to-amber-300 rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Return options */}
        <div className="text-center">
          <p className="text-amber-700 mb-6">
            Please choose where you would like to go next
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/"
              className="px-8 py-3 bg-amber-800 text-amber-50 hover:bg-amber-900 transition-colors rounded-sm text-sm uppercase tracking-wider font-medium"
            >
              Return Home
            </Link>
            <Link
              to="/luxury collections"
              className="px-8 py-3 border border-amber-800 text-amber-800 hover:bg-amber-50 transition-colors rounded-sm text-sm uppercase tracking-wider font-medium"
            >
              Browse Collections
            </Link>
          </div>
        </div>
      </div>

      {/* Footer signature */}
      <div className="mt-10 text-amber-600 font-serif italic">
        Refined Luxury, Exceptional Experience
      </div>
    </div>
  );
};

export default NotFound;
