import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { Checkout } from "../pages/Checkout";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/checkout" element={<Checkout />} />
    </Routes>
  )
}