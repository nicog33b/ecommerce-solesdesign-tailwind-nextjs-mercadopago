import React from "react";
import '../ui.css';
import { FaUser, FaShoppingCart, FaStar } from 'react-icons/fa';
import { ImList } from "react-icons/im";
import Logo from "../logo";



const NavbarM = () => {
  return (
    <header className="header sticky top-0 bg-white shadow-md flex items-center justify-between px-8 py-02">
  <div className="bg-white flex items-start  p-1 w-[3/12] mt-3 mb-3 transition duration-300">
 
  <ImList />
    </div>

      {
      /*
      NAVIGATION
      
      <nav className="nav flex font-semibold text-lg ml-2 " >
        <ul className=" flex items-center">
          <li className="buttonNav border-b-2  p-2 opacity-[50%] border-yellow-500 border-opacity-0 hover:border-opacity-100 hover:opacity-[100%] duration-200 cursor-pointer active">
            <a href="" className="buttonNav">Inicio</a>
          </li>
          <li className="buttonNav border-b-2  p-2 opacity-[50%] border-yellow-500 border-opacity-0 hover:border-opacity-100 hover:opacity-[100%] duration-200 cursor-pointer">
            <a href="" className="buttonNav">Tienda</a>
          </li>
          <li className="buttonNav border-b-2  p-2 opacity-[50%] border-yellow-500border-opacity-0 hover:border-opacity-100 hover:opacity-[100%] duration-200 cursor-pointer">
            <a href="" className="buttonNav">Somos</a>
          </li>
          <li className="buttonNav border-b-2  p-2 opacity-[50%] border-yellow-500 border-opacity-0 hover:border-opacity-100 hover:opacity-[100%] duration-200 cursor-pointer">
            <a href="" className="buttonNav">Contacto</a>
          </li>
        </ul>
      </nav> 
      
      */}
     <Logo/>



      

      {/*   <div className="w-3/12 flex justify-end space-x-4">
      <a href="" className="hover:bg-yellow-400 p-2 rounded-full transition duration-300">
        <FaUser className="text-xl" />
      </a>
      <a href="" className="hover:bg-yellow-400 p-2 rounded-full transition duration-300">
        <FaShoppingCart className="text-xl" />
      </a>
      <a href="" className="hover:bg-yellow-400 p-2 rounded-full transition duration-300">
        <FaStar className="text-xl" />
      </a>
    </div>*/}
    
    </header>
  );
};

export default NavbarM;
