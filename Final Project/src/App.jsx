import "./App.css";
import React from "react";
import MyNavBar from "./functionComponent/MyNavBar";
import Home from "./Pages/Home";
import MyFooter from "./functionComponent/MyFooter";
import { Routes, Route, Navigate } from "react-router-dom";
import About from "./Pages/About";
import ContactUs from "./functionComponent/ContactUs";
import ProductDetails from "./Pages/ProductDetails";
import ErrorPage from "./Pages/ErrorPage";
import Products from "./functionComponent/Products";
function App() {
  return (
    <div>
      <MyNavBar></MyNavBar>
      <Routes>
        <Route path="home" element={<Home />} />
        <Route path="/" element={<Navigate to="/Home" />} />
        <Route path="about" element={<About />}/>
        <Route path="/contactus" element={<ContactUs/>}/>
        <Route path="/products" element={<Products />} />
        <Route path="*" element={<ErrorPage />} />
        <Route path="products/:id" element={<ProductDetails />}></Route>
      </Routes>
      <MyFooter></MyFooter>
    </div>
  );
}

export default App;

/**
 *
 * Javascript XML
 * Class Component, Function Component
 *
 *
 */
