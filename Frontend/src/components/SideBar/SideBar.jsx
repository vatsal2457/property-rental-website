import React from "react";
import { NavLink } from "react-router-dom";
import { toggleSidebar } from "../../ReduxStore/sidebarSlice";
import { useDispatch ,useSelector} from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from 'axios'
import { toggleIsLogin } from "../../ReduxStore/isLoginSlice"; 
function SideBar() {
  const sidebarOpen = useSelector((state) => state.sidebar.value)
  const dispatch = useDispatch()
  const navigate = useNavigate();

  const handleAddProperty = async(e)=>{
    e.preventDefault();
    
      await axios({
        method:'GET',
        url:`${import.meta.env.VITE_BACKEND_SERVER_URL}/api/user/addProperty`,
        withCredentials:true
      }).then((res)=>{
        navigate('/addproperty')
        dispatch(toggleSidebar())
      })
      .catch((err)=>{
        if(err?.response?.status == 401){
          localStorage.removeItem('token')
          localStorage.removeItem('name')
          dispatch(toggleIsLogin())
          dispatch(toggleSidebar())
          navigate('/login');
          alert(err?.response?.data?.message)
        }
        
      })
    
  }
  const handleYourProperties = async(e)=>{
      e.preventDefault();
        await axios({
          method:'GET',
          url:`${import.meta.env.VITE_BACKEND_SERVER_URL}/api/user/yourProperties`,
          withCredentials:true
        })
        .then(res => {
          navigate('/userproperties')
          dispatch(toggleSidebar())
        })
        .catch(err =>{
          if(err?.response?.status == 404){
            navigate('/userproperties')
            dispatch(toggleSidebar())
          } else{
            alert(err?.response?.data?.message);
            localStorage.removeItem('token')
            localStorage.removeItem('name')
            dispatch(toggleIsLogin())
            dispatch(toggleSidebar())
            navigate('/login')
          }
         
        })
      }
       
  return (
    <div
      className={`w-1/2 h-1/3 md:w-1/4 xl:w-1/6 fixed  top-0 text-base md:text-lg xl:text-xl  left-0 mt-16 pl-3 transition-transform  ease-in-out  bg-slate-900 text-white font-serif opacity-95 ${
        sidebarOpen
          ? "duration-500 translate-x-0"
          : " duration-500 -translate-x-full"
      }`}
    >
      <div className="  w-full h-full  flex flex-col justify-evenly ">
        <div className="hover:text-amber-600  border-b-white  border border-black w-full   ">
          <NavLink
          to="/"
          onClick={()=>{dispatch(toggleSidebar())}}
          >Home</NavLink>
        </div>
        <div className="hover:text-amber-600  border-b-white   border border-black w-full  ">
          <NavLink
          onClick={handleAddProperty}
          >Add Property +</NavLink>
        </div>
        <div className="hover:text-amber-600  border-b-white   border border-black w-full  ">
          <NavLink
          onClick={handleYourProperties}
          >Your Properties</NavLink>
        </div>
        <div className="hover:text-amber-600  border-b-white   border border-black w-full  ">
          <NavLink
          to="/about"
          onClick={()=>{dispatch(toggleSidebar())}}
          >About Us</NavLink>
        </div>
        
      </div>
    </div>
  );
}

export default SideBar;
