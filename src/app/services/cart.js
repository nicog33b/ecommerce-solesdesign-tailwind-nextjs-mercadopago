


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
       // Obtener el carrito del localStorage
       const storedCart = localStorage.getItem('userCart');
    // Crear un objeto con los datos proporcionados
    const newItem = {
      _id,
      precio,
      cantidad,
      nombre,
      material,
      precioAntes,
      imagenes,
    };
  

    
      // Parsear el carrito almacenado como JSON
      const parsedCart = JSON.parse(storedCart);
      
      // Agregar el nuevo elemento al carrito
      parsedCart.push(newItem);
  
      // Actualizar el localStorage con el carrito actualizado
      localStorage.setItem('userCart', JSON.stringify(parsedCart));
      
  };


  export const handleRemoveClick = (_id) => {
       // Obtener el carrito del localStorage
       const storedCart = localStorage.getItem('userCart');
   // Parsear el carrito almacenado como JSON
   const parsedCart = JSON.parse(storedCart);
    
   // Buscar el índice del elemento con el _id proporcionado
   const itemIndex = parsedCart.findIndex(item => item._id === _id);
   
   if (itemIndex !== -1) {
     // Eliminar el elemento del carrito usando splice
     parsedCart.splice(itemIndex, 1);
     
     // Actualizar el localStorage con el carrito modificado
     localStorage.setItem('userCart', JSON.stringify(parsedCart));
  };
};

