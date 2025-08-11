import React from "react";

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
          Empowering Students Through Feedback
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
          Submit ratings, share your thoughts, and explore analytics for every course.
        </p>
        <a
          href="#courses"
          className="bg-white text-indigo-600 px-6 py-3 rounded-full font-semibold shadow hover:bg-gray-100 transition"
        >
          Get Started
        </a>
      </div>
    </section>
  );
};

export default Hero;
