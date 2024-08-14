import React, { useEffect, useState } from "react";
import { State } from "../../Data/States";
import axios from 'axios'
import { useNavigate } from "react-router-dom";


function AddProperty() {
  const navigate = useNavigate()


  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [phNumber, setphNumber] = useState('');
  const [sellOrRent, setSellOrRent] = useState('');
  const [propertyType, setPropertyType] = useState('');
  const [bhkType, setBhkType] = useState('');
  const [area, setArea] = useState('');
  const [floor, setFloor] = useState('0');
  const [state, setState] = useState('');
  const [city, setCity] = useState('');
  const [address, setAddress] = useState('');
  const [price, setPrice] = useState('');
  const [rent, setRent] = useState('');
  const [age, setAge] = useState('');
  const [images, setImages] = useState([]);
  const [cities, setCities] = useState();
  const [deposit, setDeposit] = useState('');
  const [files, setFiles] = useState([]);
  const [isDisabled, setIsDisabled] = useState(false);
  const [propertyUploaded, setPropertyUploaded] = useState(true);
  
  useEffect(() => {
    setCities(State.find((item) => item.state == state)?.district);
  }, [state]);

const handleIsPropertyPresent = async() =>{
  await axios({
    url: `${import.meta.env.VITE_BACKEND_SERVER_URL}/api/user/yourproperties`,
    method: "GET",
    withCredentials: true,
  }).then(res =>{
    setPropertyUploaded(true);
  })
  .catch(err=>{
    setPropertyUploaded(false);
  })
}

useEffect(()=>{
  handleIsPropertyPresent();
},[])

const handleSubmitProperty = async() =>{

  setIsDisabled(true);

  if(
    fullname =="" ||
    email =="" ||
    phNumber =="" ||
    propertyType =="" ||
    sellOrRent == "" ||
    bhkType =="" ||
    area =="" ||
    floor =="" ||
    (rent == "" && price == "") ||
    age =="" ||
    state =="" ||
    city =="" ||
    address ==""
  ){
    alert('Fill all details')
    setIsDisabled(false);
    return;
  }

  const formData = new FormData();

  for(let i=0 ; i<files.length; i++){
    formData.append('propertyImage', files[i]);
  }

  formData.append('fullname',fullname)
  formData.append('email',email)
  formData.append('phNumber',phNumber)
  formData.append('propertyType',propertyType)
  formData.append('sellOrRent',sellOrRent)
  formData.append('bhkType',bhkType)
  formData.append('area',area)
  formData.append('floor',floor)
  formData.append('rent',rent)
  formData.append('price',price)
  formData.append('age',age)
  formData.append('state',state)
  formData.append('city',city)
  formData.append('address',address)
  formData.append('deposit', deposit)

  await axios({
    url:`${import.meta.env.VITE_BACKEND_SERVER_URL}/api/user/addProperty`,
    method:'POST',
    withCredentials:true,
    data: formData
  })
    .then((res)=>{
      handleResetForm();
      navigate('/')
      alert(res.data.message)
    })
    .catch(err => {
      alert(err?.response?.data?.message)
    })
    
    setIsDisabled(false);

}

  const handleResetForm = () => {
    setFullname("");
    setEmail("");
    setphNumber("");
    setSellOrRent("");
    setPropertyType("");
    setBhkType("");
    setArea("");
    setFloor("");
    setState("");
    setCity("");
    setAddress("");
    setPrice("");
    setAge("");
    setCities();
  };

  const handleImages = async(e) =>{
    e.preventDefault();
    const imgArray = Array.from(e.target.files);
    if(imgArray.length > 5){
      alert('You can only select upto 5 images')
      return;
    }
    setFiles(e.target.files)
    const images = imgArray.map(item => URL.createObjectURL(item))
    setImages(images);
  }



  return (
    <div>
      {
      propertyUploaded ? 
        <div className="text-2xl md:text-3xl xl:text-4xl font-bold text-black pt-16 md:pt-20 flex flex-col items-center justify-center h-72">
          <div className="flex flex-col justify-center  items-center">
          <h1>You Have a Property Uploaded !</h1>
          <h1 className="text-base md:text-lg xl:text-xl text-slate-300 mt-1 md:mt-3">( You can upload only 1 Property )</h1>
          </div>
        </div>
      :
    <div className="pt-16 md:pt-20 flex justify-center ">
      <div className=" flex flex-col text-base md:text-xl lg:text-xl  mt-10 mb-10 md:mb-28 pb-7  w-11/12 md:w-4/6 lg:w-3/4 px-4 py-4 rounded-xl  bg-white border border-black">
        <div className="text-3xl md:text-4xl border-b border-black font-bold font-serif ">
          <h1>Enter Details !</h1>
        </div>
        <div className="py-10  lg:grid lg:grid-cols-2">
          <div>
            <div className="text-2xl md:text-3xl transparent font-bold pb-5 text-slate-500 underline decoration-black">
              <h1>Your Details</h1>
            </div>
            <div className="flex flex-col  items-start mt-7">
              <div className="flex space-x-3">
                <h1>Full Name :</h1>
                <input
                  className="border border-black rounded-md px-1 py-1 "
                  placeholder="Enter Full Name"
                  required
                  type="text"
                  value={fullname}
                  onChange={(e) => {
                    setFullname(e.target.value);
                  }}
                />
              </div>
              <div className="flex space-x-3 mt-7">
                <h1>Email:</h1>
                <input
                  className="border border-black rounded-md px-1 py-1 "
                  placeholder="Enter Email"
                  type="text"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </div>
              <div className="flex space-x-3 mt-7">
                <h1>Phone No. :</h1>
                <input
                  className="border border-black rounded-md px-1 py-1"
                  placeholder="Enter Phone Number"
                  required
                  type="text"
                  value={phNumber}
                  onChange={(e) => {
                    setphNumber(e.target.value);
                  }}
                />
              </div>
            </div>
          </div>
          <div className="mt-16 lg:mt-0 ">
            <div className="text-2xl md:text-3xl font-bold pb-5 text-slate-500 underline decoration-black">
              <h1>Property Details</h1>
            </div>
            <div className="flex flex-col  items-start mt-7">
              <div className="flex space-x-3 ">
                <h1>Property Type :</h1>
                <select
                  className="border border-black"
                  value={propertyType}
                  required
                  onChange={(e) => {
                    setPropertyType(e.target.value);
                  }}
                >
                  <option value="" selected disabled>
                    Select
                  </option>
                  <option value="Flat / Apartment">Flat / Apartment</option>
                  <option value="Independant House">Independant House</option>
                  <option value="Corporate Office">Corporate Office</option>
                  <option value="Farm House">Farm House</option>
                  <option value="Plot / Land">Plot / Land</option>
                </select>
              </div>
              <div className="flex space-x-3 mt-7">
                <h1>You are Looking to :</h1>
                <select
                  className="border border-black"
                  required
                  value={sellOrRent}
                  onChange={(e) => {
                    setSellOrRent(e.target.value);
                  }}
                >
                  <option value="" selected disabled>
                    Select
                  </option>
                  <option value="rent">Rent / Lease</option>
                  <option value="sell">Sell</option>
                </select>
              </div>
              <div className="flex space-x-3 mt-7">
                <h1>BHK type :</h1>
                <select
                  className="border border-black"
                  required
                  value={bhkType}
                  onChange={(e) => {
                    setBhkType(e.target.value);
                  }}
                >
                  <option value="" selected disabled>
                    Select
                  </option>
                  <option value="1 RK">1 RK</option>
                  <option value="1 BHK">1 BHK</option>
                  <option value="2 BHK">2 BHK</option>
                  <option value="3 BHK">3 BHK</option>
                  <option value="4 BHK">4 BHK </option>
                  <option value="More than 4BHK">More than 4BHK </option>
                </select>
              </div>
              <div className="flex space-x-3 mt-7">
                <h1>Area (sq. ft):</h1>
                <input
                  className="border border-black rounded-md px-1 py-1  w-4/12"
                  required
                  min="0"
                  type="tel"
                  placeholder="Area"
                  value={area}
                  onChange={(e) => {
                    setArea(e.target.value);
                  }}
                />
              </div>
              <div className="flex space-x-3 mt-7">
                <h1>Floor :</h1>
                <input
                  className="border border-black rounded-md px-1 py-1 w-1/3 "
                  placeholder="Floor"
                  required
                  type="text"
                  value={floor}
                  onChange={(e) => {
                    setFloor(e.target.value);
                  }}
                />
                <h1 className="text-base text-slate-500">
                  ( 0 - Ground Floor )
                </h1>
              </div>
              {sellOrRent == "sell" ? (
                <div className="flex space-x-3 mt-7">
                  <h1>Expected Price(₹):</h1>
                  <input
                    className="border border-black rounded-md px-1 py-1 "
                    placeholder="Enter Price"
                    type="tel"
                    min="0"
                    value={price}
                    onChange={(e) => {
                      setPrice(e.target.value);
                    }}
                  />
                </div>
              ) : (
                <div className="flex space-x-3 mt-7">
                  <h1>Expected Rent(₹):</h1>
                  <input
                    className="border border-black rounded-md px-1 py-1 "
                    placeholder="Enter Rent"
                    type="tel"
                    min="0"
                    value={rent}
                    onChange={(e) => {
                      setRent(e.target.value);
                    }}
                  />
                </div>
              )}
               {sellOrRent == "rent" ? (
                <div className="flex space-x-3 mt-7">
                  <h1>Deposit (₹):</h1>
                  <input
                    className="border border-black rounded-md px-1 py-1 "
                    placeholder="Deposit"
                    type="tel"
                    min="0"
                    defaultValue='0'
                    value={deposit}
                    onChange={(e) => {
                      setDeposit(e.target.value);
                    }}
                  />
                </div>
              ) : (
                ""
              )}
              <div className="flex space-x-3 mt-7  justify-start ">
                <h1>Age of Property :</h1>
                <input
                  className="border border-black w-1/2 rounded-md px-1 py-1"
                  placeholder="Enter Age"
                  required
                  min="0"
                  type="tel"
                  value={age}
                  onChange={(e) => {
                    setAge(e.target.value);
                  }}
                />
              </div>

              <div className="flex space-x-3 mt-7">
                <h1>State :</h1>
                <select
                  className="border border-black"
                  value={state}
                  required
                  onChange={(e) => {
                    setState(e.target.value);
                  }}
                >
                  <option selected disabled>
                    SELECT
                  </option>

                  {State?.map((state) => (
                    <option>{state.state}</option>
                  ))}
                </select>
              </div>
              <div className="flex space-x-3 mt-7">
                <h1>City :</h1>
                <select
                  className="border border-black"
                  value={city}
                  required
                  onChange={(e) => {
                    setCity(e.target.value);
                  }}
                >
                  <option selected disabled>
                    SELECT
                  </option>
                  {cities?.map((item) => (
                    <option>{item}</option>
                  ))}
                </select>
              </div>
              <div className="flex space-x-2 mt-7">
                <h1>Address :</h1>
                <input
                  className="border border-black rounded-md px-1 py-1   "
                  placeholder="Enter Address"
                  type="text"
                  required
                  value={address}
                  onChange={(e) => {
                    setAddress(e.target.value);
                  }}
                />
              </div>

              <div className="flex flex-col space-x-3 mt-7">
                <div className="flex justify-start space-x-4">
                  <h1>Images:</h1>
                  <div className="text-sm text-slate-500 ">
                    <p>* Add Upto 5 images only</p>
                  </div>
                </div>
                <div className="flex justify-start h-auto">
                  <input
                    className=" rounded-md w-2/5 text-white min-h-min mt-5  "
                    name="propertyImage"
                    multiple
                    accept="image/*"
                    onChange={handleImages}
                    type="file"
                  />
                </div>
                {
                  images[0]==undefined ? 
                  <></>
                  :
                  <div className=" h-full w-full border border-black rounded-md flex flex-wrap justify-evenly mt-4 ">
                  {
                    images.map((item,index) => 
                    <div className=" h-24 w-24 mt-2 border border-black flex items-center justify-center ">
                    <img src={item} key={index} alt="image" className=" h-full w-full object-cover"/>
                    </div>
                  )
                  }
                </div>
                }
              </div>

            </div>
          </div>
        </div>
        <div className="flex justify-between ">
          <button
            className="text-xl px-4 py-1 bg-red-500 active:bg-red-600 text-white border border-black rounded-xl"
            onClick={handleResetForm}
          >
            Reset
          </button>
          <button 
          className={`text-xl px-4 py-1 bg-blue-500 active:bg-blue-600 text-white border border-black rounded-xl ${isDisabled ? "bg-gray-400" : "bg-blue-500"}`}
          disabled = {isDisabled}
          onClick={handleSubmitProperty}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
      }
    </div>
  );
}

export default AddProperty;
