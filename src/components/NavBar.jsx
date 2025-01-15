import React, { useState, useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/logo.png";
import search from "../assets/search.png";
import user from "../assets/user.png";
import cart from "../assets/shopping-cart.png";
import menu from "../assets/menu.png";
import dropdown from "../assets/dropdown-icon.png";
import { ShopContext } from "../context/ShopContext";


const NavBar = () => {
  const [visible, setVisible] = useState(false);
  const { setShowSearch, getCartCount } = useContext(ShopContext);

  return (
    <div className="bg-white shadow-md py-4 px-6 sticky top-0 z-50">
      {/* Main Navigation */}
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/home" className="flex items-center gap-2">
            <img src={Logo} alt="Logo" className="w-10 h-10" />
            <p className="text-xl font-bold text-gray-800">Essence Of Style</p>
          </Link>
        </div>

        {/* Navigation Links */}
        <ul className="hidden md:flex items-center space-x-8 text-gray-700">
          {["HOME", "COLLECTION", "CONTACT", "ABOUT"].map((item) => (
            <li key={item}>
              <NavLink
                to={`/${item.toLowerCase()}`}
                className="hover:text-blue-500 transition duration-300"
              >
                {item}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Icons */}
        <div className="flex items-center gap-4">
          {/* Search */}
          <img
            onClick={() => setShowSearch(true)}
            src={search}
            className="w-6 cursor-pointer hover:scale-110 transition-transform"
            alt="Search"
          />

          {/* User Dropdown */}
<div className="relative group">
  <Link to='/login'>
    <img
      src={user}
      className="w-6 cursor-pointer hover:scale-110 transition-transform"
      alt="User"
    />
  </Link>
  <div className="absolute right-0 mt-2 hidden group-hover:block bg-white border rounded-md shadow-lg">
    <ul className="py-2">
      {["Profile"].map((item) => (
        <li
          key={item}
          className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
        >
          {item}
        </li>
      ))}
      {/* Add "Orders" link */}
      <Link to="/order">
        <li
          key="Order"
          className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
        >
          Order
        </li>
      </Link>
      <div className=" border-gray-200 mt-2"></div> {/* Separator */}
      {["Log out"].map((item) => (
        <li
          key={item}
          className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
        >
          {item}
        </li>
      ))}
    </ul>
  </div>
</div>


          {/* Cart */}
          <Link to="/cart" className="relative">
            <img
              src={cart}
              className="w-6 cursor-pointer hover:scale-110 transition-transform"
              alt="Cart"
            />
            <span className="absolute top-0 right-0 bg-black text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
              {getCartCount()}
            </span>
          </Link>

          {/* Mobile Menu Icon */}
          <img
            onClick={() => setVisible(true)}
            src={menu}
            className="w-6 cursor-pointer md:hidden hover:scale-110 transition-transform"
            alt="Menu"
          />
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed inset-0 bg-white transform ${
          visible ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 z-50`}
      >
        <div className="flex items-center justify-between p-4 border-b">
          <p className="text-lg font-semibold text-gray-700">Menu</p>
          <img
            onClick={() => setVisible(false)}
            src={dropdown}
            className="w-6 cursor-pointer rotate-180"
            alt="Close"
          />
        </div>
        <ul className="flex flex-col items-start p-4 space-y-4">
          {["HOME", "COLLECTION", "CONTACT", "ABOUT"].map((item) => (
            <li key={item}>
              <NavLink
                to={`/${item.toLowerCase()}`}
                onClick={() => setVisible(false)}
                className="text-gray-700 hover:text-blue-500 transition duration-300"
              >
                {item}
              </NavLink>
            </li>
          ))}
          {/* Add "Orders" link to mobile menu */}
          <Link to="/orders" onClick={() => setVisible(false)}>
            <li className="text-gray-700 hover:text-blue-500 transition duration-300">
              Orders
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
