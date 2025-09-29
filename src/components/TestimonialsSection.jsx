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
        text: "Usually, when attending an online class—regardless of the course—after a few days of studying, our learning consistency tends to decline. But ever since I joined the SRM class, I’ve been consistently tracking my learning progress every single day. That’s definitely a positive aspect of SRM.The classes never feel overwhelming. The daily tests and the practice of writing out the mistakes as impositions have significantly boosted my learning. It creates a strong urge to read and study for at least an hour every day.",
        author: "Arathy Melarannoor"
      },
      {
        id: 2,
        rating: 5, // Number of stars (1-5)
        text: "SRM is the best online PSC class I’ve come across. It offers excellent teachers and well-prepared notes that are easy to understand—all at an affordable fee.",
        author: "Adhithyakumar Karamana"
      },
      {
        id: 3,
        rating: 5, // Number of stars (1-5)
        text: "The classes are easy to understand. Through this platform, I’ve been able to learn even those topics I used to avoid studying. I’ve grasped some useful shortcuts for solving math problems. Each subject is taught in detail, making it easier to grasp. The daily motivational messages from the Admin and HOD inspire me to keep learning. These classes are truly helping me pursue my dream of securing a job. Thank you so much!",
        author: "Gopika Poovathur"
      },
      {
        id: 4,
        rating: 5, // Number of stars (1-5)
        text: "It’s a great class. Every day there’s a test, and the lessons are delivered in a way that clearly explains which parts need to be studied. Everything is taught with clarity and understanding.",
        author: "Anjitha Kotayam"
      }, {
        id: 5,
        rating: 5, // Number of stars (1-5)
        text: "The SRM course has truly helped me understand the subjects I’m studying and has given me the confidence to ask questions and clear my doubts. The daily updates, especially on current affairs, have made it easier to stay informed and learn consistently.SRM provides everything a student needs—flexibility to attend classes at our convenience, detailed and understandable teaching methods, and supportive faculty who explain concepts clearly. This course has helped me nurture my dream of securing a government job. I’m genuinely grateful for the guidance and support I’ve received.",
        author: "Jobin kottukunnam"
      },
      {
        id: 6,
        rating: 5, // Number of stars (1-5)
        text: "SRM’s PSC classes have been incredibly helpful for me. This is the first PSC course I’ve ever joined, and I’m really impressed. The classes are well-structured and easy to understand. The guide provided is also very supportive.Even though I haven’t completed my degree yet, I’m able to manage PSC preparation alongside my studies without any issues. Everything is going smoothly, and I’m truly satisfied with the experience.",
        author: "Akshaya jagathi"
      },
      {
        id: 7,
        rating: 5, // Number of stars (1-5)
        text: "I have been attending the SRM online classes and I am very satisfied with the classes which are simple and in a unique way of teaching which I have never experienced before moreover I think no other online platform will provide an easy well structured class like this  and I am glad I joined SRM ",
        author: "Ananthu thiruvarp"
      },
      {
        id: 8,
        rating: 5, // Number of stars (1-5)
        text: "The classes are very easy to understand. All the teachers explain everything with great clarity and precision. They repeat important points multiple times to ensure we grasp the concepts thoroughly. This approach has truly helped me learn better and feel more confident in my preparation.",
        author: "Abhirami Kumarakam"
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