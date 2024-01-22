import React from 'react'
  
  const ProductCard = () => {
    return (
      <div>
    
  <div className="container flex justify-center mr-3 ml-3">
    <div className="max-w-sm py-12">
      <div className="bg-white relative shadow-lg hover:shadow-xl transition duration-500 rounded-lg">
        <img className="rounded-t-lg" src="https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1049&q=80" alt="" />
        <div className="py-6 px-8 rounded-lg bg-white">
          <button className="m-0 py-2 px-1 text-center bg-yellow-100 hover:text-yellow-500 text-gray-800 font-bold rounded-lg shadow-md hover:shadow-lg transition duration-300 w-full">Agregar al carrito</button>
        </div>
        <div className="absolute top-2 right-2 py-2 px-4 bg-white rounded-lg">
          <span className="text-md text-green-800 text-lg font-bold shadow-yellow-200">$150</span>
        </div>
      </div>
    </div>
  </div>
      </div>
  
  )}
  export default ProductCard;