import React, { useState } from 'react';

const QuantitySelector = ({ updateQuantity }) => {
    const [quantity, setQuantity] = useState(1);
  
    const handleDecrement = () => {
      if (quantity > 1) {
        setQuantity(quantity - 1);
        updateQuantity(quantity - 1);
      }
    };
  
    const handleIncrement = () => {
      if (quantity < 1) {
        setQuantity(quantity + 1);
        updateQuantity(quantity + 1);
      }
    };

  return (
    <form className="w-12/12">
      <label htmlFor="quantity-input" className="block text-sm font-medium text-gray-900 dark:text-white">
        Cantidad:
      </label>
      <div className="flex items-center">
        <button
          type="button"
          onClick={handleDecrement}
          className="bg-orange-200 text-black hover:bg-orange-300 border border-black rounded-s-lg p-3 h-11 focus:ring-gray-600 focus:ring-2 focus:outline-none"
        >
          <svg className="w-3 h-3 text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h16"/>
          </svg>
        </button>
        <input
          type="text"
          id="quantity-input"
          className="bg-gray-50 border-x-0 border-gray-300 h-11 text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          value={quantity}
          readOnly
        />
        <button
          type="button"
          onClick={handleIncrement}
          className="bg-orange-200 text-black hover:bg-orange-300 border border-black dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-e-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
        >
          <svg className="w-3 h-3 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16"/>
          </svg>
        </button>
      </div>
    </form>
  );
};

export default QuantitySelector;
