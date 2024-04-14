

const generateRandomToken = () => {
  return Math.random().toString(36).substring(2, 12) + Math.random().toString(36).substring(2, 12);
};

export const generateBuyCredentials = () => {
  // Generar un token aleatorio
  const randomToken = generateRandomToken();

  // Almacenar el token en localStorage con la clave "btoken"
  localStorage.setItem('btoken', randomToken);


};


export const clearCredentials = () => {
  
  localStorage.removeItem('btoken');
  localStorage.removeItem('compraProcesada');
  
}

// Función para crear el carrito si no existe
export const createCartIfNotExists = () => {
    // Obtener el carrito del localStorage
    const storedCart = localStorage.getItem('userCart');

    if (!storedCart) {
      // Si no hay carrito almacenado, inicializar un nuevo carrito
      const newCart = [];
      localStorage.setItem('userCart', JSON.stringify(newCart));
     
    }

  };


  // Función para crear el carrito si no existe
export const cartUpDataAndCheckout = () => {
    // Obtener el carrito del localStorage
    const storedCart = localStorage.getItem('userCart');
  
    if (storedCart) {
      // Parsear el carrito almacenado como JSON
      const parsedCart = JSON.parse(storedCart);
      setCartItems(parsedCart);
    } else {
      // Si no hay carrito almacenado, inicializar un nuevo carrito
      const newCart = [];
      localStorage.setItem('userCart', JSON.stringify(newCart));
      setCartItems(newCart);
    }
  };


  export const addItemToCart = (_id, precio, nombre, material, precioAntes, imagenes, cantidad) => {
    const storedCart = localStorage.getItem('userCart');
    const parsedCart = storedCart ? JSON.parse(storedCart) : [];
    
    const newItem = { _id, precio, cantidad, nombre, material, precioAntes, imagenes };
    parsedCart.push(newItem);
    
    localStorage.setItem('userCart', JSON.stringify(parsedCart));
    
    // Disparar un evento personalizado para indicar que el carrito ha sido actualizado
    window.dispatchEvent(new CustomEvent('cartUpdated'));
  };
  
  export const handleRemoveClick = (_id) => {
    const storedCart = localStorage.getItem('userCart');
    const parsedCart = JSON.parse(storedCart);
    
    const itemIndex = parsedCart.findIndex(item => item._id === _id);
    if (itemIndex !== -1) {
      parsedCart.splice(itemIndex, 1);
      localStorage.setItem('userCart', JSON.stringify(parsedCart));
      
      // Disparar un evento personalizado para indicar que el carrito ha sido actualizado
      window.dispatchEvent(new CustomEvent('cartUpdated'));
    }
  };
  

