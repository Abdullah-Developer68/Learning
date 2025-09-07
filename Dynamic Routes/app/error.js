"use client";
import { useEffect } from "react";

const Error = ({ error, reset }) => {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error("Error occurred:", error);
  }, [error]);

  return (
    <>
      <div> Something went wrong!</div>
      <button
        onClick={() => reset()}
        className="text-blue-500 hover:underline mt-4 inline-block"
      >
        Try Again
      </button>
    </>
  );
};

export default Error;
