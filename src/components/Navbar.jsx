import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuItems = ["Home", "Courses", "Faculty", "Review"];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 py-4 flex justify-between items-center bg-transparent shadow-md">
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
        className="md:hidden text-3xl text-gray-800"
        onClick={() => setIsOpen(true)}
        aria-label="Open menu"
      >
        <HiMenu />
      </button>

      {/* Mobile Fullscreen Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-50 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />

            {/* Slide-in Menu */}
            <motion.div
              className="fixed top-0 left-0 w-full h-full bg-gray-950 z-50 flex flex-col p-6"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {/* Close Button */}
              <button
                className="text-3xl text-gray-800 self-end mb-6"
                onClick={() => setIsOpen(false)}
                aria-label="Close menu"
              >
                <HiX />
              </button>

              {/* Menu Items */}
              <ul className="flex flex-col gap-6 text-xl font-semibold text-gray-500">
                {menuItems.map((item, idx) => (
                  <li key={idx}>
                    <Link
                      to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                      onClick={() => setIsOpen(false)}
                      className="hover:text-yellow-400 transition-colors"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
