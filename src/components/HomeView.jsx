import React from "react";
import { FaGraduationCap } from "react-icons/fa";
import { motion } from "framer-motion";
import Navbar from "./Navbar";

const HomeView = ({ title }) => {
  return (
    <section
      className="relative h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: "url('/homeimg.jpg')", // Put your image in public folder
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>

      {/* Navbar */}
      <Navbar />

      {/* Content */}
      <motion.div
        className="relative z-10 text-center text-white px-6 max-w-3xl"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <motion.div
          className="flex justify-center mb-4"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6, ease: "backOut" }}
        >
          <FaGraduationCap className="text-5xl text-emerald-400 drop-shadow-lg" />
        </motion.div>

        <motion.h1
          className="text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-xl"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          SRM Educare
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl text-orange-300 font-medium"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          This is only an Individual Educating Services
        </motion.p>
        <motion.p
          className="text-lg md:text-xl text-gray-200 font-medium"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          {title}
        </motion.p>
      </motion.div>
    </section>
  );
};

export default HomeView;
