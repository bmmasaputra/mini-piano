import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 50);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      className={`fixed w-full text-white z-20 transition-all duration-300 ${
        isScrolled
          ? "bg-gradient-to-r from-[rgba(131,58,180,1)] via-[rgba(236,29,253,1)] to-[rgba(252,176,69,1)] shadow-md"
          : "bg-transparent"
      } py-3 px-6`}
    >
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-4">
          <img src={logo} alt="MiniPiano Logo" className="h-[50px] w-auto" />
        </div>

        {/* Hamburger icon */}
        <div className="block lg:hidden" onClick={toggleMenu}>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </div>

        {/* Navbar links */}
        <div className={`lg:flex space-x-8 ${isMenuOpen ? "block" : "hidden"}`}>
          <Link to="/" className="hover:text-gray-300">
            Main Piano
          </Link>
          <Link to="/galeri-musik" className="hover:text-gray-300">
            Galeri Musik
          </Link>
          <Link to="/tutorial-video" className="hover:text-gray-300">
            Tutorial Video
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;