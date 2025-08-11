import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Contact = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;

    // Inputs order:
    // Signup: FullName (0), Email (1), Password (2)
    // Login: Email (0), Password (1)
    const fullName = !isLogin ? form.elements[0].value.trim() : "";
    const email = !isLogin ? form.elements[1].value.trim() : form.elements[0].value.trim();
    const password = !isLogin ? form.elements[2].value : form.elements[1].value;

    if (!email) {
      alert("Please enter your email");
      return;
    }
    if (!password) {
      alert("Please enter your password");
      return;
    }
    if (!isLogin && !fullName) {
      alert("Please enter your full name");
      return;
    }

    const formData = {
      fullName,
      email,
      password,
    };

    console.log("Form submitted with data:", formData);

    // TODO: Add your login/signup API call or logic here
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 to-purple-600 px-4">
        <div className="bg-white shadow-lg rounded-lg w-full max-w-md p-8">
          <h2 className="text-3xl font-bold text-center text-indigo-600 mb-6">
            {isLogin ? "Login to Your Account" : "Create an Account"}
          </h2>

          {/* Form */}
          <form onSubmit={handleSubmit}>
            {!isLogin && (
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-medium mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
            )}

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-medium mb-1">
                Email Address
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-medium mb-1">
                Password
              </label>
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition"
            >
              {isLogin ? "Login" : "Sign Up"}
            </button>
          </form>

          {/* Toggle Link */}
          <p className="text-center text-gray-600 mt-6">
            {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
            <button
              onClick={toggleForm}
              className="text-indigo-600 font-semibold hover:underline"
              type="button"
            >
              {isLogin ? "Sign Up" : "Login"}
            </button>
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
