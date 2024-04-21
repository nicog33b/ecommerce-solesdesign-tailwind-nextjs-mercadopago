import React, { useState, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa'; // Importa el icono de lupa de 'react-icons'
import { getAllPrendas } from '@/app/services/prendas';

const FiltroShop = ({ onFiltroChange, searchTextChange }) => {
  const [epocas, setEpocas] = useState([]);
  const [selectedEpoca, setSelectedEpoca] = useState('todos');

  useEffect(() => {
    const fetchPrendasAndEpocas = async () => {
      try {
        const allPrendas = await getAllPrendas();
        const uniqueEpocas = [...new Set(allPrendas.map(prenda => prenda.epoca).filter(Boolean))];
        setEpocas(uniqueEpocas);
        setSelectedEpoca('Otoño-Invierno');
        onFiltroChange('Otoño-Invierno');
      } catch (error) {
        console.error('Error fetching prendas:', error);
      }
    };

    fetchPrendasAndEpocas();
  }, []);

  return (
    <div className="bg-white p-4 shadow-lg rounded-lg text-black">
      <form className="flex flex-col md:flex-row justify-center items-center gap-4">
        <label className="text-center font-serif text-xl text-black">
          Buscar
        </label>
        <div className="flex flex-row items-center border border-gray-300 rounded-lg overflow-hidden focus-within:border-blue-500 transition duration-300">
          <input
            id="search"
            type="text"
            aria-label="Buscar prendas"
            placeholder="Buscar aqui..."
            onChange={(e) => searchTextChange(e.target.value)}
            className="w-full md:w-80 px-4 py-2 bg-white text-black placeholder-gray-500 focus:outline-none"
          />
          <button type="button" className="p-3 m-1 text-black bg-white hover:bg-gray-100 transition duration-150">
            <FaSearch />
          </button>
        </div>
        <select
          id="epoca"
          name="epoca"
          value={selectedEpoca}
          onChange={(e) => {
            setSelectedEpoca(e.target.value);
            onFiltroChange(e.target.value);
          }}
          className="w-full md:w-40 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none bg-white text-black"
        >
          <option value="todos">Todos</option>
          {epocas.map(época => (
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
