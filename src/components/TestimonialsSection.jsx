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
        text: "Praesent cursus nulla non arcu tempor, ut egestas elit tempus. In ac ex fermentum, gravida felis nec, tincidunt ligula. Sed dapibus mauris ullamcorper. Iuctus magna.",
        author: "DAVID FINCH"
      },
      {
        id: 2,
        rating: 5, // Number of stars (1-5)
        text: "Praesent cursus nulla non arcu tempor, ut egestas elit tempus. In ac ex fermentum, gravida felis nec, tincidunt ligula. Sed dapibus mauris ullamcorper. Iuctus magna.",
        author: "DAVID FINCH"
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