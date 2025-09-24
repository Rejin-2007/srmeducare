import React, { useState, useEffect, useRef } from "react";
import { 
  FaChalkboardTeacher, 
  FaBook, 
  FaUsers, 
} from "react-icons/fa";

const AnimatedCounter = ({ number, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const target = parseInt(number);
    if (isNaN(target)) return;

    const increment = target / (duration / 16); // 60fps
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [number, duration, isVisible]);

  return (
    <div ref={ref} className="text-5xl font-bold text-gray-900 mb-2">
      {count.toLocaleString()}
    </div>
  );
};

const StatsSection = () => {
  const sectionData = {
    title: "SOME IMPORTANT FACTS",
    description: "SRM EDUCARE offers expert-led courses, dedicated teachers, and a growing student community committed to success.",
    stats: [
      { 
        number: "40", 
        label: "Teachers",
        icon: FaChalkboardTeacher
      },
      { 
        number: "37", 
        label: "courses",
        icon: FaBook
      },
      { 
        number: "2120", 
        label: "Students",
        icon: FaUsers
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

        {/* Separator Line */}
        <div className="flex justify-center mb-12">
          <div className="w-24 h-1 bg-gray-300"></div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-8">
          {sectionData.stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <IconComponent className="text-4xl text-blue-600" />
                </div>
                <AnimatedCounter number={stat.number} duration={2000} />
                <div className="text-lg text-gray-600 uppercase tracking-wide">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;