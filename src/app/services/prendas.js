
const API_URL = process.env.NEXT_PUBLIC_API_KEY;

// Resto del código

// Función para manejar el fetch y devolver datos en formato JSON
const handleResponse = (response) => {
  if (!response.ok) {
    throw new Error(`Error: ${response.status}`);
  }
  return response.json();
};

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



// Función para actualizar el campo 'eliminateIn'
export const updateEliminateIn = async (id, newEliminateIn) => {
  const prenda = await getPrendaById(id);
  if (prenda) {
    if (newEliminateIn > 1) {
      // Si eliminateIn es mayor que 1, restar 1 y actualizar la prenda
      const updatedPrenda = { ...prenda, eliminateIn: newEliminateIn - 1 };
      await updatePrenda(id, updatedPrenda);
      return updatedPrenda;
    } else {
      // Si eliminateIn es 1 o menos, eliminar la prenda
      await deletePrenda(id);
      return null; // No hay prenda para devolver ya que fue eliminada
    }
  } else {
    throw new Error(`Prenda con ID ${id} no encontrada.`);
  }
};
