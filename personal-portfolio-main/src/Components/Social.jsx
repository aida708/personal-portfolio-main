import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

export default function Social() {
  return (
    <>
      <div
        title="Github"
        className="btn-icon-only rounded-circle ml-1"
        onClick={() => window.open("https://github.com/aida708", "_blank")}
      >
        <FaGithub size={30} className="cursor-pointer hover:scale-105" />
      </div>
      <div
        title="Email"
        onClick={() => window.open("mailto: aidasufaj7@gmail.com")}
      >
        <HiOutlineMail size={31} className="cursor-pointer hover:scale-105" />
      </div>
      <div
        title="Linkedin"
        onClick={() =>
          window.open(
            "https://www.linkedin.com/in/aida-sufaj-922340232/",
            "_blank"
          )
        }
      >
        <FaLinkedin size={30} className="cursor-pointer hover:scale-105" />
      </div>
    </>
  );
}
