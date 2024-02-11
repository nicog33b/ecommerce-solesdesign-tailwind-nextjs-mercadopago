// services/prendas.js
const API_URL = 'http://localhost:3000/shop/prendas';

// Función para manejar el fetch y devolver datos en formato JSON
const handleResponse = (response) => {
  if (!response.ok) {
    throw new Error(`Error: ${response.status}`);
  }
  return response.json();
};

// Obtener todas las prendas
export const getAllPrendas = async () => {
  const response = await fetch(API_URL);
  return handleResponse(response);
};


// Obtener todas las épocas únicas
export const getAllEpocas = async () => {
  const allPrendas = await getAllPrendas();

  const epocasUnicas = [];
  allPrendas.forEach((prenda) => {
    if (prenda.epoca && !epocasUnicas.includes(prenda.epoca)) {
      epocasUnicas.push(prenda.epoca);
    }
  });

  return epocasUnicas; // Puedes devolver el array de épocas si lo necesitas en otro lugar
};


// Obtener una prenda por ID
export const getPrendaById = async (id) => {
  const response = await fetch(`${API_URL}/${id}`);
  return handleResponse(response);
};

// Obtener todas las prendas de Primavera-Verano
export const getPrimaveraVeranoPrendas = async () => {
  const allPrendas = await getAllPrendas();
  const primaveraVeranoPrendas = allPrendas.filter(prenda => prenda.epoca === 'Primavera-Verano');
  return primaveraVeranoPrendas;
};


// Crear una nueva prenda
export const createPrenda = async (prendaData) => {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(prendaData),
  });
  return handleResponse(response);
};

// Actualizar una prenda
export const updatePrenda = async (id, prendaData) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(prendaData),
  });
  return handleResponse(response);
};

// Eliminar una prenda
export const deletePrenda = async (id) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'DELETE',
  });
  return handleResponse(response);
};

