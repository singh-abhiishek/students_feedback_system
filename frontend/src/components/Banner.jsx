import React from "react";

const Banner = () => {
  return (
    <section className="bg-indigo-600 text-white py-12">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Have Feedback for a Course?
        </h2>
        <p className="text-lg text-indigo-100 mb-6">
          Share your ratings and comments to help improve the learning experience.
        </p>
        <a
          href="#feedback"
          className="bg-white text-indigo-600 px-6 py-3 rounded-full font-semibold shadow hover:bg-gray-100 transition"
        >
          Give Feedback
        </a>
      </div>
    </section>
  );
};

export default Banner;
