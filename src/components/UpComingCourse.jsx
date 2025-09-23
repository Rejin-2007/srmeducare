import React from "react";

const UpComingCourse = () => {
  const courses = [
    {
      name: "English Grammar",
      img: "/english.jpg",
    },
    {
      name: "Hindi Grammar",
      img: "/hindi.jpg",
    },
    {
      name: "Other Courses",
      img: "/othercourses.jpg",
    },
  ];

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-[#19183B] text-center gap-4 mb-6 p-4 border-b-2 border-[#7B2425] ">
        UpComing Courses
      </h2>

      <div className="flex flex-col md:flex-row gap-4">
        {courses.map((course, index) => (
          <div
            key={index}
            className="relative flex-1 flex justify-center items-center cursor-pointer group"
          >
            {/* Course Image */}
            <img
              src={course.img}
              alt={course.name}
              className="h-auto w-auto max-w-full border-2 rounded border-[#7B2425]"
            />
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/40 rounded"></div>
            {/* Text overlay */}
            <div className="absolute flex items-center justify-center p-3 rounded bg-[#19183B]/70 text-[#E7E2Ef] border border-[#7B2425] text-center font-semibold text-lg group-hover:bg-[#19183B]/90 transition">
              {course.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpComingCourse;
