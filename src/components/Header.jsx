import React, { useState } from "react";
import { Link } from "react-scroll";
import { Menu, X } from "lucide-react";
import logo from "../assets/Logo.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="p-4 bg-transparent fixed w-full top-0 z-10 shadow-lg flex justify-between items-center md:px-10">
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="h-10 mr-2 rounded-full" />
        <h1 className="text-xl lg:text-2xl font-bold text-white">Yasir Hamid</h1>
      </div>
      
      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)} className="text-white     focus:outline-none">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
      
      {/* Navigation Links */}
      <nav
        className={`absolute top-16 right-4 bg-black p-6 rounded-lg shadow-md space-y-4 flex flex-col items-start transition-all duration-300 ease-in-out 
        ${isOpen ? "block" : "hidden"} md:flex md:flex-row md:static md:bg-transparent md:space-x-8 md:p-0 md:shadow-none md:space-y-0`}
      >
        <Link to="about" smooth={true} duration={500} offset={-60} className="text-gray-100 cursor-pointer block md:inline hover:text-purple-400">About</Link>
        <Link to="portfolio" smooth={true} duration={500} offset={-60} className="text-gray-100 cursor-pointer block md:inline hover:text-purple-400">Portfolio</Link>
        <Link to="skills" smooth={true} duration={500} offset={-60} className="text-gray-100 cursor-pointer block md:inline hover:text-purple-400">Skills</Link>
        <Link to="contact" smooth={true} duration={500} offset={-60} className="text-gray-100 cursor-pointer block md:inline hover:text-purple-400">Contact</Link>
      </nav>
    </header>
  );
};

export default Header;