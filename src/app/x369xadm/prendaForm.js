import React, { useState } from 'react';

const PrendaForm = ({ onSubmit, initialValues }) => {
  const [prenda, setPrenda] = useState(initialValues || {});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPrenda((prevPrenda) => ({ ...prevPrenda, [name]: value }));
  };

  const handleTalleChange = (index, field, value) => {
    const updatedTalles = [...prenda.talles];
    updatedTalles[index][field] = value;
    setPrenda((prevPrenda) => ({ ...prevPrenda, talles: updatedTalles }));
  };

  const handleImagenChange = (index, field, value) => {
    const updatedImagenes = [...prenda.imagenes];
    updatedImagenes[index][field] = value;
    setPrenda((prevPrenda) => ({ ...prevPrenda, imagenes: updatedImagenes }));
  };

  const addTalle = () => {
    setPrenda((prevPrenda) => ({
      ...prevPrenda,
      talles: [...(prevPrenda.talles || []), { talle: '', disponible: false }],
    }));
  };

  const addImagen = () => {
    setPrenda((prevPrenda) => ({
      ...prevPrenda,
      imagenes: [...(prevPrenda.imagenes || []), { url: '', descripcion: '' }],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(prenda);
  };


  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-8 p-4 bg-white shadow-md rounded-md">
      <div className="mb-4">
        <label htmlFor="nombre" className="block text-gray-700 text-sm font-bold mb-2">Nombre</label>
        <input type="text" id="nombre" name="nombre" value={prenda.nombre || ''} onChange={handleChange} className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500 text-black" required />
      </div>
      <div className="mb-4">
        <label htmlFor="precio" className="block text-gray-700 text-sm font-bold mb-2">Precio</label>
        <input type="number" id="precio" name="precio" value={prenda.precio || ''} onChange={handleChange} className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500 text-black" required />
      </div>
      <div className="mb-4">
        <label htmlFor="precioAntes" className="block text-gray-700 text-sm font-bold mb-2">Precio Antes</label>
        <input type="number" id="precioAntes" name="precioAntes" value={prenda.precioAntes || ''} onChange={handleChange} className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500 text-black" />
      </div>
      <div className="mb-4">
        <label htmlFor="material" className="block text-gray-700 text-sm font-bold mb-2">Material</label>
        <input type="text" id="material" name="material" value={prenda.material || ''} onChange={handleChange} className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500 text-black" />
      </div>
      <div className="mb-4">
        <label htmlFor="capsula" className="block text-gray-700 text-sm font-bold mb-2">Cápsula</label>
        <input type="text" id="capsula" name="capsula" value={prenda.capsula || ''} onChange={handleChange} className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500 text-black" />
      </div>
      <div className="mb-4">
        <label htmlFor="tipo" className="block text-gray-700 text-sm font-bold mb-2">Tipo</label>
        <input type="text" id="tipo" name="tipo" value={prenda.tipo || ''} onChange={handleChange} className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500 text-black"  />
      </div>
      <div className="mb-4">
        <label htmlFor="epoca" className="block text-gray-700 text-sm font-bold mb-2">Época</label>
        <input type="text" id="epoca" name="epoca" value={prenda.epoca || ''} onChange={handleChange} className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500 text-black" required />
      </div>

      <div className="mb-4">
        <label htmlFor="talles" className="block text-gray-700 text-sm font-bold mb-2">Talles</label>
        {prenda.talles && prenda.talles.map((talle, index) => (
          <div key={index}>
            <input
              type="text"
              name={`talles[${index}].talle`}
              value={talle.talle || ''}
              onChange={(e) => handleTalleChange(index, 'talle', e.target.value)}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500 text-black"
              placeholder={`Talle ${index + 1}`}
            />
            <input
              type="checkbox"
              name={`talles[${index}].disponible`}
              checked={talle.disponible || false}
              onChange={(e) => handleTalleChange(index, 'disponible', e.target.checked)}
            />
            <span> Disponible</span>
          </div>
          
        ))}
        
        <button type="button" onClick={addTalle} className="bg-blue-500 text-white px-4 py-2 rounded-md">Agregar Talle</button>

      </div>

      {/* Añadir campos para imágenes */}
      <div className="mb-4">
        <label htmlFor="imagenes" className="block text-gray-700 text-sm font-bold mb-2">Imágenes</label>
        {prenda.imagenes && prenda.imagenes.map((imagen, index) => (
          <div key={index}>
            <input
              type="text"
              name={`imagenes[${index}].url`}
              value={imagen.url || ''}
              onChange={(e) => handleImagenChange(index, 'url', e.target.value)}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500 text-black"
              placeholder={`URL de la Imagen ${index + 1}`}
            />
            <input
              type="text"
              name={`imagenes[${index}].descripcion`}
              value={imagen.descripcion || ''}
              onChange={(e) => handleImagenChange(index, 'descripcion', e.target.value)}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500 text-black"
              placeholder={`Descripción de la Imagen ${index + 1}`}
            />
          </div>

        ))}
          <button type="button" onClick={addImagen} className="bg-blue-500 text-white px-4 py-2 rounded-md">Agregar Imagen</button>
      </div>

      {/* Añadir campo para descripción */}
      <div className="mb-4">
        <label htmlFor="descripcion" className="block text-gray-700 text-sm font-bold mb-2">Descripción</label>
        <textarea
          id="descripcion"
          name="descripcion"
          value={prenda.descripcion || ''}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500 text-black"
          placeholder="Ingrese la descripción de la prenda"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="eliminateIn" className="block text-gray-700 text-sm font-bold mb-2">Eliminar en</label>
        <input
          type="number"
          id="eliminateIn"
          name="eliminateIn"
          value={prenda.eliminateIn || ''}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500 text-black"
          placeholder="Número para eliminar"
        />
      </div>

<div className="mb-4">
  <label htmlFor="cuidados" className="block text-gray-700 text-sm font-bold mb-2">Cuidados</label>
  <textarea
    id="cuidados"
    name="cuidados"
    value={prenda.cuidados || ''}
    onChange={handleChange}
    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500 text-black"
    placeholder="Ingrese los cuidados de la prenda"
  />
</div>

<div className="mb-4">
<input
  type="text"
  id="contornoDePecho"
  name="contornoDePecho"
  value={prenda.contornoDePecho || ''}
  onChange={handleChange}
  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500 text-black"
  placeholder="Contorno de Pecho"
/>

<input
  type="text"
  id="largo"
  name="largo"
  value={prenda.largo || ''}
  onChange={handleChange}
  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500 text-black"
  placeholder="Largo"
/>

<input
  type="text"
  id="manga"
  name="manga"
  value={prenda.manga || ''}
  onChange={handleChange}
  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500 text-black"
  placeholder="Manga"
/>
</div>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">Guardar Prenda</button>
    </form>
  );
};

export default PrendaForm;