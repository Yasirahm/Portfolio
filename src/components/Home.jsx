import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import Yasir from "../assets/Yasir.png";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import SplineViewer from "./SplineComponent";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col-reverse lg:flex-row items-center justify-center px-8 lg:px-16 py-10 mt-20">
      {/* Left Side - Text Content */}
      <motion.div
        className="text-center lg:text-left max-w-2xl"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Quranic Verse */}
        
        
        <h1 className="text-2xl sm:text-5xl font-extrabold text-white mt-4">
          السلام عليكم, I AM <br></br><span className="text-purple-300 font-bold font-serif ">        Yasir Hamid</span>
        </h1>

        <h3 className="mt-4 text-xl lg:text-2xl font-semibold text-gray-400 font-bold">
          <TypeAnimation
            sequence={[
              "Frontend Developer", 1000,
              "App Developer", 1000,
              "React Developer", 1000,
              "React Native Developer", 1000,
              "Web Developer", 1000,
              "Physics Undergrad", 1000,
              "A Student", 1000,
              "A Learner", 1000,
              "A Developer", 1000,
              "A Programmer", 1000,
              "A Coder", 1000,
              "A Designer", 1000,
              "A Tech Enthusiast", 1000,
              "A Team Manager", 1000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </h3>

        <p className="mt-6 text-white text-sm lg:text-lg leading-relaxed">
          I’m a frontend web developer focused on crafting visually engaging,
          responsive, and user-centric web applications. With a passion for
          clean design and performance, I specialize in creating intuitive
          interfaces and interactive features. My goal is to deliver impactful
          projects through collaboration and creative solutions.
        </p>

        <div className="mt-8 flex items-center gap-6 justify-center lg:justify-start">
          <a href="https://drive.google.com/file/d/1IC_jrmvYMtaGyFWTv902EOZYn10_pD0t/view?usp=drive_link">
            <button className="font-bold border-4 border-purple-400 text-white px-6 py-2 rounded-lg hover:bg-gray-900 transition cursor-pointer">
              Open CV
            </button>
          </a>
          <a
            href="https://github.com/Yasirahm"
            className="text-gray-900 hover:text-white text-2xl lg:text-4xl"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/yasir-hamid-3a961925b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            className="text-blue-800 hover:text-black text-2xl lg:text-4xl"
          >
            <FaLinkedin />
          </a>
        </div>
      </motion.div>

      {/* Right Side - Image */}
      <motion.div
        className="relative w-60 h-60 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden shadow-lg"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <SplineViewer/>
      </motion.div>
    </div>
  );
};

export default Home;