'use client'
import React, { useEffect } from 'react';

const Pending = () => {
  
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
    
  return (
    <div className='mt-6 mb-6 text-center bg-yellow-200 p-4 rounded-lg'>
      <p className='font-serif text-2xl text-black text-center'>¡Tu pago ah quedado pendiente!</p>
      <p className='text-gray-600 mt-2 text-center'>
       Si crees que no es un problema tuyo, comunicate con sole para ver si podemos arreglar tu problema!
      </p>
      <button
        onClick={RedirectToWhatsApp}
        className='mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full'
      >
        Contacto por WhatsApp
      </button>
    </div>
  );
};

export default Pending;
