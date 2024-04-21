import React, { useState, useEffect } from 'react';
import CardCart from './cart/CardCart';
import { handleRemoveClick } from '@/app/services/cart';

const ShoppingCart = ({ onClose }) => {
  const [cartItems, setCartItems] = useState([]);
  const [subtotalPrice, setSubtotalPrice] = useState(0);

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

    // Calcular el subtotal sumando el precio de cada artículo multiplicado por su cantidad
    const subtotal = userCart.reduce((total, item) => {
      return total + (item.precio * item.cantidad);
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



  // Function to create the cart if it doesn't exist
  const createCartIfNotExists = () => {
    const storedCart = localStorage.getItem('userCart');

    if (storedCart) {
      const parsedCart = JSON.parse(storedCart);
      setCartItems(parsedCart);
    } else {
      const newCart = [];
      localStorage.setItem('userCart', JSON.stringify(newCart));
      setCartItems(newCart);
    }
  };

  // useEffect to load the cart when the component mounts
  useEffect(() => {
    createCartIfNotExists();
  }, []);



  const handleContainerClick = (e) => {
    if (e.target.id !== 'cartSpace') {
      // Click inside the modal content, do nothing or handle as needed
    } else {
      // Click outside the modal content, close the modal
      onClose();
    }
  };



  return (
    <div className="relative z-15" aria-labelledby="slide-over-title" role="dialog" aria-modal="true">
      {/* Background backdrop */}
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity cursor-pointer"></div>

      <div className="fixed inset-0 overflow-hidden">
        <div id='cartSpace' className="absolute inset-0 overflow-hidden" onClick={handleContainerClick}>
          <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
            {/* Slide-over panel */}
            <div className="pointer-events-auto w-screen max-w-md">
              <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                {/* Header */}
                <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                  <div className="flex items-start justify-between">
                    <h2 className="text-lg font-serif font-medium text-gray-900" id="slide-over-title">CARRITO DE COMPRAS</h2>
                    <div className="ml-3 flex h-7 items-center">
                      <button type="button" onClick={onClose} className="relative -m-2 p-2 text-gray-400 hover:text-gray-500">
                        <span className="absolute -inset-0.5"></span>
                        <span className="sr-only">Close panel</span>
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                  </div>

                  {/* Product list */}
                  <div className="mt-8">
                    <div className="flow-root">
                      <ul role="list" className="-my-6 divide-y divide-gray-200">

                        {/* Product items */}
                        {cartItems.length > 0 && cartItems.map((item) => (
                          <CardCart
                            key={item._id}
                            _id={item._id}
                            precio={item.precio}
                            nombre={item.nombre}
                            material={item.material}
                            precioAntes={item.precioAntes}
                            imagenes={item.imagenes}
                            quantity={item.quantity}
                            onRemove={handleRemoveClickLocal} 
                            quantityChange={handleQuantityChangeLocal}
                          />
                        ))}

                        {/* No hay elementos en el carrito */}
                        {cartItems.length === 0 && <p>No hay elementos en el carrito.</p>}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Footer */}
                <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                  <div className="flex justify-between text-base font-medium text-gray-900">
                    <p className='font-serif '>SUBTOTAL</p>
                    <p className='font-bold'><span className='text-green-500 mr-1'>$</span>{subtotalPrice}</p>
                  </div>
                  <p className="mt-0.5 text-xs text-gray-500"></p>
                  <div className="mt-6">
                    <a href="/checkout" className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700">Checkout</a>
                  </div>
                  <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                    <p>
                      <button type="button" onClick={() => { onClose() }} className="font-medium text-indigo-600 hover:text-indigo-500">
                        Continuar comprando
                        <span aria-hidden="true"> &rarr;</span>
                      </button>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
