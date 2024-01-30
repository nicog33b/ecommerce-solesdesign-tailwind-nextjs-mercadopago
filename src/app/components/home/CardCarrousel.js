// components/ImprovedProductCard.js
import React, { useState } from 'react';
import Image from 'next/image';
import { BsCart4 } from 'react-icons/bs';
import { FaRegEye } from 'react-icons/fa';

const ImprovedProductCard = ({ prenda }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="mx-2 my-4 overflow-hidden bg-white rounded-lg shadow-md transition-transform transform hover:scale-105">
      <div
        className={`relative overflow-hidden ${isHovered ? 'hovered' : ''}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Image
          className="object-cover object-center w-full h-48"
          src={isHovered ? prenda.imagenes[1]?.url : prenda.imagenes[0]?.url}
          alt={prenda.nombre}
          width={600}
          height={400}
        />
        <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
          <div className="text-white text-center">
            <h1 className="font-bold text-lg">{prenda.nombre}</h1>
            <p className="mt-2">  <span className="text-green-500">$</span>{prenda.precio}</p>
          </div>
        </div>
      </div>

      <div className="p-4">
        <div className="flex justify-between items-center mb-2">
          <div className="font-bold text-lg">{prenda.nombre}</div>
          <div className="flex space-x-2">
            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center hover:bg-blue-200 cursor-pointer">
              <BsCart4 className="h-5 w-5 text-blue-500 hover:text-blue-700" />
            </div>
            <div className="w-8 h-8 bg-lime-100 rounded-full flex items-center justify-center hover:bg-green-200 cursor-pointer">
              <FaRegEye className="h-5 w-5 text-lime-900 hover:text-green-500" />
            </div>
          </div>
        </div>
        <p className="text-sm text-gray-600">{prenda.descripcion}</p>
      </div>
    </div>
  );
};

export default ImprovedProductCard;
