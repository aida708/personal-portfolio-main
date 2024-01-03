import React from "react";
import "./../assets";
import { skill } from "./../assets";
import "./../Constants";
import { AppText, skillsList } from "./../Constants";

const Skills = () => {
  return (
    <div className="mt-10" id="skills">
      <div className="flex flex-row justify-center items-center p-5 m-5 mt-15  ">
        <img
          src={skill}
          className="w-[40px] hover:animate-bounce"
          alt="Skill Icon"
        />
        <h1 className="text-[40px] font-bold">
          {AppText.Skills}
          <span className="text-purple-600">{AppText.Expertise}</span>
        </h1>
      </div>
      <div className="flex flex-col md:flex-row justify-evenly px-20 md:px-8 mt-8 mb-20">
        <div className="grid grid-cols-4 md:grid-cols-5 gap-8 items-center">
          {skillsList.map((item, index) => (
            <div
              className="w-[100px] h-[100px] md:w-[160px] md:h-[160px] transition ease-in-out delay-100 hover:scale-125 bg-purple-50 p-3 rounded-full flex items-center justify-center"
              key={index}
            >
              <img
                src={item.icon}
                className="max-w-full max-h-full object-contain"
                alt={`Skill ${index + 1}`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
