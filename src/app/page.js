'use client';
import React from "react"
import DressCarrousel from "./components/DressCarrousel"
import HomeCarousel from "./components/home/titleCarrousel";
import ShopNowButton from "./components/home/showNowButton";



export default function Home() {
  return (
    
   <div className="bg-black mt-3 mb-6"> 
   <HomeCarousel></HomeCarousel>
    <DressCarrousel></DressCarrousel>
    <ShopNowButton></ShopNowButton>
    

    <hr className="bg-black mb-6" ></hr>
   </div>


  )
}
