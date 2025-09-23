import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Courses from "./pages/Courses.jsx";
import Faculty from "./pages/Faculty.jsx";
import Review from "./pages/Review.jsx";
import TermsAndConditions from "./pages/TermsAndConditions.jsx";
import CoursesPsc from "./pages/CoursesPsc.jsx";
import CoursesTution from "./pages/CoursesTution.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";

const App = () => {
  return (
    <div>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/psc" element={<CoursesPsc />} />
          <Route path="/courses/tution" element={<CoursesTution />} />
          <Route path="/faculty" element={<Faculty />} />
          <Route path="/review" element={<Review />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
          <Route path="*" element={<h1>404 - Page Not Found</h1>} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
