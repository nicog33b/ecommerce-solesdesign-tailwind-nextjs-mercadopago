'use client';
import React from "react"
import DressCarrousel from "./components/dressCarrousel"

export default function Home() {
  return (
    
   <div className="bg-black mt-3 mb-6"> 
    <DressCarrousel></DressCarrousel>
    
    <div className="mt- z-2 text-black font-bold text-3xl text-center mx-auto my-auto rounded-xl cursor-pointer w-2/12 bg-white py-2 px-2 mb-3">Ver más...</div>

    <hr className="text-white mb-6" ></hr>
   </div>


  )
}
