import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaJs, FaReact } from "react-icons/fa";
import { SiTailwindcss, SiExpress } from "react-icons/si";
import { GiAtom } from "react-icons/gi"; // Physics Icon

const skills = [
  { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-500" /> },
  { name: "React", icon: <FaReact className="text-blue-400" /> },
  { name: "React Native", icon: <FaReact className="text-blue-400" /> },
  { name: "Express.js", icon: <SiExpress className="text-gray-500" /> },
  { name: "Physics", icon: <GiAtom className="text-purple-400" /> }
];

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.2,
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
};

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" }); // Triggers when section is 100px inside viewport

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
      className="min-h-screen flex flex-col items-center text-white py-16 px-8"
    >
      <motion.h2 className="text-2xl lg:text-4xl font-bold mb-4 flex items-center gap-2" variants={itemVariants}>
        My Skills <span>💻</span>
      </motion.h2>
      <motion.p className="text-gray-300 text-sm lg:text-lg mb-8" variants={itemVariants}>
        I have experience in frontend web development & app development, and I'm currently learning backend development.
      </motion.p>

      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6"
        variants={containerVariants}
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="bg-[#111827] flex flex-col items-center p-4 rounded-lg shadow-md hover:shadow-xl transition"
            variants={itemVariants}
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
          >
            <motion.div
              className="text-6xl mb-2"
              initial={{ rotate: -10 }}
              animate={{ rotate: 0 }}
              transition={{ duration: 0.5 }}
            >
              {skill.icon}
            </motion.div>
            <p className="text-white font-semibold">{skill.name}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Skills;
