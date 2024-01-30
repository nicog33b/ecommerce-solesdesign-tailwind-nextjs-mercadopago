'use client';

import React from 'react'

import ProductGrid from '../components/tienda/GridProduct'
import FiltroShop from '../components/tienda/FiltroShop';
import TitleShop from '../components/tienda/TitleShop';


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