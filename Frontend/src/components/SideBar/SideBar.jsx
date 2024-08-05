import React from "react";
import { NavLink } from "react-router-dom";
import { toggleSidebar } from "../../ReduxStore/sidebarSlice";

import { useDispatch ,useSelector} from "react-redux";
function SideBar() {
  const sidebarOpen = useSelector((state) => state.sidebar.value)
  const dispatch = useDispatch()
  
  return (
    <div
      className={`w-1/2 h-1/3 md:w-1/4 xl:w-1/6 fixed  top-0 text-base md:text-lg xl:text-xl  left-0 mt-16 pl-3 transition-transform  ease-in-out  bg-slate-900 text-white font-serif opacity-95 ${
        sidebarOpen
          ? "duration-500 translate-x-0"
          : " duration-500 -translate-x-full"
      }`}
    >
      <div className="  w-full h-full  flex flex-col justify-evenly ">
        <div className="hover:text-amber-600  border-b-white  border border-black w-full   ">
          <NavLink
          to="/"
          onClick={()=>{dispatch(toggleSidebar())}}
          >Home</NavLink>
        </div>
        <div className="hover:text-amber-600  border-b-white   border border-black w-full  ">
          <NavLink
          to="/addproperty"
          onClick={()=>{dispatch(toggleSidebar())}}
          >Add Property +</NavLink>
        </div>
        <div className="hover:text-amber-600  border-b-white   border border-black w-full  ">
          <NavLink
          to="/userproperties"
          onClick={()=>{dispatch(toggleSidebar())}}
          >Your Properties</NavLink>
        </div>
        <div className="hover:text-amber-600  border-b-white   border border-black w-full  ">
          <NavLink
          to="/about"
          onClick={()=>{dispatch(toggleSidebar())}}
          >About Us</NavLink>
        </div>
        
      </div>
    </div>
  );
}

export default SideBar;
