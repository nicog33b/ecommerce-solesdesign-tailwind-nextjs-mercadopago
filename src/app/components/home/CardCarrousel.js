// fundamental
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

//icons
import { BsCart4 } from 'react-icons/bs';
import { FaRegEye } from 'react-icons/fa';

//sweetalert
import Swal from 'sweetalert2'

//extern functions
import { addItemToCart, createCartIfNotExists } from '@/app/services/cart';

const ImprovedProductCard = ({ prenda }) => {
  const [isHovered, setIsHovered] = useState(false);

  const addToCart = () => {
    createCartIfNotExists();
    const storedCart = localStorage.getItem('userCart');

    // Check if the item is already in the cart
    if (storedCart && storedCart.includes(prenda._id)) {
      Swal.fire({
        icon: 'info',
        title: 'Esta prenda ya está en tu carrito',
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      const cantidad =1;
      addItemToCart(prenda._id, prenda.precio, prenda.nombre, prenda.material, prenda.precioAntes, prenda.imagenes, cantidad);
      Swal.fire({
        icon: 'success',
        title: 'Producto agregado al carrito',
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  return (
    <div className=" overflow-hidden bg-white rounded-lg shadow-md transition-transform transform hover:scale-105">
      <div
        className={`relative overflow-hidden ${isHovered ? 'hovered' : ''}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        
        <Image
        
          className="object-cover object-center w-full h-48 cursor-pointer"
          src={isHovered ? prenda.imagenes[1]?.url : prenda.imagenes[0]?.url}
          alt={prenda.nombre}
          width={600}
          height={400}
        />

        <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center ">
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
            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center hover:bg-blue-200 cursor-pointer" onClick={addToCart}>
              <BsCart4 className="h-5 w-5 text-blue-500 hover:text-blue-700"/>
            </div>

            <Link href='/productReview'>
            <div className="w-8 h-8 bg-lime-100 rounded-full flex items-center justify-center hover:bg-green-200 cursor-pointer">
              <FaRegEye className="h-5 w-5 text-lime-900 hover:text-green-500" onClick={()=>{localStorage.setItem('selectedId',prenda._id)}} />
            </div>
            </Link>

          </div>
        </div>
        <p className="text-sm text-gray-600">{prenda.descripcion}</p>
      </div>
    </div>
  );
};

export default ImprovedProductCard;
