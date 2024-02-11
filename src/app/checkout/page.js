'use client';

import React, { useState, useEffect } from 'react';
import ProductRow from '../components/checkout/productRow';

import { initMercadoPago, Wallet } from '@mercadopago/sdk-react'



import { handleRemoveClick } from '../services/cart';
const CheckoutCart = () => {

    //useState
    const [cartItems, setCartItems] = useState([]);
    const [subtotalPrice, setSubtotalPrice] = useState(0);
    const [preferenceId, setPreferenceId] = useState(null);
    const [showItems, setShowItems] = useState(true); // Nuevo estado para controlar la visibilidad de la sección de elementos
    const [purchaseCompleted, setPurchaseCompleted] = useState(false);


     //MERCADOPAGO ZONE
     initMercadoPago('APP_USR-e86b5dd8-20ac-49cf-8832-832456ab65e9', {
        locale: "es-UY"
      });
      

    
      const createPreference = async () => {
        try {
          const response = await fetch('http://localhost:3000/mercadopago/create-preference', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              title: 'PRENDAS DE IDENTIDAD UNICA - SOLESDESIGN',
              quantity: 1,
              price: subtotalPrice, // Usar el subtotal como precio total
            }),
          });
      
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
      
          const data = await response.json();
          const { id } = data;
          return id;
        } catch (error) {
          console.error('Error:', error);
        }
      };
      
      
      const handleBuy = async () => {
        try {
          const id = await createPreference();
          if (id) {
            setPreferenceId(id);
            // Ocultar la sección de elementos después de realizar la compra
            setShowItems(false);
            // Establecer purchaseCompleted a true
            setPurchaseCompleted(true);
          }
        } catch (error) {
          console.error('Error creating preference:', error);
        }
      };
      
  
      

    const handleQuantityChangeLocal = (_id, newQuantity) => {
        // Obtener el carrito del localStorage
        let userCart = JSON.parse(localStorage.getItem('userCart')) || [];
    
        // Buscar el objeto con el mismo _id y actualizar la cantidad
        userCart = userCart.map((item) => {
          if (item._id === _id) {
            return {
              ...item,
              cantidad: newQuantity,
            };
          }
          return item;
        });
    
        // Guardar el carrito actualizado en el localStorage
        localStorage.setItem('userCart', JSON.stringify(userCart));
    
        // Volver a calcular el subtotal después de la actualización
        calculateSubTotalPrice();
      };
    
      const calculateSubTotalPrice = () => {
        // Obtener el carrito del localStorage
        const userCart = JSON.parse(localStorage.getItem('userCart')) || [];
      
        // Imprimir el carrito para verificar los datos
        console.log('userCart:', userCart);
      
        // Calcular el subtotal sumando el precio de cada artículo multiplicado por su cantidad
        const subtotal = userCart.reduce((total, item) => {
          return total + item.precio * item.cantidad;
        }, 0);
      
        // Actualizar el estado del subtotalPrice
        setSubtotalPrice(subtotal);
      };
    
      // Llamar a la función al montar el componente o cuando cambie el carrito
      useEffect(() => {
        calculateSubTotalPrice();
      }, []); // El array vacío asegura que se ejecute solo al montar el componente
    
    
      // Función de recarga del carrito
      const reloadCart = () => {
        const updatedCart = JSON.parse(localStorage.getItem('userCart')) || [];
        setCartItems(updatedCart);
      };
    
      useEffect(() => {
        // Actualizar el estado inicial del carrito
        reloadCart();
      }, []);  // Se ejecutará solo al montar el componente
    
      const handleRemoveClickLocal = (_id) => {
        // Eliminar el elemento del carrito
        handleRemoveClick(_id);
    
        // Recargar el carrito después de la eliminación
        reloadCart();
        //Vuelve a calcular el subtotal actualizado.
        calculateSubTotalPrice();
      };
    
  
      return (
        <div className="bg-gray-100 min-h-screen py-8 mb-15 overflow-x-auto">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl font-serif mb-4 text-black">Carrito de compras</h1>
            <div className="flex flex-col md:flex-row gap-4">
              <div className={`md:w-3/4 ${showItems ? '' : 'hidden'}`}>
                <div className="bg-white rounded-lg shadow-md p-6 mb-4 overflow-x-auto">
                  <table className="w-full">
                <thead>
                  <tr>
                    <th className="text-left font-semibold text-black">Producto</th>
                    <th className="text-left font-semibold text-black">Nombre</th>
                    <th className="text-left font-semibold text-black">Precio</th>
                    <th className="text-left font-semibold text-black">Cantidad</th>
                    <th className="text-left font-semibold text-black">Total</th>
                    <th className="text-left font-semibold text-black">Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map(item => (
                  <ProductRow
                  key={item._id}
                  imageUrl={item.imagenes[0].url}
                  productName={item.nombre}
                  price={item.precio}
                  initialQuantity={item.cantidad}
                  total={item.precio * item.cantidad}
                  onQuantityChange={(newQuantity) => handleQuantityChangeLocal(item._id, newQuantity)}
                  onRemoveClick={() => handleRemoveClickLocal(item._id)}
                />
                  ))}
                </tbody>
                </table>
            </div>
          </div>

          <div className={`md:w-6/12 ${showItems ? '' : 'w-full'} md:mt-0 mt-4`}>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-lg font-semibold mb-4 text-black">Resumen:</h2>
              <hr className="my-2" />
              <div className="flex justify-between mb-2 text-black">
                <span className="font-semibold">Total</span>
                <span className="font-semibold">${(subtotalPrice + 0.00).toFixed(2)}</span>
              </div>

              <button className="bg-green-600  text-white py-2 px-4 rounded-lg mt-4 w-full" onClick={purchaseCompleted ? () => window.location.reload() : handleBuy}>
                {purchaseCompleted ? 'Seguir comprando' : 'Finalizar compra'}
              </button>
                
              <div className='w-full items-center'>
              {preferenceId && <Wallet initialization={{ preferenceId }} />}
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutCart;