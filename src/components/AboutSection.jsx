import React from "react";

const AboutSection = () => {
  const aboutData = {
    title: "About SRM Educare",
    logo: "/logo.jpg",
    content: {
      introduction:
        "SRM EDUCARE INDIVIDUAL ONLINE Educating Service was established in 2021 under the company SREERAM AGENCY.",
      history:
        "Initially launched as an offline coaching center for Kerala General PSC examinations, the institution later expanded to offer personalized online education across Kerala.",
      services: [
        {
          title: "Government Job Aspirants",
          description:
            "Provides tailored lessons for government job aspirants, allowing them to learn each subject at their own pace.",
        },
        {
          title: "School Students",
          description:
            "Live online tuition for school students from Grade 1 to Plus Two ( STATE,NCERT, ICSE) , following a 'one student, one teacher' model for each subject.",
        },
        {
          title: "Entrance Exam Coaching",
          description:
            "Personal coaching for entrance exams such as NEET, KEAM, and JEE.",
        },
        {
          title: "Language Classes",
          description:
            "Grammar classes available for English and Hindi.",
        },
      ],
      achievement:
        "Within just three years, SRM EDUCARE has become one of the leading institutions, helping numerous aspirants and students achieve outstanding success.",
    },
  };

  return (
    <section className="py-16 px-6 bg-white overflow-x-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-start gap-12">
          {/* Left Side - Logo */}
          <div className="lg:w-2/5 w-full flex justify-center">
            <div className="max-w-xs w-full aspect-square bg-gradient-to-br from-blue-50 to-gray-100 rounded-2xl shadow-xl flex items-center justify-center p-6 overflow-hidden">
              <img
                src={aboutData.logo}
                alt="SRM Educare Logo"
                className="w-full h-full object-contain"
                onError={(e) => {
                  e.target.style.display = "none";
                  e.target.nextSibling.style.display = "flex";
                }}
              />
              {/* Fallback if image doesn't load */}
              <div className="hidden flex-col items-center justify-center text-center">
                <div className="text-5xl font-bold text-blue-600 mb-2">SRM</div>
                <div className="text-2xl font-semibold text-gray-700">EDUCARE</div>
                <div className="text-sm text-gray-500 mt-2">Since 2021</div>
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="lg:w-3/5 w-full">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              {aboutData.title}
            </h2>

            {/* Introduction */}
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              {aboutData.content.introduction}
            </p>

            {/* History */}
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              {aboutData.content.history}
            </p>

            {/* Services */}
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Our Services
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {aboutData.content.services.map((service, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 p-4 rounded-lg border-l-4 border-blue-600"
                  >
                    <h4 className="font-semibold text-gray-800 mb-2">
                      {service.title}
                    </h4>
                    <p className="text-gray-700 text-sm">{service.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Achievement */}
            <div className="bg-blue-50 p-6 rounded-lg">
              <p className="text-gray-700 text-lg font-medium">
                {aboutData.content.achievement}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
