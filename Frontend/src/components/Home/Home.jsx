import React from "react";

function Home() {
  return (
    <div className=" min-h-screen w-full pt-16 pb-20  lg:pb-40 lg:pt-24">
      <div className=" mt-8 lg:grid lg:grid-cols-2  lg:items-center ">
        <div className="w-3/5 h-3/4 ml-5 bg-transparent  md:w-2/5 md:h-2/3 lg:w-2/3 lg:h-full">
          <img
            className=" w-full h-full rounded-2xl object-contain"
            src="/home.png"
            alt="home"
          />
        </div>

        <div className="w-full h-auto  mt-11">
          <div className="text-2xl font-extrabold text-white text-center sm:text-3xl xl:text-4xl">
            <h1>Welcome to Property Rental !</h1>
          </div>
          <div className="text-2xl font-bold mt-14 text-right mr-4 text-slate-300 md:text-3xl ">
            <h1>Sell or Rent your Property</h1>
            <h1>on Property Rental ...</h1>
          </div>
        </div>
      </div>

      <div className="text-slate-200 flex flex-col items-center mt-16 lg:mt-20">
        <h1 className="text-2xl font-bold md:text-3xl">
          How to Sell/Rent your Property ?
        </h1>

        <div className="flex flex-col lg:grid lg:grid-cols-3 justify-items-center items-center space-y-5 w-full  text-2xl mt-4">
          <div className="flex flex-col w-3/5 h-full pt-4 px-3 items-center border-black border-2 rounded-3xl mt-6 text-black  bg-slate-200 ">
            <img
              className="w-10 h-10"
              src="/addPropertyIcon.png"
              alt="addProperty"
            />

            <div className="flex flex-col items-center mt-5 pb-5">
              <h1 className="text-xl font-semibold">Locate Add Property</h1>
              <p className="text-base  mt-2 text-center">
                Click on Navbar and click on 'Add Property'
              </p>
            </div>
          </div>
          <div className="flex flex-col w-3/5 h-full pt-4 px-3 items-center border-black border-2 rounded-3xl mt-6 text-black  bg-slate-200">
            <img className="w-10 h-10" src="/formIcon.png" alt="formIcon" />

            <div className="flex flex-col items-center mt-5 pb-5">
              <h1 className="text-xl font-semibold">Add Details</h1>
              <p className="text-base mt-2 text-center">
                Fill all the Details of your Property .
              </p>
            </div>
          </div>
          <div className="flex flex-col w-3/5 h-full pt-4 px-3 items-center border-black border-2 rounded-3xl mt-6 text-black  bg-slate-200">
            <img className="w-10 h-10" src="/submitIcon.png" alt="SubmitIcon" />

            <div className="flex flex-col items-center mt-5 pb-5">
              <h1 className="text-xl font-semibold">Submit</h1>
              <p className="text-base mt-2 text-center">
                Verify Details and Submit .
              </p>
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default Home;
