import React from 'react';
import Image from 'next/image';

const CardCart =(prendaId ,precio, nombre, material, precioAntes, imagenes)=> {

    
    const handleQuantityChange = (quantity) => {
        // Aquí puedes manejar la lógica cuando cambia la cantidad
        console.log(`Cantidad seleccionada: ${quantity}`);
      };
    
      const handleRemoveClick = () => {
     
      };

        const cantidadOptions = Array.from({ length: 10 }, (_, i) => i + 1);
    
  return (
    <div>
<li className="flex py-6">
                          {/* Product image */}
                          <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                            <Image src={imagenes[0].url} alt="Product 1" width={300} height={300}  className="h-full w-full object-cover object-center" />
                          </div>

                          {/* Product details */}
                          <div className="ml-4 flex flex-1 flex-col">
                            <div>
                              <div className="flex justify-between text-base font-medium text-gray-900">
                                <h3><a href="#">Throwback Hip Bag</a></h3>
                                <p className="ml-4">{precio}</p>
                              </div>
                              <p className="mt-1 text-sm text-gray-500">{nombre}</p>
                            </div>
                            <div className="flex items-center">
  <select
    className="mr-2 py-1 px-2 border border-gray-300 rounded text-black"
    onChange={(e) => handleQuantityChange(e.target.value)}
  >
    {cantidadOptions.map((cantidad) => (
      <option className='text-black' key={cantidad} value={cantidad}>
        {cantidad}
      </option>
    ))}
  </select>
  <button
    type="button"
    className="font-medium text-indigo-600 hover:text-indigo-500"
    onClick={() => handleRemoveClick()}
  >
    <span className='text-red-600 h-4 w-4'>X</span>
  </button>
</div>

                          </div>
                        </li>
    </div>
  )
}

export default CardCart