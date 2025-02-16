import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const Internship = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-16 px-6 text-white">
      <div className="container mx-auto text-center">
        {/* Heading with Animation */}
        <motion.h2
          className="lg:text-4xl text-2xl font-bold mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
          transition={{ duration: 1 }}
        >
          My Internship at CODTECH
        </motion.h2>

        <motion.p
          className="text-gray-400 mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          I completed my internship at CODTECH, gaining hands-on experience in
          web development, project management, and teamwork. Here are my
          official documents:
        </motion.p>

        {/* Animated Buttons */}
        <motion.div
          className="flex flex-col md:flex-row justify-center gap-6"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <motion.a
            href="https://drive.google.com/file/d/1Y_AuG2eQG5P7FU1az3zYIAHxnw7iLZeT/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-lg text-sm lg:text-lg font-semibold shadow-lg transition-all"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            View Offer Letter
          </motion.a>

          <motion.a
            href="https://drive.google.com/file/d/1ZsWQH7rNvPRrdHrNULRYxPgM3r2KbEzf/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg text-sm lg:text-lg font-semibold shadow-lg transition-all"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            View Completion Certificate
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Internship;
