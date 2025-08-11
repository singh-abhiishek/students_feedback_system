import React from "react";

const Footer = () => {
  return (
    <div className="bg-gray-800 text-gray-300 py-6 mt-12">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p>&copy; {new Date().getFullYear()} CourseFeedback. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
