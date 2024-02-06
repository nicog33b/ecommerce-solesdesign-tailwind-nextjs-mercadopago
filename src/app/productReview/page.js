
//fundamental
'use client';
import React, { useEffect, useState } from 'react';

//icons
import { FaTruck, FaRecycle, FaShoppingBag } from 'react-icons/fa';

//estilizacion
import Swal from 'sweetalert2'

//components
import QuantitySelector from '../components/productReview/quantity';

//extern function
import { getPrendaById } from '../services/prendas';
import { addItemToCart } from '../services/cart';
import { createCartIfNotExists } from '../services/cart';


const ProductReview = () => {
  const [productDetails, setProductDetails] = useState({
    nombre: '',
    precio: '',
    talles: [],
    epoca: '',
    material: '',
    tipo: '',
    imagenes: {},
  });

  const [cantidad, setCantidad] = useState();

  const selectedId = typeof window !== 'undefined' ? localStorage.getItem('selectedId') : null;


  useEffect(() => {

    getPrendaById(selectedId)
      .then(itemDetails => {
        setProductDetails(itemDetails);
      })
      .catch(error => {
        console.error('Error fetching product details:', error);
      });
  }, []);

  const addToCart = () => {
    createCartIfNotExists();
    const storedCart = localStorage.getItem('userCart');
  
    // Check if the item is already in the cart
    if (storedCart && storedCart.includes(selectedId)) {
      Swal.fire({
        icon: 'info',
        title: 'Esta prenda ya está en tu carrito',
        showCancelButton: true,
        confirmButtonText: 'Checkout',
        cancelButtonText: 'Seguir comprando',
      }).then((result) => {
        if (result.isConfirmed) {
          // Redirige a /checkout
          window.location.href = '/checkout';
        }else{
          window.location.href ='/tienda'
        }
      });
    } else {
      addItemToCart(selectedId, productDetails.precio, productDetails.nombre, productDetails.material, productDetails.precioAntes, productDetails.imagenes, cantidad);
      Swal.fire({
        icon: 'success',
        title: 'Producto agregado al carrito',
        showCancelButton: true,
        confirmButtonText: 'Checkout',
        cancelButtonText: 'Seguir comprando',
      }).then((result) => {
        if (result.isConfirmed) {
          // Redirige a /checkout
          window.location.href = '/checkout';
        } else {
          // Redirige a /tienda
          window.location.href = '/tienda';
        }
      });
    }
  };
  

  const updateQuantity = (newQuantity) => {
    setCantidad(newQuantity);
  };

  return (
    <div className="bg-gradient-to-r from-black to-yellow-500 lg:py-8 mb-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row -mx-4">
          <div className="md:flex-1 px-4 order-2 md:order-1 text-white">
            <h2 className="text-4xl font-extrabold mb-4 mt-8">
              {productDetails.nombre}
            </h2>
            <div className="mb-6">
              <span className="text-4xl font-serif">
                <span className="text-green-500 mr-2">$</span>
                {productDetails.precio}
              </span>
              <div className="flex items-start mt-4">
              <QuantitySelector updateQuantity={updateQuantity}/>               
              </div>
              <button
                  onClick={addToCart}
                  className="w-5/12 bg-green-600 text-black rounded-full font-bold hover:text-white hover:bg-black ml-2 px-3 py-3 text-center mt-3 "
                >
                  Agregar al carrito
                </button>
            </div>
            <div className="mb-6">
              <p className="font-bold text-gray-300">Talles disponibles:</p>
              <div className="flex items-center mt-2 space-x-2">
                {productDetails.talles.map(talle => (
                  <button
                    key={talle._id}
                    className="bg-gray-400 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-500"
                  >
                    {talle.talle}
                  </button>
                ))}
              </div>
            </div>
            <div className="mb-8">
              <p className="text-gray-300 text-lg mt-2">
                {productDetails.material}
                <br />
                {productDetails.epoca}
                <br />
                {productDetails.tipo}
              </p>
            </div>
            <div className="flex items-center mb-6 space-x-4">
              <FaTruck className="text-4xl" />
              <FaRecycle className="text-4xl" />
              <FaShoppingBag className="text-4xl" />
            </div>
            
          </div>
          <div className="md:flex-1 px-4 order-1 md:order-2">
            <div className="h-[460px] rounded-lg overflow-hidden mb-8">
              <img
                className="w-full h-full object-cover mt-3 rounded"
                src={productDetails.imagenes && productDetails.imagenes[0] && productDetails.imagenes[0].url}
                alt="Product Image"
              />
            </div>
       
          </div>

        </div>

      </div>
    </div>
  );
};

export default ProductReview;
