import React from "react";
import { Link } from "react-router-dom";

const FallBackPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-indigo-500 to-purple-600 px-4">
      <h1 className="text-6xl font-extrabold text-white mb-6">404</h1>
      <p className="text-white text-2xl mb-6">Oops! Page Not Found.</p>
      <Link
        to="/"
        className="text-indigo-200 hover:text-white underline text-lg font-semibold"
      >
        Go back to Home
      </Link>
    </div>
  );
};

export default FallBackPage;
