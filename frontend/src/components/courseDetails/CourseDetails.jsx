import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const courses = [
  {
    id: 1,
    name: "React Basics",
    description: "Learn the fundamentals of React.",
    image: "https://source.unsplash.com/600x300/?react,code",
  },
  {
    id: 2,
    name: "Advanced Java",
    description: "Master Java programming concepts.",
    image: "https://source.unsplash.com/600x300/?java,code",
  },
  {
    id: 3,
    name: "PostgreSQL Essentials",
    description: "Understand database design and queries.",
    image: "https://source.unsplash.com/600x300/?database,code",
  },
  {
    id: 4,
    name: "Machine Learning 101",
    description: "Introduction to ML concepts.",
    image: "https://source.unsplash.com/600x300/?machinelearning,ai",
  },
  {
    id: 5,
    name: "Spring Boot for Beginners",
    description: "Build REST APIs with Spring Boot.",
    image: "https://source.unsplash.com/600x300/?springboot,code",
  },
  {
    id: 6,
    name: "Node.js Crash Course",
    description: "Server-side JavaScript development.",
    image: "https://source.unsplash.com/600x300/?nodejs,code",
  },
];

const initialReviews = [
  { courseId: 1, rating: 5, comment: "Awesome React course!" },
  { courseId: 1, rating: 4, comment: "Very helpful." },
  { courseId: 1, rating: 4, comment: "Good intro." },
  { courseId: 1, rating: 3, comment: "Okay content." },
  { courseId: 2, rating: 5, comment: "Great Java explanations." },
  { courseId: 2, rating: 4, comment: "Helpful." },
  { courseId: 3, rating: 5, comment: "Clear and concise." },
  { courseId: 3, rating: 5, comment: "Loved it!" },
  { courseId: 4, rating: 4, comment: "Good start to ML." },
  { courseId: 4, rating: 3, comment: "Needs more examples." },
  { courseId: 5, rating: 5, comment: "Excellent for beginners." },
  { courseId: 6, rating: 4, comment: "Good crash course." },
];

const StarIcon = ({ filled, onClick, className }) => (
  <svg
    onClick={onClick}
    className={`w-6 h-6 cursor-pointer ${
      filled ? "text-yellow-400" : "text-gray-300"
    } ${className || ""}`}
    fill="currentColor"
    viewBox="0 0 20 20"
  >
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.974a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.388 2.462a1 1 0 00-.364 1.118l1.286 3.974c.3.921-.755 1.688-1.54 1.118l-3.388-2.462a1 1 0 00-1.175 0l-3.388 2.462c-.784.57-1.838-.197-1.539-1.118l1.286-3.974a1 1 0 00-.364-1.118L2.045 9.4c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.974z" />
  </svg>
);

const CourseDetails = () => {
  const { courseId } = useParams();

  const course = courses.find((c) => c.id === Number(courseId));

  const [reviews, setReviews] = useState(
    initialReviews.filter((r) => r.courseId === Number(courseId))
  );

  const [userRating, setUserRating] = useState(0);
  const [userComment, setUserComment] = useState("");

  if (!course)
    return (
      <div className="text-center mt-20 text-red-500 font-semibold">
        Course not found.
      </div>
    );

  const avgRating =
    reviews.reduce((sum, r) => sum + r.rating, 0) / (reviews.length || 1);

  const ratingDistribution = [5, 4, 3, 2, 1].map((star) => ({
    star,
    count: reviews.filter((r) => r.rating === star).length,
  }));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userRating === 0) {
      alert("Please select a rating");
      return;
    }
    if (userComment.trim() === "") {
      alert("Please enter a comment");
      return;
    }
    const newReview = {
      courseId: Number(courseId),
      rating: userRating,
      comment: userComment.trim(),
    };
    setReviews([newReview, ...reviews]);
    setUserRating(0);
    setUserComment("");
  };

  // Pie chart data
  const pieData = {
    labels: ratingDistribution.map(({ star }) => `${star} Star${star > 1 ? "s" : ""}`),
    datasets: [
      {
        label: "Rating Distribution",
        data: ratingDistribution.map(({ count }) => count),
        backgroundColor: [
          "#FBBF24", // Yellow-400
          "#F59E0B", // Yellow-500
          "#D97706", // Yellow-600
          "#B45309", // Yellow-700
          "#92400E", // Yellow-800
        ],
        borderWidth: 1,
        borderColor: "#fff",
      },
    ],
  };

  return (
    <div className="h-screen bg-gradient-to-r from-indigo-500 to-purple-600 py-10 px-4">
      <div className="max-w-7xl mx-auto h-[90vh] overflow-y-auto p-8 bg-indigo-50 rounded-xl shadow-lg font-sans grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left side: course info + submit form */}
        <div>
          {/* Course Image */}
          <div className="mb-6 rounded-xl overflow-hidden shadow-md border border-indigo-200">
            <img
              src={course.image}
              alt={course.name}
              className="w-full object-cover h-48 md:h-64"
            />
          </div>

          <h1 className="text-4xl font-extrabold mb-4 text-indigo-600 tracking-tight">
            {course.name}
          </h1>
          <p className="text-indigo-700 mb-10 text-lg">{course.description}</p>

          {/* User rating/comment form */}
          <div className="mt-10">
            <h2 className="text-2xl font-semibold mb-5 text-indigo-600 border-b border-indigo-300 pb-2">
              Add Your Review
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block mb-2 font-medium text-indigo-600 text-lg">
                  Your Rating
                </label>
                <div className="flex space-x-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <StarIcon
                      key={star}
                      filled={star <= userRating}
                      onClick={() => setUserRating(star)}
                      className="hover:text-indigo-500 transition"
                    />
                  ))}
                </div>
              </div>

              <div>
                <label
                  htmlFor="comment"
                  className="block mb-2 font-medium text-indigo-600 text-lg"
                >
                  Your Comment
                </label>
                <textarea
                  id="comment"
                  rows={5}
                  value={userComment}
                  onChange={(e) => setUserComment(e.target.value)}
                  className="w-full p-3 border border-indigo-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 text-indigo-900"
                  placeholder="Write your feedback here..."
                  required
                />
              </div>

              <button
                type="submit"
                className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition disabled:bg-indigo-300 disabled:cursor-not-allowed font-semibold text-lg"
                disabled={userRating === 0}
              >
                Submit Review
              </button>
            </form>
          </div>
        </div>

        {/* Right side: aggregate rating, comments, pie chart */}
        <div>
          {/* Aggregate rating */}
          <div>
            <h2 className="text-2xl font-semibold mb-3 text-indigo-600 border-b border-indigo-300 pb-2">
              Average Rating
            </h2>
            <div className="flex items-center space-x-3 mb-6">
              {[1, 2, 3, 4, 5].map((i) => (
                <StarIcon key={i} filled={i <= Math.round(avgRating)} />
              ))}
              <span className="ml-3 text-indigo-700 font-semibold text-xl">
                {avgRating.toFixed(1)} / 5
              </span>
            </div>
            <p className="text-indigo-600 mb-8 font-medium">
              {reviews.length} review{reviews.length !== 1 ? "s" : ""}
            </p>

            {/* Pie Chart */}
            <div className="mb-10 max-w-sm mx-auto">
              <Pie data={pieData} />
            </div>

            {/* Comments Section */}
            <div>
              <h2 className="text-2xl font-semibold mb-5 text-indigo-600 border-b border-indigo-300 pb-2">
                Comments
              </h2>
              {reviews.length === 0 ? (
                <p className="text-indigo-600 italic">No comments yet.</p>
              ) : (
                <ul className="max-h-60 overflow-y-auto border border-indigo-300 rounded-lg p-5 space-y-5 bg-indigo-50 shadow-inner">
                  {reviews.map((r, idx) => (
                    <li
                      key={idx}
                      className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition"
                    >
                      <div className="flex items-center mb-2">
                        {[1, 2, 3, 4, 5].map((i) => (
                          <StarIcon key={i} filled={i <= r.rating} />
                        ))}
                      </div>
                      <p className="text-indigo-900 text-base">{r.comment}</p>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
      <Link
        to="/"
        className="inline-block mt-10 text-indigo-600 hover:text-indigo-800 font-semibold transition text-lg"
      >
        ← Back to Course List
      </Link>
    </div>
  );
};

export default CourseDetails;
