import React, { useState } from 'react';

const PriceFilter = () => {
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  const handleFilterChange = () => {
    // Aquí deberías tener la lógica de manejo de cambios según tus necesidades
    if (isNaN(minPrice) || isNaN(maxPrice)) {
      console.error('Ingresa valores numéricos válidos');
      return;
    }
    console.log('Aplicar filtros:', { minPrice, maxPrice });
  };

  return (
    <div className="flex  mt-2">
      <input
        type="text"
        placeholder="Precio mínimo"
        value={minPrice}
        onChange={(e) => setMinPrice(e.target.value)}
        className="border border-gray-300 p-1 mb-2 mr-2"
      />
      <input
        type="text"
        placeholder="Precio máximo"
        value={maxPrice}
        onChange={(e) => setMaxPrice(e.target.value)}
        className="border border-gray-300 p-1 mb-2 mr-2"
      />
      <button
        onClick={handleFilterChange}
        className="bg-gray-900 text-white px-4 py-1 rounded mb-2" 
      >
        Aplicar
      </button>
    </div>
  );
};

export default PriceFilter;
