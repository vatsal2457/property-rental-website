import React, { useState, useEffect } from "react";
import { State } from "../../Data/States";
import NoProperty from "../NoProperty/NoProperty";
import axios from "axios";

function BuyorRent() {
  const [state, setState] = useState();
  const [city, setCity] = useState();
  const [cities, setCities] = useState();
  const [propertyFound, setPropertyFound] = useState(false);
  const [properties, setProperties] = useState([])
  const [property, setProperty] = useState({})
  const [propertyOpen, setPropertyOpen] = useState(false)
  useEffect(() => {
    setCities(State.find((item) => item.state == state)?.district);
  }, [state]);

  const handleGetProperties = async(e) => {
    e.preventDefault();
  
    await axios({
      url:`${import.meta.env.VITE_BACKEND_SERVER_URL}/api/user/getproperties`,
      method:'get',
      params: {
        state:state,
        city:city
      },
    }).then(res =>{
        setProperties(res?.data?.properties)
        setPropertyFound(true)
    }).catch(err =>{
      alert(err?.response?.data?.message)
      setPropertyFound(false);
    })

  };

  const handleOpenPropertyTab = async(item) =>{
    setProperty(item);
    setPropertyOpen(true);
  }
  const handleClosePopUpTab = () =>{
    setPropertyOpen(false);
  }
  return (
    <div className="pt-16 min-w-full md:pt-20  lg:mb-28 xl:mb-20 justify-center flex flex-col items-center ">
      <div className="h-full flex  flex-col md:flex-row md:justify-center md:space-x-8 items-center w-11/12   mt-0  md:mt-10">
      <div className="flex   items-center  text-base md:text-lg xl:text-xl">
        <div className="flex space-x-3 mt-7">

          <select
            className="border  border-black w-3/5 md:w-3/4 py-1 rounded-lg px-1 "
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
      {
      propertyOpen ?
      <div className={`w-11/12 xl:w-1/2 h-auto flex flex-col items-center bg-white mb-10 rounded-2xl mt-10 pb-10 
        ${propertyOpen ? "visible": "hidden"} mx-auto`}>
      <div className="w-full flex justify-end">
        <div 
        className="w-10 h-10 mt-3 mr-2 hover:border hover:border-black"
        onClick={handleClosePopUpTab}
        >
          <img src="./close.png" alt="close icon" className=" " />
        </div>
      </div>
        <div className="w-11/12   grid grid-cols-2  justify-center md:grid-cols-3 gap-2  mt-0  rounded-xl pb-5 md:pb-0 pt-5 px-2  md:pt-7 md:px-4 bg-slate-200 border border-black  ">
          
            {
              property?.images?.map((item,index) =>(
  
                <a href={item} target="_blank" className="" key={index}>
                  <img src={item} alt="Property Image" className=" min-w-full md:w-fit xl:w-3/4  md:h-3/4 rounded-xl "/>
                </a>
                
              ))
            }
         
        </div>
        <div className="mt-14 flex flex-col  w-full items-start px-4">
          <div className="text-2xl font-bold font-serif ">
            <h1>Owner's Details</h1>
          </div>
          <div className="w-full  mt-4 flex flex-col space-y-5">
            <div className="grid grid-cols-2 w-full bg-slate-300 py-2 rounded-xl">
              <h1 className="font-bold text-lg text-center">Name : </h1>
              <h1 className="text-lg text-center">{property.fullname}</h1>
            </div>
            <div>
            <div className="grid grid-cols-2 w-full bg-slate-300 py-2 rounded-xl">
              <h1 className="font-bold text-lg text-center">Email : </h1>
              <h1 className="text-lg text-center">{property.email}</h1>
            </div>
            </div>
            <div>
            <div className="grid grid-cols-2 w-full bg-slate-300 py-2 rounded-xl">
              <h1 className="font-bold text-lg text-center">Phone : </h1>
              <h1 className="text-lg text-center">{property.phoneNo}</h1>
            </div>
            </div>
          </div>
        </div>
        <div className="mt-14 flex flex-col  w-full items-start px-4">
          <div className="text-2xl font-bold font-serif ">
            <h1>Property Details</h1>
          </div>
          <div className="w-full  mt-4 flex flex-col space-y-5">
            <div className="grid grid-cols-2 w-full bg-slate-300 py-2 rounded-xl">
              <h1 className="font-bold text-lg text-center">Property Type : </h1>
              <h1 className="text-lg text-center">{property.propertyType}</h1>
            </div>
            <div className="grid grid-cols-2 w-full bg-slate-300 py-2 rounded-xl">
              <h1 className="font-bold text-lg text-center">Sell or Rent : </h1>
              <h1 className="text-lg text-center">{property.sellOrRent}</h1>
            </div>
            <div className="grid grid-cols-2 w-full bg-slate-300 py-2 rounded-xl">
              <h1 className="font-bold text-lg text-center">BHK : </h1>
              <h1 className="text-lg text-center">{property.bhkType}</h1>
            </div>
            <div className="grid grid-cols-2 w-full bg-slate-300 py-2 rounded-xl">
              <h1 className="font-bold text-lg text-center">Area : </h1>
              <h1 className="text-lg text-center">{property.area}</h1>
            </div>
            <div className="grid grid-cols-2 w-full bg-slate-300 py-2 rounded-xl">
              <h1 className="font-bold text-lg text-center">No of Floor : </h1>
              <h1 className="text-lg text-center">{property.floor}</h1>
            </div>
            <div className="grid grid-cols-2 w-full bg-slate-300 py-2 rounded-xl">
              <h1 className="font-bold text-lg text-center">Price : </h1>
              <h1 className="text-lg text-center">{property.expectedPrice}</h1>
            </div>
            <div className="grid grid-cols-2 w-full bg-slate-300 py-2 rounded-xl">
              <h1 className="font-bold text-lg text-center">Rent : </h1>
              <h1 className="text-lg text-center">{property.expectedRent}</h1>
            </div>
            <div className="grid grid-cols-2 w-full bg-slate-300 py-2 rounded-xl">
              <h1 className="font-bold text-lg text-center">Deposit : </h1>
              <h1 className="text-lg text-center">{property.deposit}</h1>
            </div>
            <div className="grid grid-cols-2 w-full bg-slate-300 py-2 rounded-xl">
              <h1 className="font-bold text-lg text-center">Age of Property : </h1>
              <h1 className="text-lg text-center">{property.ageOfProperty}</h1>
            </div>
          </div>
        </div>
        <div className="mt-14 flex flex-col  w-full items-start px-4">
          <div className="text-2xl font-bold font-serif ">
            <h1>Address</h1>
          </div>
          <div className="w-full  mt-4 flex flex-col space-y-5">
            <div className="grid grid-cols-2 w-full bg-slate-300 py-2 rounded-xl">
              <h1 className="font-bold text-lg text-center">State : </h1>
              <h1 className="text-lg text-center">{property.state}</h1>
            </div>
            <div className="grid grid-cols-2 w-full bg-slate-300 py-2 rounded-xl">
              <h1 className="font-bold text-lg text-center">City : </h1>
              <h1 className="text-lg text-center">{property.city}</h1>
            </div>
            <div className=" grid grid-cols-2 w-full bg-slate-300 py-2 rounded-xl">
              <h1 className="font-bold text-lg text-center">Address : </h1>
              <h1 className="text-lg text-center">{property.address}</h1>
            </div>
          </div>
        </div>
  </div>
      :
      <div className="w-full min-h-min  mt-20 ">
        {
          propertyFound ?
          <div> 
          <div className="mb-10 w-full  flex flex-col md:grid md:grid-cols-3  justify-center items-center">
            {
              properties.map(item => (
                <div 
                className=" h-auto w-3/4 hover:bg-gray-700 bg-gray-900 text-sm md:text-lg rounded-xl flex flex-col items-center justify-self-center py-5 mb-5"
                onClick={()=>{handleOpenPropertyTab(item)}}

                >
                  <img src={item.images[0]} alt="property images" className="w-1/3" />
                  <div className="mt-5 w-11/12 grid grid-cols-2  bg-white rounded  ">
                    <h1 className="text-center font-bold">Property Type :</h1>
                    <h1 className="text-center">{item.propertyType}</h1>
                  </div>
                  <div className="mt-1 w-11/12 px-3 grid grid-cols-2 bg-white rounded ">
                    <h1 className="text-center font-bold">Rent / Sell :</h1>
                    <h1 className="text-center">{item.sellOrRent}</h1>
                  </div>
                  {
                    item.sellOrRent =='sell' ?
                    <div className="mt-1 w-11/12 px-3 grid grid-cols-2 bg-white rounded ">
                    <h1 className="text-center font-bold">Price :</h1>
                    <h1 className="text-center">{item.expectedPrice}</h1>
                  </div>
                  :
                  <div className="mt-1 w-11/12 px-3 grid grid-cols-2 bg-white rounded ">
                    <h1 className="text-center">Rent :</h1>
                    <h1 className="text-center">{item.expectedRent}</h1>
                  </div>
                  }
                </div>
              ))
            }
          </div> 
          {/* pop up tab */}
          
          </div>
          :
          <div className="w-full ">
          <NoProperty text="No Results Found !"/>
        </div>
        }
      </div> 
      }
    </div>
  );
}

export default BuyorRent;


 
