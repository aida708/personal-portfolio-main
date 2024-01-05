import React, { useRef } from "react";
import { contactusbg, phone } from "../assets";
import { AppText } from "../Constants";
import SectionHeading from "../Shared/SectionHeading";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import emailjs from "@emailjs/browser";

function ContactUs() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_68ghrvq",
        "template_mwuljil",
        form.current,
        "CoJqAB7onYY4pk-F4"
      )
      .then(
        (result) => {
          toast.success("Message sent successfully!", {
            autoClose: 9000,
          });
          console.log(result.text);
          form.current.reset(); // Reset the form fields
          window.location.href = "/home";
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <form
      id="contact"
      className="flex flex-col justify-center mt-5 pt-4 md:pt-16  mt-5 pt-4  sm:mt-10 pt-4"
      ref={form}
      onSubmit={sendEmail}
    >
      <div className="flex flex-row  justify-center ">
        <SectionHeading firstTitle={AppText.Contact} secondTitle={AppText.Us} />
        <img src={phone} className="w-[80px] h-[120px] ml-4" alt="" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 justify-evenly px-10 md:px-44">
        <img
          src={contactusbg}
          className="w-[400px] mr-10"
          alt=""
          style={{ alignSelf: "center" }}
        />
        {/* <Social /> */}
        <div className="w-full">
          <div className="flex flex-col ">
            <label className="text-gray-400 ">Email</label>
            <input
              type="text"
              placeholder="yourname@gmail.com"
              name="email"
              id="user_email"
              // my-4 p-2
              className="border-[2px] px-3 border-purple-300 
              hover:border-purple-500 rounded-md"
            />
          </div>
          {/* <br /> */}
          <div className="flex flex-col">
            <label className="text-gray-400 ">Message</label>
            <textarea
              type="text"
              rows="8"
              placeholder="Type your message here"
              name="message"
              id="user_message"
              className="border-[1.5px] px-2 hover:border-purple-500 border-purple-300 rounded-md"
            />
            <button
              // className="transition-all ease-in-out hover:scale-110 bg-purple-500 flex flex-row items-center justify-center text-[14px]  py-1 mt-5 text-white  rounded-md">
              className="text-center rounded-lg py-2 mt-5 px-4 text-white bg-gradient-to-br from-purple-600 to-cyan-500 enabled:hover:bg-gradient-to-bl focus:ring-4 focus:ring-cyan-300 dark:focus:ring-cyan-800 transition duration-300"
            >
              Send Email
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}

export default ContactUs;
