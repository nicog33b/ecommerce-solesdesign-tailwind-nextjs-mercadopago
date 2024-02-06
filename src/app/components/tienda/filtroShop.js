import React from 'react';
import { useState } from 'react';

import PriceFilter from './mobile/priceFilter';


const FiltroShop = ({ onFiltroChange }) => {
  const [precio, setPrecio] = useState('todos');
  const [epoca, setEpoca] = useState('todos');

  const handleFiltrar = () => {
    onFiltroChange({ precio, epoca });
  };

  return (
    <div className="bg-black p-4 shadow-md rounded-md text-white text-center flex justify-center">


      <div className=" items-center space-x-4">
    
      <form className="flex flex-col md:flex-row gap-3">
    <div className="flex">
        <input type="text" placeholder="Escribe aqui"
			className="w-full md:w-80 px-3 h-10 rounded-l border-2 border-white focus:border-yellow-500 "
			></input>
        <button type="submit" className="bg-blue-200 text-white  rounded-r px-2 md:px-3 py-0 md:py-1">Buscar</button>
    </div>
    <select id="pricingType" name="pricingType"
		className="w-full h-10 border-2 border-white focus:outline-none focus:border-yellow-500 text-black rounded px-2 md:px-3 py-0 md:py-1 tracking-wider">
		<option value="todos">Primera-Verano</option>
	</select>
</form>


      </div>
    </div>
  );
};

export default FiltroShop;
