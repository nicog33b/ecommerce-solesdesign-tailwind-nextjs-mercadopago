'use client';
import React, { useState, useEffect } from 'react';
import FiltroShop from '../components/tienda/FiltroShop';
import TitleShop from '../components/tienda/TitleShop';
import ProductGrid from '../components/tienda/GridProduct';

import { clearCredentials } from '../services/cart';

const Tienda = () => {
  // Estado local para mantener los filtros seleccionados
  const [epoca, setEpoca] = useState('Todos');
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    clearCredentials();
     }, []); 

  useEffect(() => {
  }, [epoca]);
  // Función para manejar cambios en los filtros
  const handleEpocaChange = (nuevaEpoca) => {
    setEpoca(nuevaEpoca);
  };

  const handleSearchTextChange = (newSearch) => {
    setSearchText(newSearch);
  };

  return (
    <div className=''>



      {/* Paso de estado y función de cambio a FiltroShop */}
      <FiltroShop onFiltroChange={handleEpocaChange} searchTextChange={handleSearchTextChange} />

      {/* Paso de filtros a ProductGrid */}
      <ProductGrid  selectedEpoca={epoca} search={searchText} />
    </div>
  );
};

export default Tienda;
