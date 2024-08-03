import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import Layout from "./Layout.jsx";
import Home from "./components/Home/Home.jsx";
import BuyorRent from "./components/BuyorRent/BuyorRent.jsx"; 
import About from "./components/About/About.jsx";
import AddProperty from "./components/AddProperty/AddProperty.jsx";
import LoginPage from "./components/LoginPage/LoginPage.jsx";
import SignupPage from "./components/SignupPage/SignupPage.jsx";
import { Provider } from "react-redux";
import { store } from "./ReduxStore/Store.js";
import UserProperty from "./components/UserProperty/UserProperty.jsx";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="buyorrent" element={<BuyorRent />} />
      <Route path="login" element={<LoginPage />} />
      <Route path="signup" element={<SignupPage />} />
      <Route path="about" element={<About />} />
      <Route path="addproperty" element={<AddProperty />} />
      <Route path="userproperties" element={<UserProperty />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  //<React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
 // </React.StrictMode>
);
