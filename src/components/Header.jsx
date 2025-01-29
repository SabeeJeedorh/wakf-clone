import React, { useState } from "react";
import logo from "../assets/logo-white.svg";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-cover bg-center text-fuchsia-50 p-4 shadow-lg bg-purple-400 backdrop-blur-md z-[999]">
      <div className="max-w-7xl mx-auto h-full flex flex-col ">
        <div className="flex items-center justify-between ml-7">
          <div className="flex items-center space-x-4">
            <img src={logo} alt="wakf logo" className="w-32 mr-[20px]" />
          </div>

          <button
            className="text-white md:hidden focus:outline-none"
            onClick={toggleMenu}
          >
            <svg
              className="w-8 h-8"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  isMenuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>

          <ul
            className={`${
              isMenuOpen ? "block" : "hidden"
            } md:flex list-none space-y-4 md:space-y-0 md:space-x-10 cursor-pointer font-medium text-xl md:flex-row absolute md:static top-16 left-0 w-full bg-purple-400 md:bg-transparent z-50 md:z-auto md:items-center md:justify-center`}
          >
            <li className="text-purple-700">
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/Impact">Impact</a>
            </li>
            <li>
              <a href="/">Events</a>
            </li>
            <li>
              <a href="/">Contact</a>
            </li>
          </ul>

          <button className="hidden md:block text-white bg-purple-900 hover:bg-purple-600 transition duration-200 w-[300px] p-3">
            Get Involved
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
