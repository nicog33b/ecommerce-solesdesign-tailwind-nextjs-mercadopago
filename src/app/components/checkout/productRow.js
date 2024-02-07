// components/ProductRow.js

import React, { useState, useEffect } from 'react';
import { MdDelete } from 'react-icons/md';

const ProductRow = ({ imageUrl, productName, price, initialQuantity, total, onRemoveClick, onQuantityChange }) => {
  const [quantity, setQuantity] = useState(initialQuantity);
  const [rowTotal, setRowTotal] = useState(total);

  useEffect(() => {
    // Actualizar el total de la fila cuando cambie la cantidad
    const newTotal = price * quantity;
    setRowTotal(newTotal);
  }, [quantity, price]);

  const handleIncrement = () => {
    if (quantity < 10) {
      setQuantity(quantity + 1);
      onQuantityChange(quantity + 1); // Llamar a la función de cambio de cantidad en CheckoutCart
    }
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      onQuantityChange(quantity - 1); // Llamar a la función de cambio de cantidad en CheckoutCart
    }
  };

  return (
    <tr>
      <td className="py-4 mb-12">
        <div className="flex items-center">
          <img className="h-16 w-16 mr-4" src={imageUrl} alt="Product image" />
        </div>
      </td>

      
      <td className="py-4 text-black mr-2">{productName}</td>

      <td className="py-4 text-black mr-2"><span className='text-green-500 mr-1'>$</span>{price}</td>
      <td className="py-4 text-black mr-2">
        <div className="flex items-center">
          <button className="border rounded-md py-2 px-4 mr-2 text-black" onClick={handleDecrement}>
            -
          </button>
          <span className="text-center w-8 text-black">{quantity}</span>
          <button className="border rounded-md py-2 px-4 ml-2 text-black" onClick={handleIncrement}>
            +
          </button>
        </div>
      </td>
      <td className="py-4 text-black mr-2">{rowTotal}</td>
      <td className="py-4 text-center mr-2">
        <div className="flex justify-center items-center">
          <MdDelete
            className="w-4 h-4 bg-white text-gray-800 hover:text-red-500 rounded cursor-pointer"
            onClick={onRemoveClick}
          />
        </div>
      </td>
    </tr>
  );
};

export default ProductRow;
