'use client'
import React, { useState, useEffect } from "react";
import Link from 'next/link';
import Image from 'next/image';
import ShoppingCart from "./Cart";
import { FaShoppingCart } from 'react-icons/fa';

const Navbar = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItemCount, setCartItemCount] = useState(0);  // Inicializar con 0

  useEffect(() => {
    const updateCartCount = () => {
      const cartData = localStorage.getItem('userCart');
      const cartItems = cartData ? JSON.parse(cartData) : [];
      setCartItemCount(cartItems.length);
    };
  
    updateCartCount(); // Actualizar al montar el componente
  
    window.addEventListener('cartUpdated', updateCartCount); // Escuchar cambios en el carrito
  
    return () => {
      window.removeEventListener('cartUpdated', updateCartCount); // Limpiar el listener al desmontar el componente
    };
  }, []);
  

  const openCart = () => {
    setIsCartOpen(true);
  };

  const closeCart = () => {
    setIsCartOpen(false);
  };

  return (
    <header className="header sticky top-0 bg-gradient-radial from-black to-zinc-950 shadow-md flex items-center justify-between px-8 z-10 mb-3">
      {/* LOGO */}
      <div className="mr-3 mb-3">
        <Image src='/logoultimate.jpeg' alt="Logo" width={60} height={60} />
      </div>

      {/* NAVIGATION */}
      <nav className="nav flex font-semibold text-lg ml-2">
        <ul className="flex items-center">
          <li className="buttonNav border-b-2 p-2 opacity-80 border-yellow-500 border-opacity-0 hover:border-opacity-100 hover:opacity-100 duration-200 cursor-pointer active">
            <Link href="/" className="text-white">Inicio</Link>
          </li>
          <li className="buttonNav border-b-2 p-2 opacity-80 border-yellow-500 border-opacity-0 hover:border-opacity-100 hover:opacity-100 duration-200 cursor-pointer">
            <Link href="/tienda" className="text-white">Tienda</Link>
          </li>
        </ul>
      </nav>

      {/* BUTTONS */}
      <div className="w-3/12 flex justify-end space-x-4 relative">
        <button onClick={openCart} className="hover:bg-gray-900 p-2 rounded-full transition duration-300 relative">
          <FaShoppingCart className="text-xl text-yellow-200" />
          <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-full">
            {cartItemCount}
          </span>
        </button>
        {isCartOpen && <ShoppingCart onClose={closeCart} />}
      </div>
    </header>
  );
};

export default Navbar;
