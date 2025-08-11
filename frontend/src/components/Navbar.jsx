import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <span className="text-2xl font-bold text-indigo-600">
            CourseFeedback
          </span>
          <div className="hidden md:flex space-x-6">
            <a href="#" className="text-gray-700 hover:text-indigo-600">Home</a>
            <a href="#" className="text-gray-700 hover:text-indigo-600">Courses</a>
            <a href="#" className="text-gray-700 hover:text-indigo-600">Analytics</a>
            <a href="#" className="text-gray-700 hover:text-indigo-600">Contact</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
