import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Courses from "./pages/Courses.jsx";
import Faculty from "./pages/Faculty.jsx";
import Review from "./pages/Review.jsx";
import TermsAndConditions from "./pages/TermsAndConditions.jsx";
import CoursesPsc from "./pages/CoursesPsc.jsx";
import Footer from "./components/Footer.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import FloatingContactButtons from "./components/FloatingContactButtons.jsx";

const App = () => {
  const pageContent = {
    home: "",
    courses: "📘 Our Courses - Explore PSC & Tuition Programs",
    coursesPsc: "🎯 PSC Coaching - Personal mentors & focused guidance",
    faculty: "👩‍🏫 Our Faculty - Meet our expert educators",
    review: "⭐ Student Reviews - Hear from our learners",
    terms: "📄 Terms & Conditions - Please read carefully",
    404: "⚠️ 404 - Page Not Found",
  };
  return (
    <div>
      <ScrollToTop />
      <div>
        <Routes>
          <Route path="/" element={<Home title={pageContent.home}/>} />
          <Route path="/courses" element={<Courses title={pageContent.courses} />} />
          <Route path="/courses/psc" element={<CoursesPsc title={pageContent.coursesPsc} />} />
          <Route path="/faculty" element={<Faculty title={pageContent.faculty} />} />
          <Route path="/review" element={<Review title={pageContent.review} />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditions title={pageContent.terms} />} />
          <Route path="*" element={<h1>404 - Page Not Found</h1>} />
        </Routes>
      </div>
      <Footer />
      <FloatingContactButtons />
    </div>
  );
};

export default App;
