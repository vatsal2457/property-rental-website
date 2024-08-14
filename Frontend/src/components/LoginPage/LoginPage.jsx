import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { toggleIsLogin } from "../../ReduxStore/isLoginSlice";
import {setUsername} from '../../ReduxStore/userDetailsSlice.js'
import { NavLink, useNavigate } from "react-router-dom";
function LoginPage() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const handleLoginUser = async (e) => {

    e.preventDefault();

    const response = await axios({
      method: "post",
      url: `${import.meta.env.VITE_BACKEND_SERVER_URL}/api/user/login`,
      data: {
        email: email,
        password: password,
      },
      withCredentials:true
    })
    .catch(err => {
      alert(err?.response?.data?.message)
    })

    if(response){     
      const data = response?.data?.user[0];
      localStorage.setItem('token',response?.data?.token);
      localStorage.setItem('name',data.name)
      dispatch(toggleIsLogin())
      dispatch(setUsername(localStorage.getItem('name')))
      alert(response?.data?.message)
      navigate('/');
    } 
    
  };
  return (
    <div className="pt-16 md:pt-20 w-full flex justify-center items-center  ">
      <div className="w-11/12 sm:w-3/4 md:w-1/2 xl:w-1/3 h-auto bg-white  mb-20 md:mb-36  mt-16 pb-7 rounded-xl px-5">
        <div className="w-full flex justify-center text-3xl md:text-4xl  font-extrabold font-serif mt-6">
          Login Page !
        </div>
        <div className="mt-7 text-base sm:text-lg md:text-xl flex flex-col  sm:items-center lg:items-start  ">
          <div className="flex  space-x-12 mt-7 md:mt-9">
            <h1 className="font-bold text-base md:text-2xl">Email :</h1>
            <div>
              <input
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                autoComplete="off"
                className="border border-black px-2 py-1 rounded"
                placeholder="Enter Email"
                type="text"
              />
            </div>
          </div>
          <div className="flex  space-x-3 mt-7 md:mt-9">
            <h1 className="font-bold text-base md:text-2xl">Password :</h1>
            <div>
              <input
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                autoComplete="off"
                className="border border-black px-2 py-1 rounded"
                placeholder="Enter Password"
                type="password"
              />
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center items-center mt-7 md:mt-10">
          <button
            onClick={handleLoginUser}
            className="bg-blue-500 active:bg-blue-600 border border-black text-lg md:text-2xl px-4 py-1 text-white rounded-xl"
          >
            Login
          </button>
        </div>
        <div className="mt-5 md:mt-8 text-base md:text-xl flex justify-center items-center">
          <h1>
            Not Signup Yet ?{" "}
            {
              <NavLink to="/signup" className="text-red-500">
                Sign Up{" "}
              </NavLink>
            }
          </h1>
        </div>
      </div>
      
    </div>
  );
}

export default LoginPage;
