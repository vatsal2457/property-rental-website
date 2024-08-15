import React, { useEffect, useState } from "react";
import NoProperty from "../NoProperty/NoProperty";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {useDispatch} from 'react-redux'
import {toggleIsLogin} from '../../ReduxStore/isLoginSlice.js'

function UserProperty() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [propertyPresent, setPropertyPresent] = useState(false);
  const [fullname, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phNumber, setPhNumber] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [sellorRent, setSellOrRent] = useState("");
  const [bhkType, setBhkType] = useState("");
  const [area, setArea] = useState("");
  const [floor, setFloor] = useState("");
  const [expectedPrice, setExpectedPrice] = useState("");
  const [expectedRent, setExpectedRent] = useState("");
  const [deposit, setDeposit] = useState("");
  const [ageOfProperty, setAgeOfProperty] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [imageUrl, setImageUrl] = useState([""]);
  const [isDelete, setisDelete] = useState(false)

  const getUserProperty = async() => {

    await axios({
      url: `${import.meta.env.VITE_BACKEND_SERVER_URL}/api/user/yourproperties`,
      method: "GET",
      withCredentials: true,
    }).then(res =>{
      const body = res.data.property;
      setFullName(body.fullname)
      setEmail(body.email)
      setPhNumber(body.phoneNo)
      setPropertyType(body.propertyType)
      setSellOrRent(body.sellOrRent)
      setBhkType(body.bhkType)
      setArea(body.area)
      setFloor(body.floor)
      setExpectedPrice(body.expectedPrice)
      setExpectedRent(body.expectedRent)
      setDeposit(body.deposit)
      setAgeOfProperty(body.ageOfProperty)
      setState(body.state)
      setCity(body.city)
      setAddress(body.address)
      setImageUrl(body.images)
      setPropertyPresent(true);
    }).catch((err) => {
      if(err?.response?.status == 401){
        setPropertyPresent(false);
      }
     setPropertyPresent(false);
    });
  }
  useEffect(()=>{
   getUserProperty(); 
  },[])

const deleteProperty = async(e) => {
  setisDelete(true);
  e.preventDefault();
  await axios({
    url:`${import.meta.env.VITE_BACKEND_SERVER_URL}/api/user/yourproperties/deleteproperty`,
    method:'DELETE',
    withCredentials: true,
  }).then(res =>{
    alert(res?.data?.message)
    setisDelete(false);
    navigate('/')
  }).catch(err=>{
    alert(err?.response?.data?.message)
    setisDelete(false);
  })
}

  return (
    <div className="min-h-screen mb-12 pt-16 md:pt-20 lg:mb-28 xl:mb-20">
    {
      propertyPresent ? 
      <div className="w-full h-auto flex justify-center">
          <div className="w-11/12 md:w-3/4 xl:w-3/5 h-auto flex flex-col items-center bg-white rounded-2xl mt-10 pb-10 xl:mb-20">
          
            <div className="w-11/12 mt-5 md:mt-7 md:w-3/4 grid grid-cols-2  justify-center md:grid-cols-3 gap-2   rounded-xl pb-5  md:pb-0 pt-5 px-2  md:pt-7 md:px-4 bg-slate-200 border border-black ">
              
                {
                  imageUrl.map(item =>(

                    <a href={item} target="_blank" className="">
                      <img src={item} alt="Property Image" className=" min-w-full md:w-fit xl:w-3/4  md:h-3/4 rounded-xl "   />
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
                  <h1 className="font-bold md:text-lg text-base text-center">Name : </h1>
                  <h1 className="md:text-lg text-base text-center break-all">{fullname}</h1>
                </div>
                <div>
                <div className="grid grid-cols-2 w-full bg-slate-300 py-2 rounded-xl">
                  <h1 className="font-bold md:text-lg text-base text-center">Email : </h1>
                  <h1 className="md:text-lg text-base text-center break-all">{email}</h1>
                </div>
                </div>
                <div>
                <div className="grid grid-cols-2 w-full bg-slate-300 py-2 rounded-xl">
                  <h1 className="font-bold md:text-lg text-base text-center">Phone : </h1>
                  <h1 className="md:text-lg text-base text-center break-all">{phNumber}</h1>
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
                  <h1 className="font-bold md:text-lg text-base text-center">Property Type : </h1>
                  <h1 className="md:text-lg text-base text-center break-all">{propertyType}</h1>
                </div>
                <div className="grid grid-cols-2 w-full bg-slate-300 py-2 rounded-xl">
                  <h1 className="font-bold md:text-lg text-base text-center">Sell or Rent : </h1>
                  <h1 className="md:text-lg text-base text-center">{sellorRent}</h1>
                </div>
                <div className="grid grid-cols-2 w-full bg-slate-300 py-2 rounded-xl">
                  <h1 className="font-bold md:text-lg text-base text-center">BHK : </h1>
                  <h1 className="md:text-lg text-base text-center break-all">{bhkType}</h1>
                </div>
                <div className="grid grid-cols-2 w-full bg-slate-300 py-2 rounded-xl">
                  <h1 className="font-bold md:text-lg text-base text-center">Area : </h1>
                  <h1 className="md:text-lg text-base text-center break-all">{area}</h1>
                </div>
                <div className="grid grid-cols-2 w-full bg-slate-300 py-2 rounded-xl">
                  <h1 className="font-bold md:text-lg text-base text-center">No of Floor : </h1>
                  <h1 className="md:text-lg text-base text-center">{floor}</h1>
                </div>
                <div className="grid grid-cols-2 w-full bg-slate-300 py-2 rounded-xl">
                  <h1 className="font-bold md:text-lg text-base text-center">Price : </h1>
                  <h1 className="md:text-lg text-base text-center break-all">{expectedPrice}</h1>
                </div>
                <div className="grid grid-cols-2 w-full bg-slate-300 py-2 rounded-xl">
                  <h1 className="font-bold md:text-lg text-base text-center">Rent : </h1>
                  <h1 className="md:text-lg text-base text-center break-all">{expectedRent}</h1>
                </div>
                <div className="grid grid-cols-2 w-full bg-slate-300 py-2 rounded-xl">
                  <h1 className="font-bold md:text-lg text-base text-center">Deposit : </h1>
                  <h1 className="md:text-lg text-base text-center break-all">{deposit}</h1>
                </div>
                <div className="grid grid-cols-2 w-full bg-slate-300 py-2 rounded-xl">
                  <h1 className="font-bold md:text-lg text-base text-center">Age of Property : </h1>
                  <h1 className="md:text-lg  text-base text-center">{ageOfProperty}</h1>
                </div>
              </div>
            </div>
            <div className="mt-14 flex flex-col  w-full items-start px-4">
              <div className="text-2xl font-bold font-serif ">
                <h1>Address</h1>
              </div>
              <div className="w-full  mt-4 flex flex-col space-y-5">
                <div className="grid grid-cols-2 w-full bg-slate-300 py-2 rounded-xl">
                  <h1 className="font-bold md:text-lg text-base text-center">State : </h1>
                  <h1 className="md:text-lg text-base text-center break-all">{state}</h1>
                </div>
                <div className="grid grid-cols-2 w-full bg-slate-300 py-2 rounded-xl">
                  <h1 className="font-bold md:text-lg text-base text-center">City : </h1>
                  <h1 className="md:text-lg text-base text-center break-all">{city}</h1>
                </div>
                <div className=" grid grid-cols-2 w-full bg-slate-300 py-2 rounded-xl">
                  <h1 className="font-bold md:text-lg text-base text-center">Address : </h1>
                  <h1 className="md:text-lg text-base text-center break-all">{address}</h1>
                </div>
              </div>
            </div>
            <div className="flex mt-8 ">
              <button
              className={`bg-red-500 active:bg-red-600 text-white px-5 py-3 rounded ${isDelete ? 'bg-gray-400 text-black' :""}`}
              disabled ={isDelete}
              onClick={deleteProperty}
              >
                Delete Property
              </button>
            </div>
          </div>        
      </div>
       :
       <div className="-mb-32">
        <NoProperty text="No Properties Listed !" />
      </div> 
    }
      
    </div>
  );
}

export default UserProperty;
