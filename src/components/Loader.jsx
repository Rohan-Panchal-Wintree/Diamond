import React from "react";

const Loader = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-white px-4">
      <div className="relative w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 mb-4">
        <div className="absolute inset-0 rounded-full border-[3px] border-gray-200"></div>
        <div className="absolute inset-0 rounded-full border-[3px] border-t-Charcoal-Gray animate-spin"></div>
      </div>
      <p className="text-gray-600 text-base sm:text-lg md:text-xl">
        Getting things ready...
      </p>
    </div>
  );
};

export default Loader;
