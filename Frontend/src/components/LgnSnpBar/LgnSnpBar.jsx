import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { toggleLoginLogoutbar } from "../../ReduxStore/loginLogoutBar";
import { toggleIsLogin } from "../../ReduxStore/isLoginSlice";
import axios from 'axios'


function loginSignupBar() {
  const navigate = useNavigate()
  const loginLogoutBarOpen = useSelector((state) => state.loginLogoutBar.value);
  const username = useSelector(state => state.userDetails.username)
  const dispatch = useDispatch();
  const isLogin = useSelector((state) => state.isLogin.value);
  
  const handleLogoutUser = async(e) =>{
      e.preventDefault();

       await axios({
         method:'GET',
         url:`${import.meta.env.VITE_BACKEND_SERVER_URL}/api/user/logout`,
         withCredentials:true,
       })
       .then((res)=>{
       localStorage.removeItem('name')
       localStorage.removeItem('_id')
       localStorage.removeItem('token')
       dispatch(toggleIsLogin())
       dispatch(toggleLoginLogoutbar())
       navigate('/')
       console.log(res)
       alert(res?.data?.message)
       })
       .catch((err)=>{
        localStorage.removeItem('name')
        localStorage.removeItem('_id')
        localStorage.removeItem('token')
        dispatch(toggleIsLogin())
        dispatch(toggleLoginLogoutbar())
        navigate('/')
        alert(err?.response?.data?.message)
       })
       
    
     
      
      
     
    
  }
  
  return (
    <div
      className={`w-2/5 h-auto md:w-1/3 lg:w-1/4 xl:w-1/6  fixed top-0 text-base md:text-lg xl:text-xl  right-0 mt-16 md:mt-20  pl-3 transition-transform  ease-in-out  bg-slate-900 text-white font-serif  ${
        loginLogoutBarOpen
          ? "duration-500 translate-x-0"
          : " duration-500 translate-x-full"
      }`}
    >
      <div className="  w-full h-full  flex flex-col justify-evenly pb-3">
        {isLogin ? (
          <div className="  border-b-white font-bold text-center border border-black w-full pt-2  ">
            Welcome {username}
          </div>
        ) : (
          <div className="hover:text-amber-600  border-b-white  border border-black w-full pt-2  ">
            <NavLink
              to="/login"
              onClick={() => {
                dispatch(toggleLoginLogoutbar());
              }}
            >
              Login
            </NavLink>
          </div>
        )}

        {isLogin ? (
          <div className="text-red-500  border-b-white  text-center border border-black w-full pt-2  ">
            <NavLink
              onClick={handleLogoutUser}
            >
              Logout
            </NavLink>
          </div>
        ) : (
          <div className="hover:text-amber-600  border-b-white   border border-black w-full pt-2  ">
            <NavLink
              to="/signup"
              onClick={() => {
                dispatch(toggleLoginLogoutbar());
              }}
            >
              Sign Up
            </NavLink>
          </div>
        )}
      </div>
    </div>
  );
}

export default loginSignupBar;
