import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import image16 from "../assets/image16.png";
import image17 from "../assets/image17.png";
import image18 from "../assets/image18.png";
import image19 from "../assets/image19.png";
import image20 from "../assets/image20.png";
import image21 from "../assets/image21.png";
import Internship from "./Internship";

const projects = [
  {
    title: "The AH Hamaam Website",
    description: "A website for buying Hamaam with detailed product information.",
    image: image16,
    liveLink: "https://ahhamaam.netlify.app/",
  },
  {
    title: "The ZufaizsaneenStore Shopping Website",
    description: "A React and Tailwind CSS-based shopping website with product details.",
    image: image21,
    liveLink: "https://thezufaizsaneenstore.netlify.app/",
  },
  {
    title: "AH Hamaam Android App & Hamaam Calculator App",
    description: "An Android app for buying Hamaam and a calculator for pricing.",
    image: image18,
    liveLink: "https://ahhamaamapk.netlify.app/",
  },
  {
    title: "Portfolio Website",
    description: "A personal portfolio website built using React to showcase projects.",
    image: image20,
    liveLink: "https://yasirhamid1.netlify.app/",
  },
  {
    title: "The Tech Blog",
    description: "A blog website built with React featuring multiple blog posts.",
    image: image19,
    liveLink: "https://yasirtechblog.netlify.app/",
  },
  {
    title: "The React Blog",
    description: "A React-focused blog providing information on React fundamentals.",
    image: image17,
    liveLink: "https://yasirblog2.netlify.app/",
  },
];

const Portfolio = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          window.scrollTo({
            top: sectionRef.current.offsetTop,
            behavior: "smooth",
          });
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-16 text-white px-4 md:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Portfolio</h2>

        {projects.map((project, index) => (
          <motion.div
            key={index}
            className={`flex flex-col lg:flex-row items-center gap-6 mb-12 ${
              index % 2 === 1 ? "lg:flex-row-reverse" : ""
            }`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.5 }}
          >
            {/* Project Image */}
            <div className="w-full lg:w-1/2">
              <img
                src={project.image}
                alt={project.title}
                className="rounded-lg shadow-lg w-full object-cover transition duration-300 transform hover:scale-105"
              />
            </div>

            {/* Project Details */}
            <div className="w-full lg:w-1/2 text-center lg:text-left">
              <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-400 mb-4">{project.description}</p>

              <div className="mt-4 flex justify-center lg:justify-start">
                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg transition-all"
                  >
                    View Site
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      
      <Internship />
    </section>
  );
};

export default Portfolio;