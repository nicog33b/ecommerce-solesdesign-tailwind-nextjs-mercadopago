import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const CardCart = ({ _id, precio, nombre, material, precioAntes, imagenes, quantity, onRemove, quantityChange }) => {
  const cantidadOptions = Array.from({ length: 10 }, (_, i) => i + 1);
  const [actualQuantity, setActualQuantity] = useState(quantity);

  const updateQuantity = () => {
    // Obtener el carrito del localStorage
    const storedCart = localStorage.getItem('userCart');
    // Parsear el carrito almacenado como JSON
    const parsedCart = JSON.parse(storedCart) || [];

    // Buscar el índice del elemento con el _id proporcionado
    const item = parsedCart.find(item => item._id === _id);

    // Verificar si se encontró el artículo y obtener su cantidad
    const actualValue = item ? item.cantidad : 0;

    setActualQuantity(actualValue);

      // Si necesitas actualizar el valor del select
  const selectElement = document.getElementById(`quantity${_id}`);
  if (selectElement) {
    selectElement.value = actualValue;
  }

  }

  // useEffect se ejecuta al montar el componente
  useEffect(() => {
    updateQuantity();
  }, []); // El segundo argumento es un array de dependencias, si está vacío se ejecutará solo una vez al montar el componente

  return (
    <div>
      <li className="flex py-6">
        <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
          <Image src={imagenes[0].url} alt="Product" width={300} height={300} className="h-full w-full object-cover object-center" />
        </div>
        <div className="ml-4 flex flex-1 flex-col">
          <div>
            <div className="flex justify-between text-base font-medium text-gray-900">
              <h3><a href="#">{nombre}</a></h3>
              <p className="ml-4"><span className='text-green-500 mr-1'>$</span>{precio}</p>
            </div>
            <p className="mt-1 text-sm text-gray-500">{material}</p>
          </div>
          <div className="flex items-center">

          <select
  id={`quantity${_id}`}
  className="mr-2 py-1 px-2 border border-gray-300 rounded text-black"
  onChange={(e) => {
    const newQuantity = parseInt(e.target.value);
    quantityChange(_id, newQuantity);
    updateQuantity(newQuantity);
  }}
  value={actualQuantity}
>
  {cantidadOptions.map((cantidad) => (
    <option className='text-black' key={cantidad} value={cantidad}>
      {cantidad}
    </option>
  ))}
</select>



            <button
              type="button"
              className="font-medium text-indigo-600 hover:text-indigo-500"
              onClick={() => {
                onRemove(_id);  // Llamar a la función de callback pasada desde Cart
              }}
            >
              <span className='text-red-600 h-4 w-4'>X</span>
            </button>
          </div>
        </div>
      </li>
    </div>
  );
};

export default CardCart;
