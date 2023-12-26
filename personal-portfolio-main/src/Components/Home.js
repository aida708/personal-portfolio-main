import React from "react";
import "./../Constants";
import { AppText } from "./../Constants";
import "./../assets";
import { homeImage } from "./../assets";
import "./Home.css";
import Typewriter from "typewriter-effect";
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
            {/* <h1 className="text-[40px]  md:text-[60px] font-bold  text-purple-600">
              {AppText.RahulSanap}
            </h1> */}
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
            <h1 className="my-5 text-gray-400">
              Passionate programmer specializing in Web Development. With 1+
              years of experience in React, Java, SpringBoot I love making
              websites that are super user-friendly.
            </h1>
          </div>
          <button className="text-center rounded-lg py-2 px-4 text-white bg-gradient-to-br from-purple-600 to-cyan-500 enabled:hover:bg-gradient-to-bl focus:ring-4 focus:ring-cyan-300 dark:focus:ring-cyan-800 transition duration-300">
            {/* className="hover:z-50 transition-all duration-300 ease-in-out  hover:scale-125 bg-purple-600 p-2 rounded-md text-white"> */}
            <a
              href={require("../assets/cvAidaSufaj.pdf")}
              download={"Aida's Resume"}
              target="_blank"
              rel="noreferrer"
              // className="py-1 md:py-2 lg:py-3 mt-3 lg:mt-5 text-white mx-auto px-4  lg:px-9 bg-blue-600 border-2 w-fit border-blue-500 rounded-3xl  hover:-translate-y-1.5 duration-[350ms] hover:duration-[350ms] hover:bg-blue-800 hover:scale-[1.023] focus:bg-blue-800 sm:text-xl  animate-zoomy"
            >
              Download CV
            </a>
          </button>
        </div>
      </div>
      <div className=" w-full flex justify-center">
        <img src={homeImage} className="w-[200px] md:w-[300px]" />
      </div>
    </div>
  );
};

export default Home;
