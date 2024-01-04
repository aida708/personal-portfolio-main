import React from "react";
import "./../assets";
import "./../Components";
import { wave } from "./../assets";
import { aboutSection, AppText } from "../Constants";
import * as LottiePlayer from "@lottiefiles/lottie-player";

const AboutMe = () => {
  return (
    <div id="about" className="mt-[150px] ">
      <img src={wave} className="w-screen absolute " alt="#" />
      <div className="w-full bg-purple-500 h-[320px]  justify-center items-center">
        <div className="flex flex-row justify-between absolute md:w-[300px] ">
          <lottie-player
            autoplay
            loop
            mode="bounce"
            src="https://assets10.lottiefiles.com/packages/lf20_w98qte06.json"
            style={{ width: "220px" }}
          />
        </div>

        <h1 className="text-white text-[50px] pt-[20px] font-bold text-center ">
          About <span className="text-black">Me</span>
        </h1>
        <h1 className="w-full text-white text-justify justify-self-center items-center  mt-[-1px] px-10 text-base custom-font-size md:px-60  lg:px-70 mt-[37px] mb-[35px] ">
          {AppText.aboutMeDescripion}
        </h1>
      </div>
      <div className="flex flex-col md:flex-row mt-[-75px] md:px-32  md:mt-[1px]">
        {aboutSection.map((item, index) => (
          <div
            key={index}
            className="flex  relative w-full items-center justify-center flex-col m-2
                group rounded-lg py-3 pt-4"
          >
            <img
              src={item.image}
              alt="#"
              className="w-[230px] rounded-lg h-[170px] object-cover"
            />
            <h1 className="font-bold ">{item.title}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutMe;
