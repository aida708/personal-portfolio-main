import React from "react";
import { AppText, socialNetwork } from "../Constants";
import Social from "./Social";

// {
//   link: "mailto:myemail@com",
//   icon: FiMail,
//   altimgname: "mail",
// },

// footer {
//   background: rgba(33, 37, 41, 0.8);

//   box-shadow: 0 8px 32px 0 rgba(135, 47, 31, 0.37);
//   backdrop-filter: blur(6px);
//   -webkit-backdrop-filter: blur(6px);
//   border: 1px 0 solid rgba(255, 255, 255, 0.18);
//   color: #fff;
//   padding: 10px;
//   text-align: center;

//   bottom: 0;
//   width: 100%;
// }
// .footer p {
//   font-family: "Share Tech Mono", monospace;
// }
// .footer a {
//   color: #fff;
//   font-family: "Share Tech Mono", monospace;
// }

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
