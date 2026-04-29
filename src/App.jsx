import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ShopPage from "./pages/ShopPage";
import ProductDetails from "./pages/ProductDetails";
import CartDrawer from "./components/CartDrawer";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import UserLayout from "./pages/User_Account/UserLayout";
import MyAccount from "./pages/User_Account/MyAccount";
import MyOrders from "./pages/User_Account/MyOrders";
import MyLists from "./pages/User_Account/MyLists";
import Logout from "./pages/User_Account/Logout";
import ChangePassword from "./pages/User_Account/ChangePassword";
import Vouchers from "./pages/User_Account/Vouchers";
import ProductPage from "./pages/ProductPage";
import CategroyProducts from "./pages/CategroyProducts";
import ScrolltoTop from "./components/ScrolltoTop";
import { useSelector } from "react-redux";
import LogoutConfirmation from "./components/LogoutConfirmation";
import HeaderTopStrip from "./components/HeaderTopStrip";
import MobileMenuDrawer from "./components/MobileMenuDrawer";
import SearchModal from "./components/SearchModal";

const App = () => {
  const showLogoutModal = useSelector((state) => state.logoutModal.showLogoutModal);
  return (
    <div className="flex flex-col min-h-screen">
      <HeaderTopStrip />
      <Header />
      <Navbar />
      <MobileMenuDrawer />
      <CartDrawer />
      <SearchModal />
      {showLogoutModal && <LogoutConfirmation />}
      <ScrolltoTop />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/:pageName" element={<ProductPage />} />
          <Route path="/category/:categoryName" element={<CategroyProducts />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/my-account" element={<UserLayout />}>
            <Route index element={<MyAccount />} />
            <Route path="orders" element={<MyOrders />} />
            <Route path="lists" element={<MyLists />} />
            <Route path="vouchers" element={<Vouchers />} />
            <Route path="change-password" element={<ChangePassword />} />
            <Route path="logout" element={<Logout />} />
          </Route>
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
