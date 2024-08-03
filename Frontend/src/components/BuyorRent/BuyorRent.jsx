import React, { useState, useEffect } from "react";
import { State } from "../../Data/States";
import NoProperty from "../NoProperty/NoProperty";
function BuyorRent() {
  const [state, setState] = useState();
  const [city, setCity] = useState();
  const [cities, setCities] = useState();
  useEffect(() => {
    setCities(State.find((item) => item.state == state)?.district);
  }, [state]);

  const handleGetProperties = (e) => {
    e.preventDefault();
    console.log("Hello");
  };
  return (
    <div className="pt-16 min-w-full md:pt-20  lg:mb-28 xl:mb-20 justify-center flex flex-col items-center ">
      <div className="h-full flex  flex-col md:flex-row md:justify-center md:space-x-8 items-center  w-3/4   mt-16  md:mt-24">
      <div className="flex flex-col md:flex-row justify-start  text-xl">
        <div className="flex space-x-3 mt-7">
          <h1 className="hidden">State :</h1>
          <select
            className="border  border-black w-3/4 py-1 rounded-lg px-1 "
            value={state}
            onChange={(e) => {
              setState(e.target.value);
            }}
          >
            <option selected disabled>
              SELECT STATE
            </option>

            {State?.map((state) => (
              <option>{state.state}</option>
            ))}
          </select>
        </div>
        <div className="flex space-x-3 mt-7">
          <h1 className="hidden">City :</h1>
          <select
            className="border border-black py-1 rounded-lg px-1"
            value={city}
            onChange={(e) => {
              setCity(e.target.value);
            }}
          >
            <option selected disabled>
              SELECT CITY
            </option>
            {cities?.map((item) => (
              <option>{item}</option>
            ))}
          </select>
        </div>
        </div>
        <button 
        className="md:mt-6"
        onClick={handleGetProperties}>
          <div className="flex space-x-2 bg-red-500 active:bg-red-600 mt-8 md:mt-0 px-4 py-2 text-white text-lg md:text-xl font-semibold rounded-lg">
            <h1>Search</h1>
            <img className="h-7 w-7" src="/searchIcon.png" alt="Search Icon" />
          </div>
        </button>
      </div>
      <div className="w-full min-h-min  mt-20 ">
        <div className="w-full ">
          <NoProperty text="No Results Found !"/>
        </div>
      </div>
    </div>
  );
}

export default BuyorRent;
