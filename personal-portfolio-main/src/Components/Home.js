import React from "react";
import "./../Constants";
import { AppText } from "./../Constants";
import "./../assets";
import { homeImage } from "./../assets";
import "./Home.css";
import Typewriter from "typewriter-effect";
import { FaCloudDownloadAlt } from "react-icons/fa";
// import

const Home = () => {
  return (
    <div
      id="home"
      className="flex p-[20px] md:px-20 justify-between flex-col md:flex-row  pt-20"
    >
      <div className="flex w-full flex-row  justify-end">
        <div className="flex w-full flex-col  items-start content-end m-5">
          <h1 className="text-[35px] md:text-[40px] font-bold  ">
            {AppText.hello}
          </h1>
          <div className="flex">
            <h1 className="text-[35px]  md:text-[40px]  font-bold mr-3">
              {AppText.Iam}
            </h1>

            <Typewriter
              options={{
                strings: [
                  AppText.aida,
                  AppText.FrontedDeveloper,
                  // AppText.UIUXDesigner,
                  AppText.BackendDeveloper,
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
          <div>
            <h1 className="my-5 text-gray-400 text-base md:text-md  lg:text-lg xl:text-xl">
              With 1+ year of experience in React, Java, Spring Boot I love
              making websites that are super user-friendly.
            </h1>
          </div>
          <button>
            {/* className="hover:z-50 transition-all duration-300 ease-in-out  hover:scale-125 bg-purple-600 p-2 rounded-md text-white"> */}
            <a
              href={require("../assets/cvAidaSufaj.pdf")}
              download={"Aida's Resume"}
              target="_blank"
              rel="noreferrer"
              className="text-center rounded-lg py-2 px-4 text-white bg-gradient-to-br from-purple-600 to-cyan-500 enabled:hover:bg-gradient-to-bl focus:ring-4 focus:ring-cyan-300 dark:focus:ring-cyan-800 transition duration-300 inline-flex items-center"
              style={{ textDecoration: "none" }}

              // className="py-1 md:py-2 lg:py-3 mt-3 lg:mt-5 text-white mx-auto px-4  lg:px-9 bg-blue-600 border-2 w-fit border-blue-500 rounded-3xl  hover:-translate-y-1.5 duration-[350ms] hover:duration-[350ms] hover:bg-blue-800 hover:scale-[1.023] focus:bg-blue-800 sm:text-xl  animate-zoomy"
            >
              Download My CV
              <FaCloudDownloadAlt style={{ marginLeft: "6px" }} />
            </a>
          </button>
        </div>
      </div>

      <div className="flex justify-center items-center ">
        <div className=" md:w-1/2  flex justify-center items growAndShrink">
          <svg
            className="home__blob"
            viewBox="0 0 200 187"
            xmlns="http://www.w3.org/2000/svg"
            xlink="http://www.w3.org/1999/xlink"
          >
            <mask id="mask0" mask-type="alpha">
              <path
                d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 165.547 
                    130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 129.362C2.45775 
                    97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 -0.149132 97.9666 
                    0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"
              />
            </mask>
            <g mask="url(#mask0)">
              <path
                d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 
                    165.547 130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 
                    129.362C2.45775 97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 
                    -0.149132 97.9666 0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"
              />

              <image
                className="home__blob-img"
                href={homeImage}
                // y='25'
                // x='-115'
                y="2"
                x="1"
              />
            </g>
          </svg>
          {/* 
          <img
            src={homeImage}
            className="auto-transform-image rounded-image w-300 hidden sm:block"
            alt="myImg"
          /> */}
        </div>
      </div>
    </div>
  );
};

export default Home;
