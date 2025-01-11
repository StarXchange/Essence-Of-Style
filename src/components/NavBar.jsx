
import {React, useState, useContext} from "react";
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

  const {setShowSearch} = useContext(ShopContext);

  return (
    <div className="flex items-center justify-between py-5 font-medium">
      <div className="flex justify-between items-center">
        <span className="text-2xl font-[Poppins] cursor-pointer flex items-center">
          <Link to='/' ><img src={Logo} alt="Logo" className="w-10 h-10 inline mr-2" />
          Essence Of Styles
          </Link>
        </span>
      </div>
      <ul className="md:flex md:items-center z-[-1] md:z-auto md:static absolute bg-white w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 opacity-0 top-[-400px] ">
        <li className="mx-4 my-6 md:my-0 ">
          <NavLink
            to="/"
            className="flex flex-col items-center gap-1 hover:text-cyan-500"
          >
            <p>HOME</p>
            <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
          </NavLink>
        </li>
        <li className="mx-4 my-6 md:my-0 ">
          <NavLink
            to="/collection"
            className="flex flex-col items-center gap-1 hover:text-cyan-500"
          >
            <p>COLLECTION</p>
            <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
          </NavLink>
        </li>
        <li className="mx-4 my-6 md:my-0 ">
          <NavLink
            to="/contact"
            className="flex flex-col items-center gap-1 hover:text-cyan-500"
          >
            <p>CONTACT</p>
            <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
          </NavLink>
        </li>
        <li className="mx-4 my-6 md:my-0 ">
          <NavLink
            to="/about"
            className="flex flex-col items-center gap-1 hover:text-cyan-500"
          >
            <p>ABOUT</p>
            <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
          </NavLink>
        </li>
      </ul>
      <div className="flex items-center gap-6">
        <img onClick={() => setShowSearch(true)} src={search} className=" hover:scale-110 transition ease-in-out w-5 cursor-pointer" />
        <div className="group relative">
          <img src={user} className="w-5 cursor-pointer hover:scale-110 transition ease-in-out" />
          <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4 bg-gray-300">
            <div className="flex flex=ool gap-2 w-36 py-3 px-5">
              <ul>
                <li className="cursor-pointer hover:text-gray-700">Profile</li>
                <li className="cursor-pointer hover:text-gray-700">Orders</li>
                <li className="cursor-pointer hover:text-gray-700">Log out</li>
              </ul>
            </div>
          </div>
        </div>
        <Link to="/cart" className="relative">
          <img src={cart} className="w-5 min-w-5" alt="cart" />
          <p className="absolute right-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">
            0
          </p>
        </Link>
        <img
          onClick={() => setVisible(true)}
          src={menu}
          className="w-5 cursor-pointer sm:hidden hover:scale-110 transition ease-in-out"
          alt=""
        />
      </div>

      {/* Sidebar menu for small screens*/}
      <div
        className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${
          visible ? "w-full" : "w-0"
        }`}
      >
        <div className="flex flex-col text-gray-600">
          <div
            onClick={() => setVisible(false)}
            className="flex items-center gap-4 p-3"
          >
            <img className="h-4 rotate-180" src={dropdown} alt="" />
            <p>Back</p>
          </div>
          <NavLink to='/'>HOME</NavLink>
          <NavLink to='/about'>ABOUT</NavLink>
          <NavLink to='/collection'>COLLECTION</NavLink>
          <NavLink to='/contact'>CONTACT</NavLink>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
