import React from "react";

function About() {
  return (
    <div className="pt-16 md:pt-20 w-full pb-10 md:pb-28  ">
      <div className="w-full min-h-screen flex flex-col md:grid md:grid-cols-2  justify-center items-center ">
        <div className="mt-14 md:mt-0 flex justify-center ">
          <img 
          src="profile.png" 
          alt="Profile Photo" 
          className="w-56 h-56 md:w-1/2 md:h-1/2 rounded-2xl"
          />
        </div>
        <div className="bg-white border rounded-2xl flex flex-col  border-black w-4/5 mt-10 text-lg md:text-2xl py-10 px-3">
        <h1 className="font-bold text-xl md:text-4xl font-serif"> Hello!</h1>
        <div className="mt-4 flex space-x-2">
        <h1> I am </h1><h1 className="font-bold">Aryan Kesarkar</h1>
        </div>
        <p className="mt-8">I am currently pursuing a degree in Computer Engineering from Pune University.</p>
        <p className="mt-8">My passion lies in the world of development, where I thrive on creating innovative solutions and exploring new technologies.</p>
        <p className="mt-8">With a strong foundation in computer engineering principles and a keen interest in development, I am dedicated to bringing cutting-edge ideas to life and continuously learning in this ever-evolving field.</p>
          
        </div>
      </div>
    </div>
  );
}

export default About;
