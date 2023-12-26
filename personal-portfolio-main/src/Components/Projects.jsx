import React from "react";
import { AppText, portfolio } from "../Constants";
import SectionHeading from "../Shared/SectionHeading";
import { robo } from "../assets/index";

import { Button } from "flowbite-react";

const Projects = () => {
  const links = {
    "E-commerce": {
      demo: "https://ecomerce-aida.netlify.app/",
      github: "https://github.com/aida708/E-commerce",
    },
    "Film-Fanatic": {
      demo: "https://film-fanatic-aidaa.netlify.app/",
      github: "https://github.com/aida708/film-fanatic",
    },
    "Trip-Checklist": {
      demo: "https://trip-checklist-aida.netlify.app/",
      github: "https://github.com/aida708/trip-checklist",
    },
    "Chatify App": {
      demo: "https://chatify-app-aida.netlify.app/",
      github: "https://github.com/aida708/chatify",
    },
    "Meal Mate": {
      demo: "https://meal-mate2.netlify.app/",
      github: "https://github.com/aida708/meal-mate",
    },
  };

  return (
    <div id="projects" className=" flex justify-center flex-col mt-40 ">
      <div className="flex flex-row px-6 md:px-0 items-center justify-center pt-25">
        <SectionHeading
          firstTitle={AppText.Creative}
          secondTitle={AppText.Portfolio}
        />
        <img src={robo} className="w-[70px] ml-5 animate-bounce" alt="Robot" />
      </div>

      <div
        className="grid grid-cols-2 items-center content-center md:grid-cols-2  lg:grid-cols-3  lg:px-48 p-6"
        style={{ gap: "20px" }}
      >
        {portfolio.map((item, index) => (
          <div
            className="p-4 px-3 pt-4  flex flex-col  rounded-lg bg-purple-100 transition-all ease-in-out group hover:scale-110"
            key={item.title}
            style={{
              height: "320px",
              borderRadius: "30px",
              //   paddingBottom: "45px",
            }}
          >
            <a
              href={links[item.title].demo}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={item.imageUrl}
                className="h-[140px] object-cover rounded-lg "
                alt={item.title}
                style={{ objectFit: "cover" }}
              />
            </a>
            <h1 className="text-[14px] group-hover:scale-110 mt-2 text-center font-bold">
              {item.title}
            </h1>
            <h1 className="text-[12px] text-gray-500 px-6 pb-3">{item.desc}</h1>
            <div className="flex justify-around">
              {/* Blue buttons containing anchor elements */}
              <Button color="violet" appearance="primary">
                <a
                  href={links[item.title].demo}
                  // className="bg-purple-500 text-white text-center rounded-lg py-2 px-4 transition duration-300 ease-in-out hover:bg-purple-600"
                  className="text-center rounded-lg py-2 px-4 text-white bg-gradient-to-br from-purple-600 to-cyan-500 enabled:hover:bg-gradient-to-bl focus:ring-4 focus:ring-cyan-300 dark:focus:ring-cyan-800 transition duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Demo
                </a>
              </Button>
              <Button color="violet" appearance="primary">
                <a
                  href={links[item.title].github}
                  className="text-center rounded-lg py-2 px-4 text-white bg-gradient-to-br from-purple-600 to-cyan-500 enabled:hover:bg-gradient-to-bl focus:ring-4 focus:ring-cyan-300 dark:focus:ring-cyan-800 transition duration-300"
                  // className="bg-purple-500 text-white text-center rounded-lg py-2 px-4 transition duration-300 ease-in-out hover:bg-purple-600"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                  {/* <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 0 24 24"
                  width="24px"
                  fill="#000000"
                >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z" />
                </svg> */}
                </a>
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
