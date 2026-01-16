import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import CartItems from "./Components/CartItems";
import AllProducts from "./Components/AllProducts";
import AppLayout from "./Layouts/AppLayout";
import Whishlist from "./Components/Whishlist";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<AppLayout />} />
        <Route path="/cartitems" element={<CartItems />} />
        <Route path="/whishlist" element={<Whishlist />} />
        <Route path="/allproducts" element={<AllProducts />} />
      </Routes>

      <Footer />
    </>
  );
};

export default App;
