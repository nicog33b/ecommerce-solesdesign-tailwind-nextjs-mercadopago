'use client';
import React, {useState} from "react";
import Link from 'next/link'

//components
import ShoppingCart from "./Cart";

//resources
import Logo from "./logo";

//styles
import './ui.css';

//icons
import { FaUser, FaShoppingCart, FaStar } from 'react-icons/fa';



const Navbar = () => {
const [isCartOpen, setIsCartOpen] = useState(false);



  const openCart = () => {
    setIsCartOpen(true);
  };

  const closeCart = () => {
    setIsCartOpen(false);
  };


  return (
    <header className="header sticky top-0 bg-white shadow-md flex items-center justify-between px-8 py-02 z-10">
  {/*  LOGO */}
    <Logo/>

 

      {/* NAVIGATION */}
      <nav className="nav flex font-semibold text-lg ml-2 " >
        <ul className=" flex items-center">
        <Link href="/">
          <li className="buttonNav border-b-2  p-2 opacity-[50%] border-yellow-500 border-opacity-0 hover:border-opacity-100 hover:opacity-[100%] duration-200 cursor-pointer active">
            <p className="buttonNav text-black">Inicio</p>
          </li>
          </Link>

          <Link href="/tienda">
          <li className="buttonNav border-b-2  p-2 opacity-[50%] border-yellow-500 border-opacity-0 hover:border-opacity-100 hover:opacity-[100%] duration-200 cursor-pointer">
            <p className="buttonNav text-black">Tienda</p>
          </li>
          </Link>
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
      <a href="#" className="hover:bg-yellow-100 p-2 rounded-full transition duration-300" onClick={openCart}>
        <FaShoppingCart className="text-xl text-gray-700" />
      </a>

      {/* Renderizar el carrito si está abierto */}
      {isCartOpen && <ShoppingCart onClose={closeCart} />}


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
