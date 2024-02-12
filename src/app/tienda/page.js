'use client';
import React, { useState, useEffect } from 'react';
import FiltroShop from '../components/tienda/filtroshop';
import TitleShop from '../components/tienda/TitleShop';
import ProductGrid from '../components/tienda/GridProduct';

const Tienda = () => {
  // Estado local para mantener los filtros seleccionados
  const [epoca, setEpoca] = useState('Todos');
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    // Log the initial value of selectedEpoca
    console.log('Initial selectedEpoca:', epoca);
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

      <TitleShop />

      {/* Paso de filtros a ProductGrid */}
      <ProductGrid  selectedEpoca={epoca} search={searchText} />
    </div>
  );
};

export default Tienda;
