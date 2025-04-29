import React from "react";
import { useRouteError } from "react-router-dom";
import UnderlineButton from "./UnderlineButton";
import { MdOutlineErrorOutline } from "react-icons/md";

const ErrorBoundary = () => {
  const error = useRouteError();

  return (
    <div className="h-screen flex justify-center items-center px-4">
      <div className="bg-white p-8 rounded-lg flex flex-col justify-center items-center ">
        <MdOutlineErrorOutline className="text-6xl mb-4 text-Charcoal-Gray" />
        <h2 className="text-3xl font-semibold text-Charcoal-Gray  mb-4">
          Oops! Something went wrong.
        </h2>
        <p className="text-gray-500 text-lg">
          Try reloading the page or come back later.
        </p>
        <div className="mt-4">
          <UnderlineButton title="go to home page" />
        </div>
      </div>
    </div>
  );
};

export default ErrorBoundary;
