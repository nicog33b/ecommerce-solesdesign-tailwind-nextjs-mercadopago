'use client';
import React, { useEffect } from 'react';

const Success = () => {
  

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

  useEffect(() => {
    // Limpia el carrito del usuario después de que la compra se haya completado
    localStorage.removeItem('userCart');
  }, []); // Se ejecutará solo una vez después de que el componente se monte

  return (
    <div className='mt-6 mb-6 text-center bg-green-200 p-4 rounded-lg'>
      <p className='font-serif text-2xl text-black text-center'>¡Compra finalizada correctamente!</p>
      <p className='text-gray-600 mt-2 text-center'>¡Gracias por tu compra!</p>
      <p className='text-gray-600 mt-2 text-center'>¡Comunicate con sole al whatsapp para reclamar tus prendas!</p>
      <button
        onClick={RedirectToWhatsApp}
        className='mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full'
      >
        Contacto por WhatsApp
      </button>
    </div>
  );
};

export default Success;
