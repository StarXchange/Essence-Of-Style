// import React, { useState, useContext } from "react";
// import { Link, NavLink, useNavigate } from "react-router-dom";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// // import Logo from "../assets/logo.png";
// import search from "../assets/search.png";
// import user from "../assets/user.png";
// import cart from "../assets/shopping-cart.png";
// import menu from "../assets/menu.png";
// // import dropdown from "../assets/dropdown-icon.png";
// import { CartContext } from "../context/CartContext";
// import { ProductContext } from "../context/ProductContext";

// const NavBar = () => {
//   const [visible, setVisible] = useState(false);
//   const { setShowSearch } = useContext(ProductContext);
//   const { getCartCount } = useContext(CartContext);
//   const navigate = useNavigate();

//   const handleLogout = async () => {
//     try {
//       const token = localStorage.getItem("token"); // Assuming the token is stored in localStorage
//       if (!token) {
//         toast.error("No token found. Please log in.");
//         return;
//       }

//       const response = await fetch("http://localhost:8080/api/logoutUser", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}`, // Add the token here
//         },
//       });

//       const data = await response.json();

//       if (response.ok && data.success) {
//         // Clear the token from localStorage
//         localStorage.removeItem("token");
//         toast.success("Logged out successfully!");
//         navigate("/login");
//       } else {
//         toast.error(`Logout failed: ${data.message}`);
//       }
//     } catch (error) {
//       toast.error(`Error during logout: ${error.message}`);
//     }
//   };

//   return (
//     <>
//       <ToastContainer />
//       <div className="bg-white shadow-md py-4 px-6 sticky top-0 z-50">
//         <div className="flex items-center justify-between">
//           <div className="flex items-center">
//             <Link to="/" className="flex items-center gap-2">
//               <img
//                 src="https://res.cloudinary.com/dcmkvti63/image/upload/v1738076211/Logo_mwrnbl.png"
//                 alt="Logo"
//                 className="w-10 h-10"
//               />
//               <p className="text-xl font-bold text-gray-800">
//                 Essence Of Style
//               </p>
//             </Link>
//           </div>

//           <ul className="hidden md:flex items-center space-x-8 text-gray-700">
//             <li>
//               <NavLink
//                 to="/hom"
//                 className="hover:text-blue-500 transition duration-300"
//               >
//                 HOME
//               </NavLink>
//             </li>
//             <li>
//               <NavLink
//                 to="/collection"
//                 className="hover:text-blue-500 transition duration-300"
//               >
//                 COLLECTION
//               </NavLink>
//             </li>
//             <li>
//               <NavLink
//                 to="/contact"
//                 className="hover:text-blue-500 transition duration-300"
//               >
//                 CONTACT
//               </NavLink>
//             </li>
//             <li>
//               <NavLink
//                 to="/about"
//                 className="hover:text-blue-500 transition duration-300"
//               >
//                 ABOUT
//               </NavLink>
//             </li>
//           </ul>

//           <div className="flex items-center gap-4">
//             <img
//               onClick={() => setShowSearch(true)}
//               src={search}
//               className="w-6 cursor-pointer hover:scale-110 transition-transform"
//               alt="Search"
//             />

//             <div className="relative group">
//               <img
//                 src={user}
//                 className="w-6 cursor-pointer hover:scale-110 transition-transform"
//                 alt="User"
//               />
//               <div className="absolute right-0 mt-2 hidden group-hover:block bg-white border rounded-md shadow-lg">
//                 <ul className="py-2">
//                   <Link to="/login">
//                     <li
//                       key="Login"
//                       className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
//                     >
//                       Login
//                     </li>
//                   </Link>
//                   <Link to="/order">
//                     <li
//                       key="Order"
//                       className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
//                     >
//                       Order
//                     </li>
//                   </Link>
//                   <div className="border-gray-200 mt-2"></div>
//                   <li
//                     key="Log out"
//                     onClick={handleLogout}
//                     className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
//                   >
//                     Log out
//                   </li>
//                 </ul>
//               </div>
//             </div>

//             <Link to="/cart" className="relative">
//               <img
//                 src={cart}
//                 className="w-6 cursor-pointer hover:scale-110 transition-transform"
//                 alt="Cart"
//               />
//               <span className="absolute top-0 right-0 bg-black text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
//                 {getCartCount()}
//               </span>
//             </Link>

//             <img
//               onClick={() => setVisible(true)}
//               src={menu}
//               className="w-6 cursor-pointer md:hidden hover:scale-110 transition-transform"
//               alt="Menu"
//             />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default NavBar;

// import React, { useState, useContext, useEffect } from "react";
// import { Link, NavLink, useNavigate } from "react-router-dom";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import search from "../assets/search.png";
// import user from "../assets/user.png";
// import cart from "../assets/shopping-cart.png";
// import menu from "../assets/menu.png";
// import { CartContext } from "../context/CartContext";
// import { ProductContext } from "../context/ProductContext";

// const NavBar = () => {
//   const [visible, setVisible] = useState(false);
//   const [dropdownOpen, setDropdownOpen] = useState(false);
//   const { setShowSearch } = useContext(ProductContext);
//   const { getCartCount } = useContext(CartContext);
//   const navigate = useNavigate();

//   const handleLogout = async () => {
//     try {
//       const token = localStorage.getItem("token");
//       if (!token) {
//         toast.error("No token found. Please log in.");
//         return;
//       }

//       const response = await fetch("http://localhost:8080/api/logoutUser", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}`,
//         },
//       });

//       const data = await response.json();

//       if (response.ok && data.success) {
//         localStorage.removeItem("token");
//         toast.success("Logged out successfully!");
//         navigate("/login");
//       } else {
//         toast.error(`Logout failed: ${data.message}`);
//       }
//     } catch (error) {
//       toast.error(`Error during logout: ${error.message}`);
//     }
//   };

//   // Close dropdown when clicking outside
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (!event.target.closest("#user-dropdown")) {
//         setDropdownOpen(false);
//       }
//     };

//     document.addEventListener("click", handleClickOutside);
//     return () => document.removeEventListener("click", handleClickOutside);
//   }, []);

//   return (
//     <>
//       <ToastContainer />
//       <div className="bg-white shadow-md py-4 px-6 sticky top-0 z-50">
//         <div className="flex items-center justify-between">
//           {/* Logo */}
//           <div className="flex items-center">
//             <Link to="/" className="flex items-center gap-2">
//               <img
//                 src="https://res.cloudinary.com/dcmkvti63/image/upload/v1738076211/Logo_mwrnbl.png"
//                 alt="Logo"
//                 className="w-10 h-10"
//               />
//               <p className="text-xl font-bold text-gray-800">
//                 Essence Of Style
//               </p>
//             </Link>
//           </div>

//           {/* Navigation Links */}
//           <ul className="hidden md:flex items-center space-x-8 text-gray-700">
//             <li>
//               <NavLink
//                 to="/"
//                 className="hover:text-blue-500 transition duration-300"
//               >
//                 HOME
//               </NavLink>
//             </li>
//             <li>
//               <NavLink
//                 to="/collection"
//                 className="hover:text-blue-500 transition duration-300"
//               >
//                 COLLECTION
//               </NavLink>
//             </li>
//             <li>
//               <NavLink
//                 to="/contact"
//                 className="hover:text-blue-500 transition duration-300"
//               >
//                 CONTACT
//               </NavLink>
//             </li>
//             <li>
//               <NavLink
//                 to="/about"
//                 className="hover:text-blue-500 transition duration-300"
//               >
//                 ABOUT
//               </NavLink>
//             </li>
//           </ul>

//           {/* Right-side Icons */}
//           <div className="flex items-center gap-4">
//             {/* Search Icon */}
//             <img
//               onClick={() => setShowSearch(true)}
//               src={search}
//               className="w-6 cursor-pointer hover:scale-110 transition-transform"
//               alt="Search"
//             />

//             {/* User Dropdown */}
//             <div id="user-dropdown" className="relative">
//               <img
//                 src={user}
//                 className="w-6 cursor-pointer hover:scale-110 transition-transform"
//                 alt="User"
//                 onClick={() => setDropdownOpen(!dropdownOpen)}
//               />
//               {dropdownOpen && (
//                 <div className="absolute right-0 mt-2 bg-white border rounded-md shadow-lg w-40">
//                   <ul className="py-2">
//                     <Link to="/login">
//                       <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
//                         Login
//                       </li>
//                     </Link>
//                     <Link to="/order">
//                       <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
//                         Order
//                       </li>
//                     </Link>
//                     <div className="border-t border-gray-200 my-2"></div>
//                     <li
//                       onClick={handleLogout}
//                       className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
//                     >
//                       Log out
//                     </li>
//                   </ul>
//                 </div>
//               )}
//             </div>

//             {/* Cart Icon */}
//             <Link to="/cart" className="relative">
//               <img
//                 src={cart}
//                 className="w-6 cursor-pointer hover:scale-110 transition-transform"
//                 alt="Cart"
//               />
//               <span className="absolute top-0 right-0 bg-black text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
//                 {getCartCount()}
//               </span>
//             </Link>

//             {/* Mobile Menu Icon */}
//             <img
//               onClick={() => setVisible(true)}
//               src={menu}
//               className="w-6 cursor-pointer md:hidden hover:scale-110 transition-transform"
//               alt="Menu"
//             />
//           </div>
//         </div>
//       </div>

      
//     </>
//   );
// };

// export default NavBar;

import React, { useState, useContext, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { FaBars, FaTimes } from "react-icons/fa"; // Import react-icons for menu
import "react-toastify/dist/ReactToastify.css";
import search from "../assets/search.png";
import user from "../assets/user.png";
import cart from "../assets/shopping-cart.png";
import { CartContext } from "../context/CartContext";
import { ProductContext } from "../context/ProductContext";

const NavBar = () => {
  const [visible, setVisible] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { setShowSearch } = useContext(ProductContext);
  const { getCartCount } = useContext(CartContext);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        toast.error("No token found. Please log in.");
        return;
      }

      const response = await fetch("http://localhost:8080/api/logoutUser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await response.json();

      if (response.ok && data.success) {
        localStorage.removeItem("token");
        toast.success("Logged out successfully!");
        navigate("/login");
      } else {
        toast.error(`Logout failed: ${data.message}`);
      }
    } catch (error) {
      toast.error(`Error during logout: ${error.message}`);
    }
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest("#user-dropdown")) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <>
      <ToastContainer />
      <div className="bg-white shadow-md py-4 px-6 sticky top-0 z-50">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2">
              <img
                src="https://res.cloudinary.com/dcmkvti63/image/upload/v1738076211/Logo_mwrnbl.png"
                alt="Logo"
                className="w-10 h-10"
              />
              <p className="text-xl font-bold text-gray-800">
                Essence Of Style
              </p>
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <ul className="hidden md:flex items-center space-x-8 text-gray-700">
            <li>
              <NavLink to="/" className="hover:text-blue-500 transition duration-300">
                HOME
              </NavLink>
            </li>
            <li>
              <NavLink to="/collection" className="hover:text-blue-500 transition duration-300">
                COLLECTION
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className="hover:text-blue-500 transition duration-300">
                CONTACT
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className="hover:text-blue-500 transition duration-300">
                ABOUT
              </NavLink>
            </li>
          </ul>

          {/* Right-side Icons */}
          <div className="flex items-center gap-4">
            {/* Search Icon */}
            <img
              onClick={() => setShowSearch(true)}
              src={search}
              className="w-6 cursor-pointer hover:scale-110 transition-transform"
              alt="Search"
            />

            {/* User Dropdown */}
            <div id="user-dropdown" className="relative">
              <img
                src={user}
                className="w-6 cursor-pointer hover:scale-110 transition-transform"
                alt="User"
                onClick={() => setDropdownOpen(!dropdownOpen)}
              />
              {dropdownOpen && (
                <div className="absolute right-0 mt-2 bg-white border rounded-md shadow-lg w-40">
                  <ul className="py-2">
                    <Link to="/login">
                      <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Login</li>
                    </Link>
                    <Link to="/order">
                      <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Order</li>
                    </Link>
                    <div className="border-t border-gray-200 my-2"></div>
                    <li onClick={handleLogout} className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                      Log out
                    </li>
                  </ul>
                </div>
              )}
            </div>

            {/* Cart Icon */}
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
            <FaBars
              className="w-6 h-6 cursor-pointer md:hidden hover:scale-110 transition-transform"
              onClick={() => setVisible(true)}
            />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {visible && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-75 z-50 flex flex-col items-center justify-center text-white">
          {/* Close Button */}
          <FaTimes
            className="absolute top-5 right-5 text-3xl cursor-pointer"
            onClick={() => setVisible(false)}
          />
          
          {/* Mobile Navigation Links */}
          <ul className="text-center space-y-6 text-xl">
            <li>
              <NavLink to="/" onClick={() => setVisible(false)}>HOME</NavLink>
            </li>
            <li>
              <NavLink to="/collection" onClick={() => setVisible(false)}>COLLECTION</NavLink>
            </li>
            <li>
              <NavLink to="/contact" onClick={() => setVisible(false)}>CONTACT</NavLink>
            </li>
            <li>
              <NavLink to="/about" onClick={() => setVisible(false)}>ABOUT</NavLink>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default NavBar;
