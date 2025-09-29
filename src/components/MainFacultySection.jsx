import React from "react";

const MainFacultySection = () => {
  const sectionData = {
    title: "LEARN FROM THE BEST",
    description: "SRM EDUCARE’s top students have excelled in PSC and entrance exams with outstanding results. Their success reflects the power of personalized coaching and expert guidance.",
    faculty: [
      {
        id: 1,
        name: "Preetha H",
        education: "B.Sc,B.Ed",
        role: "CEO & Head Of Education",
        image: "/PREETHA_H.jpeg",
        width: 400,
        height: 533,
        bio: "The only thing that I, along with every teacher here, offer to the world is to provide personalized training to each student who arrives with the hope of succeeding in their studies."
      },
      {
        id: 2,
        name: "Vimal VS",
        education: " ",
        role: "H.O.D (PSC Classes & Marketing Organisation)",
        image: "/vimal_vs.jpeg",
        width: 400,
        height: 533,
        bio: "Teaching Is Not Just A Job , It's a Divine Art for Our Society"
      },
      {
        id: 3,
        name: "Shibin",
        education: "Bsc Maths",
        role: "Mathematics & English",
        image: "/shibin.jpeg",
        width: 400,
        height: 533,
        bio: "I dedicate my utmost effort to ensure complete success in these two subjects for every aspirant who aims for 100% achievement. I feel deeply satisfied to be working here as a teacher, and that’s precisely why no aspirant who comes here will ever face failure."
      },
      {
        id: 4,
        name: "Sariga MS",
        education: "B.Sc Botany",
        role: "Classes Of Science And Constitution",
        image: "/sariga_MS.jpeg",
        width: 400,
        height: 533,
        bio: "As a teacher, I am committed to sincerely doing everything necessary to help job aspirants secure government employment, and I will stand by them as a support in their academic subjects until they successfully enter a job."
      },
      {
        id: 5,
        name: "SINIYA",
        education: "B.Ed with ktet catagory 3",
        role: "history , economics, civics",
        image: "/SINIYA.jpeg",
        width: 400,
        height: 533,
        bio: "At SRM Institution, may the lessons of history, the wisdom of economics, and the values of citizenship guide you to shape a noble future."
      },
      {
        id: 6,
        name: "NAJITHA SHARAF",
        education: "MA Economics",
        role: "",
        image: "/najitha.jpeg",
        width: 400,
        height: 533,
        bio: ""
      },
      {
        id: 7,
        name: "Rijeena Saju",
        education: "MA English Literature",
        role: "English & Geography & Malayalam & Civics",
        image: "/RijeenaSaju.jpeg",
        width: 400,
        height: 533,
        bio: "As a teacher, I am able to work with 100% dedication through SRM Educare. What sets SRM Educare apart from other online classes is the flexibility it offers — each aspirant can learn at their own convenient time. Moreover, we, the teachers, are always committed to personally monitoring each student's learning progress, addressing their doubts, and guiding them with suggestions to help them succeed.For those who dream of securing a government job — especially homemakers and private sector employees — SRM Educare provides a learning path that fits their schedule and offers 100% assurance in helping them realize that dream."
      },
      {
        id: 8,
        name: " Athira shaji",
        education: "MA Criminology &  PhD(Ongoing)",
        role: "sports, arts, literature, and culture",
        image: "/AthiraShaji.jpeg",
        width: 400,
        height: 533,
        bio: "Are you someone who has the desire to learn but feels that the circumstances are not in your favor? If so, remember — if you have the will, then through SRM, you can achieve your dream of securing a job, no matter the situation!"
      },
      {
        id: 9,
        name: "Shubhija RK",
        education: "M Tech Structural Engineering",
        role: "PSC Civil Engineering",
        image: "/shubhaja_rk.jpeg",
        width: 400,
        height: 533,
        bio: "Commitment is an essential element of successful teaching. I pledge,to be committed to the students that walk through, my doors and I will serve them no matter how far they reach.Passionate teachers are distinguished by their commitment to the achievement of their  students. Henceforth, i will stood by SRM institution to pursue the dream of each and every candidature  to secure a good position in gvt sectors for their promising future."
      },
      {
        id: 10,
        name: "Derly",
        education: "ME Structural Engineering",
        role: "PSC Civil ",
        image: "/derly.jpeg",
        width: 400,
        height: 533,
        bio: ""
      },
      {
        id: 11,
        name: "Aju",
        education: "Bsc Maths",
        role: "Maths & General PSC Exams",
        image: "/aju.jpeg",
        width: 400,
        height: 533,
        bio: ""
      },
      {
        id: 12,
        name: "Vineetha",
        education: "B.Com Cooperation",
        role: "History & Economics",
        image: "/vineetha.jpeg",
        width: 400,
        height: 533,
        bio: "I assure you of my sincere service in association with SRM EDUCARE. If you have the willingness and time to work hard, and if you're ready for it, your dream of securing a job can be fulfilled through SRM."
      },
      {
        id: 13,
        name: "Karishma Nair",
        education: "MA English Literature & English Entrepreneur",
        role: "English Grammar course",
        image: "/karishma-nair.jpeg",
        width: 400,
        height: 533,
        bio: "In the SRM personal online service, I handle English Grammar Classes. I dedicate all my efforts to helping any candidate aiming for a 100% success rate achieve complete victory in these two subjects. I'm very satisfied with my job as a teacher here, and that's why no candidate who comes here will fail.Wish you all success in your life.Thank you"
      },
      {
        id: 14,
        name: "Aswathy",
        education: "M.Sc B.Ed",
        role: "Maths - General PSC & +1+2",
        image: "/aswathy.jpeg",
        width: 400,
        height: 533,
        bio: ""
      }
    ]
  };

  return (
    <section className="py-16 px-4 sm:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            {sectionData.title}
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            {sectionData.description}
          </p>
        </div>

        <div className="space-y-16">
          {sectionData.faculty.map((person, index) => {
            const isEven = index % 2 === 0;

            return (
              <div key={person.id} className="relative">
                <div className={`flex flex-col lg:flex-row items-center gap-8 ${
                  isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}>
                  <div className="w-full lg:w-1/3">
                    <div className="relative group overflow-hidden rounded-2xl shadow-xl">
                      <div className="aspect-[3/4] bg-gray-100 relative overflow-hidden flex items-center justify-center">
                        {person.image && (
                          <img 
                            src={person.image} 
                            alt={person.name}
                            width={person.width || 400}
                            height={person.height || 533}
                            className="w-full h-full object-contain"
                            style={{ objectPosition: 'top center' }}
                            onError={(e) => {
                              e.target.style.display = 'none';
                              const fallback = e.target.nextSibling;
                              fallback.classList.remove('hidden');
                              fallback.classList.add('flex');
                            }}
                          />
                        )}

                        <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-600 items-center justify-center text-white text-4xl font-bold hidden">
                          {person.name.split(' ').map(n => n[0]).join('')}
                        </div>

                        {person.bio && (
                          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center p-6">
                            <p className="text-white text-sm text-center leading-relaxed">
                              {person.bio}
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="w-full lg:w-2/3">
                    <div className={`text-center lg:text-left ${
                      isEven ? 'lg:text-left' : 'lg:text-right'
                    }`}>
                      <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                        {person.name}
                      </h3>

                      {person.role && (
                        <p className="text-lg lg:text-xl text-blue-600 font-semibold mb-3">
                          {person.role}
                        </p>
                      )}

                      {person.education && (
                        <p className="text-gray-600 mb-4">
                          <span className="font-medium">Education:</span> {person.education}
                        </p>
                      )}

                      {person.bio && (
                        <div className="lg:hidden mt-6">
                          <p className="text-gray-700 leading-relaxed bg-gray-50 p-4 rounded-lg">
                            {person.bio}
                          </p>
                        </div>
                      )}

                      <div className="mt-6">
                        <span className="inline-block w-20 h-1 bg-blue-500 rounded-full"></span>
                      </div>
                    </div>
                  </div>
                </div>

                {index < sectionData.faculty.length - 1 && (
                  <div className="hidden lg:block absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-32 h-px bg-gray-200"></div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default MainFacultySection;
