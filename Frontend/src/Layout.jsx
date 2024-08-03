import React, { useState } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Outlet } from "react-router-dom";



function Layout() {
  return (
    <div
    className=" min-h-screen min-w-full object-cover"
    style={{ backgroundImage: "url(/background.png)"}}
   
    >
      <Header />
      <Outlet />

      <Footer />
    </div>
  );
}

export default Layout;
