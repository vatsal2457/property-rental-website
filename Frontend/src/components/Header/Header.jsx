import React from "react";
import { NavLink, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import SideBar from "../SideBar/SideBar";
import { toggleLoginLogoutbar } from "../../ReduxStore/loginLogoutBar";
import LoginLogoutBar from '../LgnLgoBar/LgnLgoBar'
import { toggleSidebar } from "../../ReduxStore/sidebarSlice";
function Header() {
  const dispatch = useDispatch();
  return (
    <div>
      <div className="flex border w-full border-black  bg-slate-300 h-16 md:h-20 fixed ">
        <div className="flex items-center w-2/5 md:w-1/3 xl:w-1/3 xl:space-x-6  ">
          <div className=" flex items-center active:border active:border-black justify-center ml-2 md:ml-4 xl:ml:6">
            <NavLink
              onClick={(e) => {
                e.preventDefault();
                dispatch(toggleSidebar());
              }}
            >
              <img
                src="/sidebar.png"
                alt="sidebar"
                className="h-6 w-6  md:h-10 md:w-10 xl:h-12 xl:w-12"
              />
            </NavLink>
          </div>
          <div className="flex items-center  w-full h-full space-x-3 md:space-x-6 lg:space-x-3">
            <img
              className="h-7 w-7  md:h-10 md:w-10 xl:h-12 xl:w-12 xl:ml-2 ml-2"
              src="/HomeIcon.png"
              alt="Home Icon"
            />

            <div className="text-md font-bold md:text-2xl lg:text-2xl xl:text-3xl  ">
              <h1>Property Rentals</h1>
            </div>
          </div>
        </div>
        <div className="flex justify-evenly md:justify-evenly  sm:justify-evenly font-normal  text-base md:text-xl w-1/3 items-center  md:w-1/2   ">
          <div className="hidden md:block">
            <NavLink
              className={({ isActive }) => `
              ${isActive ? "text-red-600 font-medium" : ""} 
            `}
              to="/"
            >
              <h1>Home</h1>
            </NavLink>
          </div>
          <div>
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-red-600 font-medium" : ""
              }
              to="/buyorrent"
            >
              <h1>Buy / Rent</h1>
            </NavLink>
          </div>
        </div>
        <div className="flex items-center justify-end  w-auto">
          {
            <NavLink
            onClick={(e)=>{
              e.preventDefault()
              dispatch(toggleLoginLogoutbar())
            }}
            >
              <img 
              src="/notLogin.png" 
              className="w-9 h-9  ml-10 md:ml-20 lg:w-12 lg:h-12  active:shadow-xl"
              alt="not login photo"  />
            </NavLink>


          }
        </div>
      </div>
      <SideBar />
      <LoginLogoutBar/>
    </div>
  );
}

export default Header;
