import React from "react";
import { FaStar } from "react-icons/fa";

const TestimonialsSection = () => {
  // Separate data for easy customization
  const sectionData = {
    title: "OUR STUDENT'S SAY",
    description: "Students appreciate the one-on-one attention and flexible online classes. Many say it boosted their confidence and exam success",
    testimonials: [
      {
        id: 1,
        rating: 5, // Number of stars (1-5)
        text: "Joining SRM has been one of the best decisions I've made for my PSC exam preparation. The classes are clear and easy to understand, and the teachers are excellent at explaining complex topics in a simple way. I've been able to study topics I previously avoided, and the daily tests and motivation from the admin and HOD are incredibly helpful. This course is definitely helping me get closer to my dream of a government job.",
        author: "Arsha Mudakkal"
      },
      {
        id: 2,
        rating: 5, // Number of stars (1-5)
        text: "Joining SRM has been one of the best decisions I've made for my PSC exam preparation. The classes are clear and easy to understand, and the teachers are excellent at explaining complex topics in a simple way. I've been able to study topics I previously avoided, and the daily tests and motivation from the admin and HOD are incredibly helpful. This course is definitely helping me get closer to my dream of a government job.",
        author: "Ananthu Thiruvarp"
      }
    ]
  };

  return (
    <section className="py-16 px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Title and Description */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            {sectionData.title}
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            {sectionData.description}
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {sectionData.testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white p-8 rounded-lg shadow-md">
              {/* Star Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, index) => (
                  <FaStar 
                    key={index} 
                    className="text-2xl text-yellow-400" 
                  />
                ))}
              </div>
              
              {/* Testimonial Text */}
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                {testimonial.text}
              </p>
              
              {/* Author */}
              <div className="text-lg font-semibold text-gray-900">
                {testimonial.author}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;