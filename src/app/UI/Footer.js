import React from "react";
import Logo from "./logo";

import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const Footer = () =>{

    return(
    
        <div className="w-full min-h-screen flex items-center justify-center bg-black">
        <div className="md:w-2/3 w-full px-4 text-white flex flex-col">
            <div className="w-full text-7xl font-bold">
                <h1 className="w-full md:w-2/3">Compra tu prenda hecha a mano!</h1>
            </div>
            <div className="flex mt-8 flex-col md:flex-row md:justify-between">
                <p className="w-full md:w-2/3 text-gray-400">Piezas que generan una conexión con tu cuerpo y tu esencia.
Diseños con Identidad.</p>
                <div className="w-44 pt-6 md:pt-0 ">
                    <a className="bg-yellow-500 hover:bg-blue-300 hover:text-yellow-500 text-black font-bold justify-center text-center rounded-lg shadow px-10 py-3 flex items-center cursor-pointer ml-2">Contactame</a>
                </div>
            </div>
            <div className="flex flex-col">
                <div className="flex mt-24 mb-12 flex-row justify-between z-[1]">
                  <Logo></Logo>
                    
                    <div className="flex flex-row space-x-8 items-center justify-between">
                        <a href="cursor-pointer">
                           <FaInstagram className="text-yellow-600"> </FaInstagram>
                        </a>
                        <a href="cursor-pointer">
                           <FaWhatsapp className="h-4 w-4 text-green-600"></FaWhatsapp>
                        </a>
                        <a href="cursor-pointer">
                         <FaFacebook className="h-4 w-4 text-blue-400"></FaFacebook>
                        </a>
                   
                    </div>
                </div>
                <hr className="text-white mb-6" ></hr>
   
                <p className="w-full text-center my-12 text-gray-600">Copyright © 2024 @Solesdesign</p>
            </div>
        </div>
    </div>
    
          
    )
}

export default Footer;