import React, { useState, useEffect } from 'react';
import { getAllPrendas } from '@/app/services/prendas';

const FiltroShop = ({ onFiltroChange, searchTextChange }) => {
  const [epocas, setEpocas] = useState([]);
  const [selectedEpoca, setSelectedEpoca] = useState('todos');



  useEffect(() => {
    // Función asincrónica para obtener prendas y épocas
    const fetchPrendasAndEpocas = async () => {
      try {
        // Obtener todas las prendas
        const allPrendas = await getAllPrendas();
        // Obtener épocas únicas de las prendas
        const uniqueEpocas = [...new Set(allPrendas.map((prenda) => prenda.epoca).filter(Boolean))];

        // Establecer las épocas en el estado
        setEpocas(uniqueEpocas);
        //Establecer la epoca que la tienda carga como predeterminada.
        setSelectedEpoca('Otoño-Invierno');
        onFiltroChange('Otoño-Invierno');
      } catch (error) {
        console.error('Error fetching prendas:', error);
      }
    };
  
    // Llamar a la función al montar el componente
    fetchPrendasAndEpocas();
  }, []);



  

  return (
    <div className=" bg-black p-6 shadow-md rounded-lg text-white text-center">
      <form className="flex flex-col md:flex-row justify-center items-center gap-3">
        <p className='text-center font-serif text-xl text-white'>Filtros</p>
        <input
          type="text"
          placeholder="Encuentra tu prenda única..."
          onChange={(e) => searchTextChange(e.target.value)}
          className="w-full md:w-80 px-4 py-2 rounded-lg border border-white focus:outline-none focus:border-yellow-500 bg-white text-black placeholder-gray-500"
        />
        <select
          id="epoca"
          name="epoca"
          value={selectedEpoca}
          onChange={(e) => {
            setSelectedEpoca(e.target.value);
            onFiltroChange(e.target.value); // Call the callback with the selected época
          }}
          className="w-full md:w-40 px-4 py-2 rounded-lg border border-white focus:outline-none focus:border-yellow-500 bg-white text-black"
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
  );
};

export default FiltroShop;
