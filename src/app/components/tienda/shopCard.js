import React from 'react';
import Image from 'next/image';
import { BsCart4 } from 'react-icons/bs';
import { FaRegEye } from 'react-icons/fa6';
import { createCartIfNotExists, addItemToCart } from '@/app/services/cart';

const ShopCard = ({ _id,precio, nombre, material, precioAntes, imagenes }) => {

const addToCart = () =>{
createCartIfNotExists();
addItemToCart(_id,precio, nombre, material, precioAntes, imagenes);

}

  return (
    <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
        {imagenes && imagenes.length > 0 && (
          <Image
            src={imagenes[0].url}
            alt="Product"
            className="h-80 w-72 object-cover rounded-t-xl"
            width={600}
            height={600}
          />
        )}
        <div className="px-4 py-3 w-72">
          <span className="text-gray-400 mr-3 uppercase text-xs">{material}</span>
          <p className="text-lg font-bold text-black truncate block capitalize">{nombre}</p>
          <div className="flex items-center">
            <p className="text-lg font-semibold text-black cursor-auto my-3">
              <span className="text-green-500">$</span> {precio}
            </p>
            <del>
              <p className="text-sm text-gray-600 cursor-auto ml-2">{precioAntes}</p>
            </del>
            <div className="ml-auto flex items-center space-x-4">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center hover:bg-blue-200 cursor-pointer">
                <BsCart4 className="h-6 w-6 font-bold text-blue-500 hover:text-blue-700" onClick={addToCart} />
              </div>
              <div className="w-10 h-10 bg-lime-100 rounded-full flex items-center justify-center hover:bg-green-200 cursor-pointer">
                <FaRegEye className="h-6 w-6 font-bold text-lime-900 hover:text-green-500" />
              </div>
            </div>
          </div>
        </div>
    </div>
  );
};

export default ShopCard;
