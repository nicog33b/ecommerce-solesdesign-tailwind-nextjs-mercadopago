'use client'
import { useEffect, useState } from 'react';
import PrendaForm from './prendaForm';
import { createPrenda, updatePrenda, getAllPrendas } from '../services/prendas';

const AdminPage = () => {
  const [prendas, setPrendas] = useState([]);
  const [editingEliminateIn, setEditingEliminateIn] = useState(null);

  const handleEditEliminateIn = (prenda) => {
    setEditingEliminateIn(prenda._id);
  };

  const handleUpdateEliminateIn = async (prendaId, newValue) => {
    try {
      await updatePrenda(prendaId, { eliminateIn: newValue });
      // Recargar la lista de prendas después de actualizar
      const data = await getAllPrendas();
      setPrendas(data);
      setEditingEliminateIn(null); // Reset editing state after successful update
    } catch (error) {
      console.error('Error al actualizar EliminateIn:', error);
    }
  };

  useEffect(() => {
    // Cargar todas las prendas al montar la página
    const fetchData = async () => {
      try {
        const data = await getAllPrendas();
        setPrendas(data);
      } catch (error) {
        console.error('Error al obtener prendas:', error);
      }
    };

    fetchData();
  }, []);

  const handleCreatePrenda = async (prendaData) => {
    try {
      await createPrenda(prendaData);
      // Recargar la lista de prendas después de crear una nueva
      const data = await getAllPrendas();
      setPrendas(data);
    } catch (error) {
      console.error('Error al crear la prenda:', error);
    }
  };

  const handleUpdatePrenda = async (prendaData) => {
    try {
      await updatePrenda(prendaData._id, prendaData);
      // Recargar la lista de prendas después de actualizar
      const data = await getAllPrendas();
      setPrendas(data);
    } catch (error) {
      console.error('Error al actualizar la prenda:', error);
    }
  };

  return (
    <div className="container mx-auto my-8">
      <h1 className="text-2xl font-bold mb-4 text-center">Administrar Prendas</h1>
      <PrendaForm onSubmit={handleCreatePrenda} />

      <section id='ordenDeProductReview' className='bg-gray-900 mt-3 mb-3 py-2 px-2'>
        <h3 className='text-center'></h3>
        <p className='text-white text-center'>MATERIAL</p>
        <p className='text-white text-center'>TIPO</p>
        <p className='text-white text-center'>EPOCA</p>
        <p className='text-white text-center'>CUIDADOS</p>
        <p className='text-white text-center'>MEDIDAS</p> {/* Añadido el título para medidas */}
      </section>

      {/* Mostrar la lista de prendas en una tabla */}
      <div className="mt-8">
        <h2 className="text-xl font-bold mb-4">Todas las Prendas</h2>
        <table className="border-collapse w-full">
          <thead>
            <tr>
              <th className="border p-2">ID</th>
              <th className="border p-2">Nombre</th>
              <th className="border p-2">Precio</th>
              <th className="border p-2">Material</th>
              <th className="border p-2">Precio Antes</th>
              <th className="border p-2">Tipo</th>
              <th className="border p-2">Cápsula</th>
              <th className="border p-2">Época</th>
              <th className="border p-2">Talles</th>
              <th className="border p-2">Imágenes</th>
              <th className="border p-2">EliminateIn</th>
              <th className="border p-2">Cuidados</th> {/* Nuevo título para cuidados */}
              <th className="border p-2">Medidas</th> {/* Nuevo título para medidas */}
              <th className="border p-2">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {prendas.map((prenda) => (
              <tr key={prenda._id} className="border p-4">
                <td className='border p-2'>{prenda._id}</td>
                <td className="border p-2">{prenda.nombre}</td>
                <td className="border p-2">{prenda.precio}</td>
                <td className="border p-2">{prenda.material}</td>
                <td className="border p-2">{prenda.precioAntes}</td>
                <td className="border p-2">{prenda.tipo}</td>
                <td className="border p-2">{prenda.capsula}</td>
                <td className="border p-2">{prenda.epoca}</td>
                <td className="border p-2">
                  {prenda.talles && prenda.talles.map((talle, index) => (
                    <p key={index}>{talle.talle} ({talle.disponible ? 'Disponible' : 'No Disponible'})</p>
                  ))}
                </td>
                <td className="border p-2">
                  {prenda.imagenes && prenda.imagenes.map((imagen, index) => (
                    <div key={index}>
                      <p><a href={imagen.url} target="_blank" rel="noopener noreferrer">Enlace</a></p>
                      <p>Descripción: {imagen.descripcion}</p>
                    </div>
                  ))}
                </td>

                <td className="border p-2">
                  {editingEliminateIn === prenda._id ? (
                    <div>
                      <input
                        type="text"
                        value={prenda.eliminateIn}
                        onChange={(e) => handleUpdateEliminateIn(prenda._id, e.target.value)}
                      />
                    </div>
                  ) : (
                    <div>{prenda.eliminateIn}</div>
                  )}
                </td>

                <td className="border p-2">{prenda.cuidados}</td> {/* Añadido campo de cuidados */}
                {prenda.medidas && (
  <td className="border p-2">
    {/* Añadido campo de medidas */}
    <p>Contorno de Pecho: {prenda.medidas.contornoDePecho}</p>
    <p>Largo: {prenda.medidas.largo}</p>
    <p>Manga: {prenda.medidas.manga}</p>
  </td>
)}

                <td className="border p-2">
                  <button
                    onClick={() => handleEditEliminateIn(prenda)}
                    className="bg-blue-500 text-white px-3 py-1 rounded-md"
                  >
                    Editar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminPage;