import React from 'react';
import ShopCard from './shopCard';


const ProductGrid = () => {
    
    return(

        <div className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
         <ShopCard/>
         <ShopCard/>
         <ShopCard/>
         <ShopCard/>
         <ShopCard/>
         <ShopCard/>
        </div>

    )
}

export default ProductGrid;