import React, { useState } from "react";


const Shop = ({ productos }) => {
  const [filtro, setFiltro] = useState("");
  const [productosFiltrados, setProductosFiltrados] = useState(productos);

  const handleFiltroChange = (event) => {
    const nuevoFiltro = event.target.value;
    setFiltro(nuevoFiltro);

    // Lógica de filtrado (puedes ajustar según tu implementación específica)
    const productosFiltrados = productos.filter((producto) =>
      producto.nombre.toLowerCase().includes(nuevoFiltro.toLowerCase())
    );

    setProductosFiltrados(productosFiltrados);
  };

  return (
    <div>
      {/* Sección de Filtros y Búsqueda */}
      <div>
        <input
          type="text"
          placeholder="Buscar producto..."
          value={filtro}
          onChange={handleFiltroChange}
        />
        {/* Otros filtros y opciones aquí */}
      </div>

      {/* Grid de Productos */}
      <div className="grid grid-cols-3 gap-4">
        {productosFiltrados.map((producto) => (
          <ProductCard key={producto.id} producto={producto} />
        ))}
      </div>
    </div>
  );
};

export default Shop;
