'use client';

import React from 'react'

import ProductGrid from '../components/tienda/productGrid'
import FiltroShop from '../components/tienda/filtroShop';
import TitleShop from '../components/tienda/titleShop';


const Tienda  =() => {

return(

    <div className=''>
    
    <FiltroShop/>

    <TitleShop/>
  
    <ProductGrid/>
  
    </div>
)
}

export default Tienda;