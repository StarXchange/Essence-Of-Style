import React, { useState, useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Logo from "../assets/logo.png";
import search from "../assets/search.png";
import user from "../assets/user.png";
import cart from "../assets/shopping-cart.png";
import menu from "../assets/menu.png";
import dropdown from "../assets/dropdown-icon.png";
import { CartContext } from "../context/CartContext";
import { ProductContext } from "../context/ProductContext";

const NavBar = () => {
  const [visible, setVisible] = useState(false);
  const { setShowSearch } = useContext(ProductContext);
  const { getCartCount } = useContext(CartContext);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/logoutUser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();

      if (response.ok && data.success) {
        toast.success("Logged out successfully!");
        navigate("/login");
      } else {
        toast.error(`Logout failed: ${data.message}`);
      }
    } catch (error) {
      toast.error(`Error during logout: ${error.message}`);
    }
  };

  return (
    <>
      <ToastContainer />
      <div className="bg-white shadow-md py-4 px-6 sticky top-0 z-50">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/home" className="flex items-center gap-2">
              <img src={Logo} alt="Logo" className="w-10 h-10" />
              <p className="text-xl font-bold text-gray-800">Essence Of Style</p>
            </Link>
          </div>

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

          <div className="flex items-center gap-4">
            <img
              onClick={() => setShowSearch(true)}
              src={search}
              className="w-6 cursor-pointer hover:scale-110 transition-transform"
              alt="Search"
            />

            <div className="relative group">
              <img
                src={user}
                className="w-6 cursor-pointer hover:scale-110 transition-transform"
                alt="User"
              />
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
                  <Link to="/order">
                    <li
                      key="Order"
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    >
                      Order
                    </li>
                  </Link>
                  <div className="border-gray-200 mt-2"></div>
                  <li
                    key="Log out"
                    onClick={handleLogout}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  >
                    Log out
                  </li>
                </ul>
              </div>
            </div>

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

            <img
              onClick={() => setVisible(true)}
              src={menu}
              className="w-6 cursor-pointer md:hidden hover:scale-110 transition-transform"
              alt="Menu"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;

