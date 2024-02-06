//fundamental
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

//icons
import { BsCart4 } from 'react-icons/bs';
import { FaRegEye } from 'react-icons/fa6';

//extern function
import { createCartIfNotExists, addItemToCart } from '@/app/services/cart';

//sweetAlert2
import Swal from 'sweetalert2'


const ShopCard = ({ _id, precio, nombre, material, precioAntes, imagenes }) => {



  
  
  const addToCart = () => {
    createCartIfNotExists();
    const storedCart = localStorage.getItem('userCart');

    // Check if the item is already in the cart
    if (storedCart && storedCart.includes(_id)) {
      Swal.fire({
        icon: 'info',
        title: 'Esta prenda ya está en tu carrito',
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      const cantidad =1;
      addItemToCart(_id, precio, nombre, material, precioAntes, imagenes, cantidad);
      Swal.fire({
        icon: 'success',
        title: 'Producto agregado al carrito',
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  return (
    <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl "  >
     
        {imagenes && imagenes.length > 0 && (
      
      <Link href='/productReview'>
          <Image
            onClick={()=>
              {
              localStorage.setItem('selectedId',_id);

          
          }}
            src={imagenes[0].url}
            alt="Product"
            className="h-80 w-72 object-cover rounded-t-xl cursor-pointer"
            width={600}
            height={600}
          />
          </Link>
   
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
                <Link href='/productReview'>
                <FaRegEye className="h-6 w-6 font-bold text-lime-900 hover:text-green-500" onClick={()=>{localStorage.setItem('selectedId',_id)}} />
                </Link>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
};

export default ShopCard;
