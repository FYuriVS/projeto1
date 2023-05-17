import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/home";
import Cart from "../pages/cart";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
}
