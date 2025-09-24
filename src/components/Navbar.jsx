import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = ["Home", "Courses", "Faculty", "Review"];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-8 py-4 flex justify-between items-center backdrop-blur-md">
      {/* Logo */}
      <div className="text-2xl font-extrabold tracking-wide">
        <span className="text-yellow-400">SRM</span> Educare
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-8 font-medium">
        {menuItems.map((item, idx) => (
          <li key={idx} className="relative group">
            <Link
              to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              className="hover:text-yellow-400 transition-colors"
            >
              {item}
            </Link>
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
          </li>
        ))}
      </ul>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-3xl"
        onClick={() => setIsOpen(true)}
      >
        <HiMenu />
      </button>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <div 
              className="fixed inset-0 bg-black bg-opacity-50 z-40"
              onClick={() => setIsOpen(false)}
            />
            
            {/* Sidebar */}
            <div className="fixed top-0 right-0 h-full w-64 bg-gray-800 text-white z-50 p-6">
              {/* Close Button */}
              <button
                className="self-end text-3xl mb-6 ml-auto block"
                onClick={() => setIsOpen(false)}
              >
                <HiX />
              </button>

              {/* Menu Items */}
              <ul className="flex flex-col gap-4 text-lg">
                {menuItems.map((item, idx) => (
                  <li key={idx}>
                    <Link
                      to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                      onClick={() => setIsOpen(false)}
                      className="block py-2 hover:text-yellow-400"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;