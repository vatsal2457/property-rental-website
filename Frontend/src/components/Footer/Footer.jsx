import React from "react";
import { NavLink } from "react-router-dom";
function Footer() {
  return (
    <div className=" border border-black bg-slate-300 h-36  lg:fixed w-full bottom-0  flex-col grid grid-cols-2 lg:h-28 xl:h-20 lg:flex lg:flex-row  text-xs md:text-sm lg:text-base">
      <div className=" pl-2  w-full flex flex-col justify-center xl:pl-4 ">
        <h1>Copyright ©2024 :</h1>
        <h1 className="">Designed By Aryan Kesarkar</h1>
      </div>
      <div className=" w-full  pl-1 flex flex-col justify-center ">
        <NavLink
          to=""
          className={({ isActive }) =>
            `${isActive ? "text-red-600 font-medium" : ""} `
          }
        >
          <li>Home</li>
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `${isActive ? "text-red-600 font-medium" : ""} `
          }
        >
          <li>About Us</li>
        </NavLink>
      </div>
      <div className=" w-full  pl-2 flex flex-col justify-center ">
        <h1>Contact Us :</h1>
        <h1>aryankesarkar03@gmail.com</h1>
      </div>
      <div className=" w-full pl-1 flex flex-col justify-evenly items-center text-base md:text-lg">
        <h1>Follow Us</h1>
        <div className="flex justify-evenly w-2/3 pb-2">
          <NavLink
            to="https://www.instagram.com/aryankesarkar_28/"
            target="_blank"
          >
            <img className="h-6 w-6" src="/instagram.png" alt="instagram" />
          </NavLink>
          <NavLink
            to="http://www.linkedin.com/in/aryan-kesarkar-254026235"
            target="_blank"
          >
            <img className="h-6 w-6" src="/linkedin.png" alt="linkedin" />
          </NavLink>
          <NavLink to="https://github.com/Aryan-Kesarkar-2803" target="_blank">
            <img className="h-6 w-6" src="/github.png" alt="github" />
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Footer;
