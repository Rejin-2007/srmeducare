import React from "react";

const MainFacultySection = () => {
  // Separate data for easy customization
  const sectionData = {
    title: "LEARN FROM THE BEST",
    description: "SRM EDUCARE’s top students have excelled in PSC and entrance exams with outstanding results. Their success reflects the power of personalized coaching and expert guidance.",
    faculty: [
      {
        id: 1,
        name: "GARRY MILLER",
        position: "Teacher",
        image: "/api/placeholder/300/300", // Replace with actual image path
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      },
      {
        id: 2,
        name: "JENNY AARON",
        position: "Teacher",
        image: "/api/placeholder/300/300", // Replace with actual image path
        bio: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      },
      {
        id: 3,
        name: "JENNY AARON",
        position: "Teacher",
        image: "/api/placeholder/300/300", // Replace with actual image path
        bio: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
      },
      {
        id: 4,
        name: "STEVEN FINCH",
        position: "Teacher",
        image: "/api/placeholder/300/300", // Replace with actual image path
        bio: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      }
    ]
  };

  return (
    <section className="py-16 px-8 bg-white">
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

        {/* Faculty Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {sectionData.faculty.map((person) => (
            <div key={person.id} className="group relative overflow-hidden rounded-lg shadow-lg">
              {/* Image Container */}
              <div className="aspect-square bg-gray-200 relative overflow-hidden">
                {/* Placeholder for image - replace with actual image */}
                <div className="w-full h-full bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center text-white text-4xl font-bold">
                  {person.name.split(' ').map(n => n[0]).join('')}
                </div>
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/70 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center p-4">
                  <p className="text-white text-sm text-center leading-relaxed">
                    {person.bio}
                  </p>
                </div>
              </div>

              {/* Info */}
              <div className="bg-white p-4 text-center">
                <h3 className="font-bold text-lg text-gray-900">{person.name}</h3>
                <p className="text-gray-600">{person.position}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MainFacultySection;