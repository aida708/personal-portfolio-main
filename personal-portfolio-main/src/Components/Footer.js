import React from "react";
import { AppText, socialNetwork } from "../Constants";
import Social from "./Social";

const Footer = () => {
  return (
    <div className="bg-gray-200  p-5 items-center flex flex-col  mt-10">
      <div className="flex gap-4">
        <Social />
      </div>
      <h1 className="text-gray-500 text-[12px] mt-4">
        {AppText.copywriteText}
      </h1>
    </div>
  );
};

export default Footer;
