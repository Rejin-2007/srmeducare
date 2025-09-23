import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-[#19183B] text-[#E7E2Ef] border-b-2 border-[#7B2425] px-6 py-4 flex justify-between items-center">
      {/* Logo / Brand */}
      <div className="text-xl font-bold">SRM Educare</div>

      {/* Menu Items */}
      <ul className="flex gap-6">
        <li>
          <Link
            to="/"
            className="hover:text-[#7B2425] transition-colors duration-200"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/courses"
            className="hover:text-[#7B2425] transition-colors duration-200"
          >
            Courses
          </Link>
        </li>
        <li>
          <Link
            to="/faculty"
            className="hover:text-[#7B2425] transition-colors duration-200"
          >
            Faculty
          </Link>
        </li>
        <li>
          <Link
            to="/review"
            className="hover:text-[#7B2425] transition-colors duration-200"
          >
            Review
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
