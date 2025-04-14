import React from "react";

const Loader = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-white">
      <div
        className="spinner-border animate-spin inline-block w-16 h-16 border-4 border-t-transparent border-Charcoal-Gray rounded-full"
        role="status"
      >
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};

export default Loader;
