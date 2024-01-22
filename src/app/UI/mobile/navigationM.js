import React, { useState } from 'react';
import { FaUser } from 'react-icons/fa6';
import '../ui.css';

const NavigationM = ({ closeModal }) => {
  const [nameUser, setNameUser] = useState('Nicolas');

  return (
    <div>
      {/* El modal */}
      <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-start items-start lg:hidden">
        <div className="bg-white w-[57%] p-4 h-[100%] overflow-scroll border-4 border-black">
         {/* Nombre del usuario con icono */}
         <div className="flex items-center nameNav text-black text-center rounded font-semibold text-lg border-2 border-yellow-500 p-2 mb-4">
            <FaUser className="mr-2 text-blue-500 " />
            <span className='ml-2 font-bold'>{nameUser}</span>         </div>

          {/* Navegación */}
          <nav className="flex flex-col mt-4 p-1 ">
            <a href="" className=" buttonNav text-yellow-500 font-serif text-2xl my-2 py-2 hover:bg-gray-200 transition duration-300 rounded border-2 border-black p-1">Inicio</a>
            <a href="" className="buttonNav  text-yellow-500 font-serif text-2xl my-2 py-2 hover:bg-gray-200 transition duration-300 rounded border-2 border-black p-1">Tienda</a>
            <a href="" className="buttonNav  text-yellow-500  font-serif text-2xl my-2 py-2 hover:bg-gray-200 transition duration-300 rounded border-2 border-black p-1">Somos</a>
            <a href="" className="buttonNav  text-yellow-500  font-serif text-2xl my-2 py-2 hover:bg-gray-200 transition duration-300 rounded border-2 border-black p-1">Contacto</a>
          </nav>

          {/* Botón de cierre */}
          <span className="absolute top-2 right-2 text-gray-700 cursor-pointer" onClick={closeModal}>&times;</span>
        </div>
      </div>
    </div>
  );
};

export default NavigationM;
