// import React from "react";
// import Logo from "../../assets/logo.png";
// import { IoMdSearch } from "react-icons/io";
// import { ImCart } from "react-icons/im";
// import { FaCaretDown } from "react-icons/fa";
// import { NavLink } from "react-router-dom";

// const NavBar = () => {
//   return (

//     <div className="shadow-md bg-cyan-950">
//       {/* upper navbar */}
//       <div className="bg-cyan-300 py-2">
//         <div className=" container flex justify-between items-center">
//           <div>
//             <a href="#" className="font-bold text-2xl sm:text-3xl flex gap-2">
//               <img src={Logo} alt="Logo" className="w-10 uppercase" />
//               Essence Of Style
//             </a>
//           </div>
//           {/* search bar and order button */}
//           <div>
//             <div className="relative group hidden sm:block">
//               <input
//                 type="text"
//                 placeholder="search"
//                 className="w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all-duration-400 rounded-full border border-grey-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-primary"
//               />
//               <IoMdSearch className="text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3" />
//             </div>
//           </div>
//           {/* order button */}
//           <button
//             onClick={() => alert("Ordering not available yet")}
//             className="bg-cyan-950 transition-all duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3 group "
//           >
//             <span className="group-hover:block hidden transition-all duration-200">
//               Order
//             </span>
//             <ImCart className="text-xl text-white drop-shadow-sm cursor-pointer" />
//           </button>
//         </div>
//       </div>
//       {/* lower navbar */}
//       <div className="flex justify-center text-xl text-indigo-50 font-semibold ">
//         <ul className="sm:flex hidden items-center gap-4">
//           {Menu.map((data) => (
//             <li key={data.id}>
//               <NavLink
//                 to={data.link}
//                 className="hover:text-blue-500"
//                 activeClassName="text-blue-500"
//               >
//                 {data.name}
//               </NavLink>
//             </li>
//           ))}
//           {/* simple dropdown and links */}
//           <li clasName="group relative cursor-pointer">
//             <a
//               href="#"
//               className="flex items-center gap-[2px]  hover:text-blue-500 py-2"
//             >
//               Trending Products
//               <span>
//                 <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
//               </span>
//             </a>
//             <div className="absolute z-[9999] hidden group-hover:block w-[150px] rounded-md p-2 text-black">
//               <ul>
//                 {DropdownLinks.map((data) => (
//                   <li key={data.id}>
//                     <a
//                       href={data.link}
//                       className="inline-block w-full rounded-md p-2 hover:bg-cyan-950"
//                     >
//                       {data.name}
//                     </a>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default NavBar;

import {React, useState} from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../assets/logo.png";
import search from "../../assets/search.png";
import user from "../../assets/user.png";
import cart from "../../assets/shopping-cart.png";
import menu from "../../assets/menu.png";
import dropdown from "../../assets/dropdown-icon.png";

const NavBar = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div className="flex items-center justify-between py-5 font-medium">
      <div className="flex justify-between items-center">
        <span className="text-2xl font-[Poppins] cursor-pointer flex items-center">
          <img src={Logo} alt="Logo" className="w-10 h-10 inline mr-2" />
          Essence Of Styles
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
        <li class="mx-4 my-6 md:my-0 ">
          <NavLink
            to="/collections"
            className="flex flex-col items-center gap-1 hover:text-cyan-500"
          >
            <p>COLLECTIONS</p>
            <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
          </NavLink>
        </li>
        <li class="mx-4 my-6 md:my-0 ">
          <NavLink
            to="/contact"
            className="flex flex-col items-center gap-1 hover:text-cyan-500"
          >
            <p>CONTACT</p>
            <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
          </NavLink>
        </li>
        <li class="mx-4 my-6 md:my-0 ">
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
        <img src={search} className="w-5 cursor-pointer" />
        <div className="group relative">
          <img src={user} className="w-5 cursor-pointer" />
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
          className="w-5 cursor-pointer sm:hidden"
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
          <NavLink to='/collections'>COLLECTIONS</NavLink>
          <NavLink to='/contact'>CONTACT</NavLink>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
