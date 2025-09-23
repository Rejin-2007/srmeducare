import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaYoutube, FaInstagram } from "react-icons/fa";

const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    comment: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({ name: "", phone: "", comment: "" });
  };

  return (
    <footer className="bg-[#19183B] text-[#E7E2Ef] border-t-2 border-[#7B2425] p-8">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Left: Logo */}
        <div className="flex-1 flex flex-col justify-start">
          <h2 className="text-2xl font-bold mb-4">SRM Educare</h2>
        </div>

        {/* Middle: Contact */}
        <div className="flex-1 flex flex-col justify-start gap-2">
          <p>Email: info@srmeducare.com</p>
          <p>Phone: +91 12345 67890</p>
          <Link
            to="/terms-and-conditions"
            className="underline hover:text-[#7B2425] transition-colors duration-200"
          >
            Terms and Conditions
          </Link>
          <div className="flex gap-4 mt-2">
            <a
              href="https://youtube.com/@srmeducare20?si=-dYzSxJDwpMTeF9i"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube size={24} />
            </a>
            <a
              href="https://www.instagram.com/srm_educare?igsh=MW0xdTY3dHRrZzhycg=="
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram size={24} />
            </a>
          </div>
        </div>

        {/* Right: Contact Form */}
        <div className="flex-1">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-3"
          >
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="p-2 rounded border border-[#7B2425] bg-[#19183B] text-[#E7E2Ef] placeholder:text-[#E7E2Ef] focus:outline-none"
              required
            />
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone"
              className="p-2 rounded border border-[#7B2425] bg-[#19183B] text-[#E7E2Ef] placeholder:text-[#E7E2Ef] focus:outline-none"
              required
            />
            <textarea
              name="comment"
              value={formData.comment}
              onChange={handleChange}
              placeholder="Comment"
              className="p-2 rounded border border-[#7B2425] bg-[#19183B] text-[#E7E2Ef] placeholder:text-[#E7E2Ef] focus:outline-none"
              required
            ></textarea>
            <button
              type="submit"
              className="bg-[#7B2425] hover:bg-[#E7E2Ef] hover:text-[#19183B] transition-colors duration-200 p-2 rounded font-semibold"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      <div className="text-center mt-6 text-sm text-[#E7E2Ef]/80">
        &copy; {new Date().getFullYear()} SRM Educare. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
