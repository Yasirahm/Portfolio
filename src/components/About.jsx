import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaJs, FaReact } from "react-icons/fa";
import { SiTailwindcss, SiReact } from "react-icons/si";

const techStack = [
  { id: 1, icon: <FaHtml5 size={60} className="text-orange-500" />, name: "HTML5" },
  { id: 2, icon: <FaCss3Alt size={60} className="text-blue-500" />, name: "CSS3" },
  { id: 3, icon: <FaJs size={60} className="text-yellow-500" />, name: "JavaScript" },
  { id: 4, icon: <FaReact size={60} className="text-blue-400" />, name: "React" },
  { id: 5, icon: <SiTailwindcss size={60} className="text-blue-300" />, name: "Tailwind CSS" },
  { id: 6, icon: <SiReact size={60} className="text-blue-400" />, name: "React Native" },
];

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.2, duration: 0.8, ease: "easeOut" },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-16 text-center text-white">
      <motion.h2
        className="text-2xl lg:text-3xl font-bold mb-8 flex justify-center items-center gap-2"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={itemVariants}
      >
        My Tech Stack <span className="text-xl">🚀</span>
      </motion.h2>

      <motion.div
        className="flex flex-wrap justify-center gap-6"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        {techStack.map((tech, index) => (
          <motion.div
            key={tech.id}
            className="bg-gray-900 p-6 rounded-lg shadow-lg flex flex-col items-center w-32 h-32"
            variants={itemVariants}
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
          >
            {tech.icon}
            <p className="mt-2 text-white font-medium">{tech.name}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default About;
