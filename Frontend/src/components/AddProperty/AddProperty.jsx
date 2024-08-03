import React, { useEffect, useState } from "react";
import { State } from "../../Data/States";

function AddProperty() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phNumber, setphNumber] = useState("");
  const [sellOrRent, setSellOrRent] = useState("");
  const [propertyType, setPropertyType] = useState();
  const [bhkType, setBhkType] = useState();
  const [area, setArea] = useState();
  const [floor, setFloor] = useState();
  const [state, setState] = useState();
  const [city, setCity] = useState([]);
  const [address, setAddress] = useState("");
  const [price, setPrice] = useState();
  const [rent, setRent] = useState("");
  const [age, setAge] = useState();
  const [image, setImage] = useState();
  const [cities, setCities] = useState();
  const [deposit, setDeposit] = useState("");

  const [uploadedImages, setUploadedImages] = useState();

  useEffect(() => {
    setCities(State.find((item) => item.state == state)?.district);
  }, [state]);

  const convertImageToBase64 = (e) => {
    const reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
      console.log(reader.result);
      setImage(reader.result);
    };
  };

  const handleResetForm = () => {
    setName("");
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

  // const handleImages = (e) =>{
  //     console.log(e.target.files[0])
  // }

  return (
    <div className="pt-16 md:pt-20 flex justify-center ">
      <div className=" flex flex-col text-base md:text-xl lg:text-xl  mt-10 mb-10 pb-14 w-11/12 md:w-4/6 lg:w-3/4 px-4 py-4 rounded-xl  bg-white border border-black">
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
                  type="text"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
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
                  min="0"
                  type="Number"
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
                  type="number"
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
                    type="Number"
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
                    type="Number"
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
                    type="Number"
                    min="0"
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
                  min="0"
                  type="number"
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
                    className=" rounded-md  w-2/5 min-h-min mt-5 text-white "
                    accept="image/*"
                    onChange={convertImageToBase64}
                    type="file"
                  />
                  {image == "" || image == null ? (
                    ""
                  ) : (
                    <div className="w-auto bg-red-400 flex justify-center ">
                      <img src={image} alt="images" className="h-14 w-20 " />
                    </div>
                  )}
                  <div>
                    <button className="px-4 py-2 ml-5 text-sm mt-5 bg-blue-500 active:bg-blue-600 rounded border border-black text-white">
                      Upload
                    </button>
                  </div>
                </div>
              </div>

              <div className="mt-7">
                <h1>Uploaded Images :</h1>
                {uploadedImages == "" || uploadedImages == null ? (
                  ""
                ) : (
                  <div className="w-full border flex justify-center border-black">
                    Uploaded Images
                  </div>
                )}
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
          <button className="text-xl px-4 py-1 bg-blue-500 active:bg-blue-600 text-white border border-black rounded-xl">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddProperty;
