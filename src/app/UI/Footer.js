
"use client";
import Link from "next/link";
import React, {useEffect} from "react";
import Logo from "./logo";
import { useRouter } from "next/router";

import Image from 'next/image'
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const Footer = () =>{

  const RedirectToWhatsApp = () => {
  // Número de teléfono al que se redireccionará en formato internacional para Uruguay
  const phoneNumber = '+59899321197';

  // Mensaje opcional
  const message = 'Hola Sole, ¿cómo estás?';

  // Construir el enlace de WhatsApp con el número y el mensaje
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  // Redireccionar a WhatsApp
  window.location.href = whatsappLink;

};

    return(
    
        <div className="w-full min-h-screen flex items-center justify-center bg-white">
        <div className="md:w-2/3 w-full px-4 text-black flex flex-col">
            <div className="w-full text-7xl font-bold">
                <h5 className="w-full md:w-2/3">Compra tu prenda hecha a mano!</h5>
            </div>
            <div className="flex mt-8 flex-col md:flex-row md:justify-between">
                <p className="w-full md:w-2/3 text-gray-400">Piezas que generan una conexión con tu cuerpo y tu esencia.
Diseños con Identidad.</p>
                <div className="w-44 pt-6 md:pt-0 " onClick={RedirectToWhatsApp}>
                    <a className="bg-yellow-500 hover:bg-blue-300 hover:text-yellow-500 text-black font-bold justify-center text-center rounded-lg shadow px-10 py-3 flex items-center cursor-pointer ml-2">Contactame</a>
                </div>
            </div>
            <div className="flex flex-col">
                <div className="flex mt-24 mb-12 flex-row justify-between z-[1] ">
                <div className="logo">
        <Image src='/logoultimate.jpeg' alt="Logo" width={120} height={120} />
      </div>

                    <div className="flex flex-row space-x-8 items-center justify-between">
                        <a href="https://www.instagram.com/solesdesign_uy?igsh=Ymo4cHh5MHJrbjZw">
                           <FaInstagram className="text-yellow-600 hover:text-yellow-400 cursor-pointer"> </FaInstagram>
                        </a>
                       
                           <FaWhatsapp onClick={RedirectToWhatsApp} className="h-4 w-4 text-green-600 hover:text-green-400 cursor-pointer"></FaWhatsapp>
                    
                        <a href="https://www.facebook.com/Tiendasoles.uy?mibextid=ZbWKwL">
                         <FaFacebook  className="h-4 w-4 text-blue-400 hover:text-blue-200 cursor-pointer"></FaFacebook>
                        </a>
                   
                    </div>
                </div>
                <hr className="text-white mb-6" ></hr>
   
                <p className="w-full text-center mt-6 text-gray-600  mx-auto">Copyright © 2024 @Solesdesign</p>
                <p className="w-full text-center px-1 py-2 text-blue-300 opacity-45 text-sm my-auto">
  <Link href='https://www.tuwebcuantica.com' passHref={true}>
Clickea para crear tu propia web.
  </Link>
</p>
            </div>
        </div>
    </div>
    
          
    )
}

export default Footer;