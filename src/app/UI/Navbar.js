import React from "react";
import Logo from "./logo";
import './ui.css';
import { FaUser, FaShoppingCart, FaStar } from 'react-icons/fa';
import { GiAmpleDress } from "react-icons/gi";



const Navbar = () => {
  return (
    <header className="header sticky top-0 bg-white shadow-md flex items-center justify-between px-8 py-02 z-10">
  {/*  LOGO */}
    <Logo/>

    
      {/* NAVIGATION */}
      <nav className="nav flex font-semibold text-lg ml-2 " >
        <ul className=" flex items-center">
          <li className="buttonNav border-b-2  p-2 opacity-[50%] border-yellow-500 border-opacity-0 hover:border-opacity-100 hover:opacity-[100%] duration-200 cursor-pointer active">
            <a href="" className="buttonNav text-black">Inicio</a>
          </li>
          <li className="buttonNav border-b-2  p-2 opacity-[50%] border-yellow-500 border-opacity-0 hover:border-opacity-100 hover:opacity-[100%] duration-200 cursor-pointer">
            <a href="" className="buttonNav text-black">Tienda</a>
          </li>
         
         {/*     
          <li className="buttonNav border-b-2  p-2 opacity-[50%] border-yellow-500                                          border-opacity-0 hover:border-opacity-100 hover:opacity-[100%] duration-200 cursor-pointer">
            <a href="" className="buttonNav text-black">Somos</a>
          </li>
          <li className="buttonNav border-b-2  p-2 opacity-[50%] border-yellow-500 border-opacity-0 hover:border-opacity-100 hover:opacity-[100%] duration-200 cursor-pointer">
            <a href="" className="buttonNav text-black">Contacto</a>
          </li>
 */}

        </ul>
      </nav>

      {/* BUTTONS */}
      <div className="w-3/12 flex justify-end space-x-4">
      <a href="" className="hover:bg-yellow-100 p-2 rounded-full transition duration-300">
        <FaShoppingCart className="text-xl text-gray-700" />
      </a>

            {/* 
      <a href="" className="hover:bg-yellow-100 p-2 rounded-full transition duration-300">
        <FaUser className="text-xl text-gray-700" />
      </a>
      <a href="" className="hover:bg-yellow-100  p-2 rounded-full transition duration-300 ">
        <FaStar className="text-xl text-gray-700" />
      </a>

       */}
    </div>



    </header>
  );
};

export default Navbar;
