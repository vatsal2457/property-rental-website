import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function SignupPage() {
  const navigate = useNavigate()
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignupUser = async (e) => {
    e.preventDefault();
    if(name==''){
       alert('Please fill name')
    }
    else if(email==''){
      alert('Please fill Email')
    }
    else if(password==''){
      alert('Please fill Password')
    }
    else{
     const response =  await axios({
       url: `${import.meta.env.VITE_BACKEND_SERVER_URL}/api/user/signup`,
       method: "post",
       data: {
         name: name,
         email: email,
         password: password,
       },
     })
     .catch(err=>{
      alert(err?.response?.data?.message)
     })

     if(response){
     alert(response?.data?.message);
     setName('')
     setEmail('')
     setPassword('')
     navigate('/login')
     }
  }
};

  return (
    <div className="pt-16 md:pt-20 w-full flex flex-col justify-center items-center  ">
      <div className="w-11/12 sm:w-3/4 md:w-1/2 xl:w-1/3 h-auto bg-white  mb-20 md:mb-36  mt-16 pb-7 rounded-xl px-5">
        <div className="w-full flex justify-center text-3xl md:text-4xl  font-extrabold font-serif mt-6">
          Signup Page !
        </div>
        <div className="mt-12 text-base sm:text-lg md:text-xl flex flex-col  sm:items-center lg:items-start  ">
          <div className="flex   space-x-11">
            <h1 className="font-bold text-lg md:text-2xl">Name :</h1>
            <div>
              <input
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                autoComplete="off"
                className="border border-black px-2 py-1 rounded"
                placeholder="Enter Name"
                type="text"
              />
            </div>
          </div>
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
        <div className=" w-full flex justify-center items-center mt-7 md:mt-10">
          <button
            onClick={handleSignupUser}
            className="bg-blue-500 active:bg-blue-600 border border-black text-lg md:text-2xl px-4 py-1 text-white rounded-xl"
          >
            SignUp
          </button>
        </div>
      </div>
      
    </div>
  );
}

export default SignupPage;
