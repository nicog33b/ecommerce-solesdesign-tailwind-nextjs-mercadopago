import React, { useState, useEffect } from 'react';
import { getAllPrendas } from '@/app/services/prendas';
//no utilizado 
import PriceFilter from './mobile/priceFilter';

const FiltroShop = ({ onFiltroChange, searchTextChange }) => {
  const [epocas, setEpocas] = useState([]);
  const [selectedEpoca, setSelectedEpoca] = useState('todos');
  

  useEffect(() => {
    const fetchPrendasAndEpocas = async () => {
      try {
        const allPrendas = await getAllPrendas();
        const uniqueEpocas = [...new Set(allPrendas.map((prenda) => prenda.epoca).filter(Boolean))];
        setEpocas(uniqueEpocas);
        setSelectedEpoca(uniqueEpocas[0]); // Set the default selected época or 'todos' if empty
        onFiltroChange(uniqueEpocas[0]); // Agregamos esta línea para actualizar los productos al cargar
      } catch (error) {
        console.error('Error fetching prendas:', error);
      }
    };
  
    fetchPrendasAndEpocas();

  
  }, []);


  return (
    <div className="bg-black p-4 shadow-md rounded-md text-white text-center flex justify-center">
      <div className="items-center space-x-4">
        <form className="flex flex-col md:flex-row gap-3">
          <div className="flex">
            <input
                 onChange={(y) => {
                  searchTextChange(y.target.value); // Call the callback with the selected época
                }}
              type="text"
              placeholder="Encuentra tu prenda unica...."
              className="text-black w-full md:w-80 px-3 h-10 rounded-l border-2 border-white focus:border-yellow-500"
            />
          
          </div>
          <select
            id="epoca"
            name="epoca"
            value={selectedEpoca}
            onChange={(e) => {
              setSelectedEpoca(e.target.value);
              onFiltroChange(e.target.value); // Call the callback with the selected época
            }}
            className="w-full h-10 border-2 border-white focus:outline-none focus:border-yellow-500 text-black rounded px-2 md:px-3 py-0 md:py-1 tracking-wider"
          >
            <option value="todos">Todos</option>
            {epocas.map((época) => (
              <option key={época} value={época}>
                {época}
              </option>
            ))}
          </select>
        </form>
      </div>
    </div>
  );
};

export default FiltroShop;
