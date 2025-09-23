import React, { useState } from "react";

const CoursesPscDetail = () => {
  const [showOffers, setShowOffers] = useState(false);

  const courses = [
    {
      title: "Course 1",
      monthlyFee: 500,
      registrationFee: 1000,
      duration: "1 year",
      service: "360 × 1 class + daily test",
    },
    {
      title: "Course 2",
      monthlyFee: 1000,
      registrationFee: 2000,
      duration: "1 year",
      service: "360 × 2 class",
    },
    {
      title: "Course 3",
      totalFee: 6000,
      duration: "6 months",
      service: "180 × 2 class + daily test + 3 books",
    },
    {
      title: "Course 4",
      totalFee: 10000,
      duration: "1 year",
      service: "360 × 2 class + daily test + 5 books",
    },
  ];

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-[#240653] mb-6 border-b-2 border-[#7B2425] pb-2">
        PSC Courses
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {courses.map((course, index) => (
          <div
            key={index}
            className="border-2 border-[#7B2425] rounded p-4 bg-[#19183B] text-[#E7E2Ef] shadow hover:shadow-lg transition"
          >
            <h3 className="font-semibold text-lg mb-2">{course.title}</h3>
            <ul className="space-y-1">
              {course.monthlyFee && (
                <li>
                  <span className="font-semibold">Monthly Fee:</span> ₹{course.monthlyFee}
                </li>
              )}
              {course.registrationFee && (
                <li>
                  <span className="font-semibold">Registration Fee:</span> ₹{course.registrationFee}
                </li>
              )}
              {course.totalFee && (
                <li>
                  <span className="font-semibold">Total Fee:</span> ₹{course.totalFee}
                </li>
              )}
              <li>
                <span className="font-semibold">Duration:</span> {course.duration}
              </li>
              <li>
                <span className="font-semibold">Service:</span> {course.service}
              </li>
            </ul>
          </div>
        ))}
      </div>

      {/* Button */}
      <div className="mt-6 text-center">
        <button
          onClick={() => setShowOffers(true)}
          className="bg-[#7B2425] hover:bg-[#E7E2Ef] hover:text-[#19183B] transition-colors duration-200 p-3 rounded font-semibold"
        >
          Click For More Offers
        </button>
      </div>

      {/* Modal */}
      {showOffers && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
          <div className="bg-[#19183B] text-[#E7E2Ef] p-6 rounded-lg max-w-3xl mx-4 overflow-y-auto max-h-[80vh] relative">
            <button
              onClick={() => setShowOffers(false)}
              className="absolute top-2 right-2 text-[#E7E2Ef] hover:text-[#7B2425] font-bold"
            >
              X
            </button>
            <h2 className="text-xl font-bold mb-4 border-b-2 border-[#7B2425] pb-2">
              Special Offers
            </h2>

            <div className="space-y-4">
              <h3 className="font-semibold text-lg">Offer for ₹10,000 Course</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Each student gets a personal mentor for every subject.</li>
                <li>
                  Classes can be scheduled according to the student’s preferred time (mentor will be available only for that student during that time).
                </li>
                <li>
                  All syllabus for general exams up to December 2026 will be taught by August 15th of next year.
                </li>
                <li>
                  Additionally, 4 books for preparatory exams for +2 degree level, all PSC question papers from 2021 to 2024 with OMR sheets for each 100-mark question paper, and a detailed answer explanation will be provided — a total of 5 free books.
                </li>
                <li>Payment of ₹10,000 can be completed over 4 months.</li>
              </ul>

              <h3 className="font-semibold text-lg mt-4">Offer for ₹6,000 Course</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>
                  Payment can be made in two installments of ₹3,000 over 2 months.
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CoursesPscDetail;
