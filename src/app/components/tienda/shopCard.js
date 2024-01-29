import React from 'react'
import Image from 'next/image'

const ShopCard = ({precio, nombre, material, precioAntes }) => {
return(
    <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
    <a href="#">
        <Image src="/primavera-verano/vestidoGipsy.png"
                alt="Product" className="h-80 w-72 object-cover rounded-t-xl" width={600} height={600}/>
        <div className="px-4 py-3 w-72">
            <span className="text-gray-400 mr-3 uppercase text-xs">{material}</span>
            <p className="text-lg font-bold text-black truncate block capitalize">{nombre}</p>
            <div className="flex items-center">
                <p className="text-lg font-semibold text-black cursor-auto my-3">{precio}</p>
                <del>
                    <p className="text-sm text-gray-600 cursor-auto ml-2">{precioAntes}</p>
                </del>
                <div className="ml-auto">Iconos</div>
            </div>
        </div>
    </a>
</div>
)

}

export default ShopCard;