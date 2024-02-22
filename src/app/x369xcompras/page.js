'use client';
// components/ComprasTable.js
import React, { useState, useEffect } from 'react';
import { getAllCompras, deleteCompra } from '../services/registro';
import { getPrendaById } from '../services/prendas';

const ComprasTable = () => {
  const [compras, setCompras] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAllCompras();
        // Para cada compra, obtenemos el nombre de la prenda y actualizamos el estado
        const comprasWithPrendaNames = await Promise.all(
          data.map(async (compra) => {
            const itemsWithPrendaNames = await Promise.all(
              compra.items.map(async (item) => {
                const prenda = await getPrendaById(item.prendaId);
                return { ...item, prendaName: prenda.nombre };
              })
            );
            return { ...compra, items: itemsWithPrendaNames };
          })
        );
        setCompras(comprasWithPrendaNames);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleDeleteCompra = async (id) => {
    try {
      await deleteCompra(id);
      setCompras((prevCompras) => prevCompras.filter((compra) => compra._id !== id));
    } catch (error) {
      console.error(`Error deleting compra with ID ${id}:`, error);
    }
  };

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className="max-w-3xl mx-auto mt-8 text-black">
      {compras.map((compra) => (
        <div key={compra._id} className="bg-white p-4 shadow-md mb-4 rounded-md">
          <h2 className="text-xl font-semibold mb-2">ID de Compra: {compra._id}</h2>
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="p-2 border">Prenda</th>
                <th className="p-2 border">Cantidad</th>
              </tr>
            </thead>
            <tbody>
              {compra.items.map((item) => (
                <tr key={item._id} className="border-t">
                  <td className="p-2 border">{item.prendaName}</td>
                  <td className="p-2 border">{item.cantidad}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="mt-2">
            <p className="text-lg font-semibold">Total: ${compra.total}</p>
            <p className="text-gray-500">Fecha: {formatDate(compra.fecha)}</p>
          </div>
          <div className="mt-4">
            <button
              className="bg-red-500 text-white px-4 py-2 rounded-md"
              onClick={() => handleDeleteCompra(compra._id)}
            >
              Eliminar Compra
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ComprasTable;
