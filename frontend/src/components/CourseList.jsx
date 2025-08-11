import React from "react";

const CourseList = () => {
  // Static Data (You can replace with API data later)
  const courses = [
    { id: 1, name: "React Basics", description: "Learn the fundamentals of React.", rating: 4.5 },
    { id: 2, name: "Advanced Java", description: "Master Java programming concepts.", rating: 4.8 },
    { id: 3, name: "PostgreSQL Essentials", description: "Understand database design and queries.", rating: 4.6 },
    { id: 4, name: "Machine Learning 101", description: "Introduction to ML concepts.", rating: 4.7 },
    { id: 5, name: "Spring Boot for Beginners", description: "Build REST APIs with Spring Boot.", rating: 4.4 },
    { id: 6, name: "Node.js Crash Course", description: "Server-side JavaScript development.", rating: 4.3 }
  ];

  return (
    <section id="courses" className="py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Available Courses</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-white shadow-md rounded-lg p-5 hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold mb-2">{course.name}</h3>
              <p className="text-gray-600 mb-4">{course.description}</p>
              <p className="text-yellow-500 font-bold mb-4">
                ⭐ {course.rating.toFixed(1)}
              </p>
              <button className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition">
                See More
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseList;
