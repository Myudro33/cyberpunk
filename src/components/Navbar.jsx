import React from "react";
import GradientBtn from "./GradientBtn";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = ({ setisMenuShown, isMenuShown }) => {
  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "products",
    },
    {
      id: 3,
      link: "developer API",
    },
    {
      id: 4,
      link: "customers",
    },
    {
      id: 5,
      link: "contact",
    },
  ];
  return (
    <div className="absolute w-full h-24 bg-black text-white z-20">
      <div className="flex justify-between items-center max-w-screen-xl mx-auto px-4 h-full">
        <div>
          <h1 className="text-thBlue tracking-widest text-3xl">ANTON</h1>
        </div>
        <div className="hidden md:flex items-center">
          <ul className="flex">
            {links.map(({ id, link }) => (
              <li
                className="p-4 uppercase duration-200 hover:text-thBlue cursor-pointer"
                key={id}
              >
                {link}
              </li>
            ))}
          </ul>
          <GradientBtn className="ml-4 capitalize" title="get anton" />
        </div>
        <div onClick={()=>{setisMenuShown(!isMenuShown)}} className="block md:hidden">
          {isMenuShown ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>
      </div>
    </div>
  );
};

export default Navbar;