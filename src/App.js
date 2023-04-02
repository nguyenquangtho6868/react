import { BrowserRouter, Route, Routes } from "react-router-dom";
import { React } from "react";

import Home from "./pages/HomePage/Home";
import Cart from "./pages/CartPage/Cart";
import Checkout from "./pages/CheckoutPage/Checkout";
import Detail from "./pages/DetailPage/Detail";
import Login from "./pages/LoginPage/Login";
import Register from "./pages/RegisterPage/Register";
import Shop from "./pages/ShopPage/Shop";

function App() {
  return (
    // Tạo Router cho ứng dụng
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
