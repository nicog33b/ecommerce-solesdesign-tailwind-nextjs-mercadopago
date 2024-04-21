// compraService.js
const API_URL = process.env.NEXT_PUBLIC_API_REGISTRO; // Reemplaza con tu URL de API

const handleResponse = (response) => {
  if (!response.ok) {
    throw new Error(`Error: ${response.status}`);
  }
  return response.json();
};

export const getAllCompras = async () => {
  const response = await fetch(`${API_URL}`);
  return handleResponse(response);
};

export const getCompraById = async (id) => {
  const response = await fetch(`${API_URL}/${id}`);
  return handleResponse(response);
};

export const createCompra = async (compraData) => {
  const response = await fetch(`${API_URL}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(compraData),
  });
  return handleResponse(response);
};

export const deleteCompra = async (id) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'DELETE',
  });
  return handleResponse(response);
};
