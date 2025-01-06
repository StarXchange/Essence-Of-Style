import React from "react";
import Logo from "../../assets/logo.png";
import { IoMdSearch } from "react-icons/io";
import { ImCart } from "react-icons/im";
import { FaCaretDown } from "react-icons/fa";

const Menu = [
  {
    id: 1,
    name: "Home",
    link: "/#",
  },
  {
    id: 2,
    name: "Top Rated",
    link: "/services",
  },
  {
    id: 3,
    name: "Outdoor Decor",
    link: "#",
  },
  {
    id: 4,
    name: "Indoor Decor",
    link: "",
  },
  {
    id: 5,
    name: "About",
    link: "/about",
  },
];
const DropdownLinks = [
  {
    id: 1,
    name: "Furniture",
    link: "/#",
  },
  {
    id: 2,
    name: "Bedroom",
    link: "/#",
  },
  {
    id: 3,
    name: "Living Room",
    link: "/#",
  },
];

const NavBar = () => {
  return (


    <div className="shadow-md bg-cyan-950">
      {/* upper navbar */}
      <div className="bg-cyan-300 py-2">
        <div className=" container flex justify-between items-center">
          <div>
            <a href="#" className="font-bold text-2xl sm:text-3xl flex gap-2">
              <img src={Logo} alt="Logo" className="w-10 uppercase" />
              Essence Of Style
            </a>
          </div>
          {/* search bar and order button */}
          <div>
            <div className="relative group hidden sm:block">
              <input
                type="text"
                placeholder="search"
                className="w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all-duration-400 rounded-full border border-grey-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-primary"
              />
              <IoMdSearch className="text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3" />
            </div>
          </div>
          {/* order button */}
          <button
            onClick={() => alert("Ordering not available yet")}
            className="bg-cyan-950 transition-all duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3 group "
          >
            <span className="group-hover:block hidden transition-all duration-200">
              Order
            </span>
            <ImCart className="text-xl text-white drop-shadow-sm cursor-pointer" />
          </button>
        </div>
      </div>
      {/* lower navbar */}
      <div className="flex justify-center text-xl text-indigo-50 font-semibold ">
        <ul className="sm:flex hidden items-center gap-4">
          {Menu.map((data) => (
            <li key={data.id}>
              <a
                href={data.link}
                className="inline-block px-4 hover:text-blue-500 duration-200"
              >
                {data.name}
              </a>
            </li>
          ))}
          {/* simple dropdown and links */}
          <li clasName="group relative cursor-pointer">
            <a
              href="#"
              className="flex items-center gap-[2px]  hover:text-blue-500 py-2"
            >
              Trending Products
              <span>
                <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
              </span>
            </a>
            <div className="absolute z-[9999] hidden group-hover:block w-[150px] rounded-md p-2 text-black">
              <ul>
                {DropdownLinks.map((data) => (
                  <li key={data.id}>
                    <a
                      href={data.link}
                      className="inline-block w-full rounded-md p-2 hover:bg-cyan-950"
                    >
                      {data.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
