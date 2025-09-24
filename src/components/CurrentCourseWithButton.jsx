import React from "react";
import CurrentCourse from "./CurrentCourse";
import { Link } from "react-router-dom";

const CourseSection = () => {
  return (
    <div className="course-section">
      <CurrentCourse />
      
      <div className="flex justify-center mt-8">
        <Link
          to="/courses"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg text-center"
        >
          For More Courses
        </Link>
      </div>
    </div>
  );
};

export default CourseSection;