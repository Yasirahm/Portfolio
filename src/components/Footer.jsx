import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaArrowUp, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer ref={ref} className="bg-gradient-to-r from-purple-900 to-blue-900 text-white py-8 px-6 relative w-full">
      <motion.div
        className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-6 px-4 text-center md:text-left"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 1 }}
      >
        {/* Left - Brand Name & Message */}
        <motion.div
          className="md:w-1/3"
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <h2 className="lg:text-3xl text-xl font-bold text-purple-400">Yasir Hamid Rather &trade;</h2>
          <p className="text-gray-300 text-sm mt-2">
            &copy; {new Date().getFullYear()} Thank you for visiting my website! If you have any suggestions or inquiries, feel free to fill out the contact form. I’ll get back to you as soon as possible. Looking forward to connecting with you!
          </p>
          <p className="text-sm lg:text-lg text-gray-300 mt-4 italic">
            "وَقُل رَّبِّ زِدْنِي عِلْمًا"
          </p>
          <p className="text-xs lg:text-sm text-gray-400">(And say, "My Lord, increase me in knowledge.") - Surah Taha 20:114</p>
        </motion.div>

        {/* Center - Social Media Icons */}
        <motion.div
          className="flex space-x-6 text-2xl justify-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <motion.a
            href="https://github.com/Yasirahm/sigma-web"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 text-4xl hover:text-white transition"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaGithub />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/yasir-hamid-3a961925b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 text-4xl hover:text-white transition"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaLinkedin />
          </motion.a>
        </motion.div>

        {/* Right - Quick Links */}
        <motion.div
          className="md:w-1/3"
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <ul className="flex flex-col md:flex-row justify-center md:justify-end space-y-2 md:space-y-0 md:space-x-6">
            <li><a href="#about" className="text-gray-400 hover:text-white">About</a></li>
            <li><a href="#portfolio" className="text-gray-400 hover:text-white">Portfolio</a></li>
            <li><a href="#skills" className="text-gray-400 hover:text-white">Skills</a></li>
            <li><a href="#contact" className="text-gray-400 hover:text-white">Contact</a></li>
          </ul>
        </motion.div>
      </motion.div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-6 right-6 bg-purple-600 hover:bg-purple-700 p-3 rounded-full text-white shadow-lg transition md:bottom-8 md:right-8"
      >
        <FaArrowUp size={24} />
      </motion.button>
    </footer>
  );
};

export default Footer;