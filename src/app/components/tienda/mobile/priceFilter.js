 import React, {useState} from 'react'

 
const PriceFilterM =()=> {
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');

    const handleFilterChange = () => {

        if (isNaN(minPrice) || isNaN(maxPrice)) {
          setError('Ingresa valores numéricos válidos');
          return;
        }
        setPriceRange([parseFloat(minPrice), parseFloat(maxPrice)]);
        setMinPrice('');
        setMaxPrice('');

      };

   return (
    
          <div className="flex flex-col items-center mt-2">
            <input
              type="text"
              placeholder="Precio mínimo"
              value={minPrice}
              onChange={(e) => setMinPrice(e.target.value)}
              className="border border-gray-300 p-1 mb-2"
            />
            <input
              type="text"
              placeholder="Precio máximo"
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
              className="border border-gray-300 p-1 mb-2"
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
 
 
 export default PriceFilterM;