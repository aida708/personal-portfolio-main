import React, { useState, useEffect } from "react";
import logo from "./../assets/logo.jpg";
import "./NavBar.css";
import { Link } from "react-scroll";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { GiSkills } from "react-icons/gi";
import { RiServiceLine } from "react-icons/ri";
import { BiMessageSquareDetail } from "react-icons/bi";

const NavBar = () => {
  const [toggle, setToggle] = useState(false);
  const handleClick = () => setToggle(!toggle);

  const closeMenu = () => {
    if (toggle) {
      setToggle(false);
    }
  };
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
    setPrevScrollPos(currentScrollPos);
  };

  // <div className="fixed top-0 z-50 w-full p-4 bg-white shadow">
  // fixed top-0 left-0 right-0 z-50  shadow-md py-4 px-6
  // <nav className="top-0  left-0 right-0 z-50  py-6 px-3 w-full p-[10px] flex justify-between items-center fixed  transform -translate-x-1/2 rounded-full ">

  return (
    <nav
      className={`flex justify-between fixed top-0 left-0 right-0 z-50 bg-white  shadow-md py-4 px-6 transition-all ${
        visible ? "" : "transform -translate-y-full"
      }`}
    >
      <img src={logo} className="h-[25px] " alt="AS" />
      <div>
        <ul className="hidden md:flex ">
          <li className="menuItem hover:scale-110 flex items-center">
            <AiOutlineHome className="mr-1.5" />
            <Link to="home" smooth={true} duration={300}>
              <span>Home</span>
            </Link>
          </li>
          <li className="menuItem hover:scale-110 flex items-center">
            <AiOutlineUser className="mr-1.5" />
            <Link to="about" smooth={true} duration={300}>
              About
            </Link>
          </li>
          <li className="menuItem hover:scale-110 flex items-center">
            <GiSkills className="mr-1.5" />
            <Link to="skills" smooth={true} duration={300}>
              Skills
            </Link>
          </li>
          <li className="menuItem hover:scale-110 flex items-center">
            <RiServiceLine className="mr-1.5" />

            <Link to="projects" smooth={true} duration={500}>
              Projects
            </Link>
          </li>
          <li className="menuItem hover:scale-110 flex items-center text-violet-500		">
            <BiMessageSquareDetail className="mr-1.5" />
            <Link to="contact" smooth={true} duration={500}>
              Contact
            </Link>
          </li>
        </ul>
        <div className="flex flex-col items-end">
          {!toggle ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              onClick={handleClick}
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 cursor-pointer md:hidden"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12"
              />
            </svg>
          ) : (
            <svg
              onClick={handleClick}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 cursor-pointer md:hidden h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          )}

          {toggle ? (
            <ul className="md:hidden absolute flex mt-8 flex-col bg-gray-200 p-2 rounded-sm">
              <li className="menuItem p-3 hover:scale-110">
                {/* <Link to="/" smooth={true} duration={300} onClick={closeMenu}>
                  Home
                </Link> */}
                <a href="#home">Home</a>
              </li>
              <li className="menuItem p-3 hover:scale-110">
                {/* <Link
                  to="about"
                  smooth={true}
                  duration={300}
                  onClick={closeMenu}
                >
                  AboutMe
                </Link> */}
                <a href="#about">AboutMe</a>
              </li>
              <li className="menuItem p-3 hover:scale-110">
                <Link
                  to="skills"
                  smooth={true}
                  duration={300}
                  onClick={closeMenu}
                >
                  Skills
                </Link>
              </li>
              <li className="menuItem p-3 hover:scale-110">
                <Link
                  to="projects"
                  smooth={true}
                  duration={300}
                  onClick={closeMenu}
                >
                  Projects
                </Link>
              </li>
              <li className="menuItem p-3 hover:scale-110">
                <Link
                  to="contact"
                  smooth={true}
                  duration={300}
                  onClick={closeMenu}
                >
                  Contact
                </Link>
              </li>
            </ul>
          ) : null}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
