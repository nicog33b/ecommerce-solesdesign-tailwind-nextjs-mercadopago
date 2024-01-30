// productGrid.js
import React, { useEffect, useState } from 'react';
import ShopCard from './ShopCard';
import { getAllPrendas } from '@/app/services/prendas';


const ProductGrid = () => {
  const [prendas, setPrendas] = useState([]);

  useEffect(() => {
    // Llamar a la función para obtener todas las prendas
    getAllPrendas()
      .then((data) => setPrendas(data))
      .catch((error) => console.error('Error fetching prendas:', error));
  }, []);

  return (
    <div className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
    {prendas.map((prenda) => (
        <ShopCard
            key={prenda._id}
            precio={prenda.precio}
            nombre={prenda.nombre}
            material={prenda.material}
            precioAntes={prenda.precioAntes}
            imagenes={prenda.imagenes}
        />
    ))}
</div>
  );
};

export default ProductGrid;
