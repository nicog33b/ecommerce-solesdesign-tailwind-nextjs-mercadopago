'use client';
import React, {useEffect} from "react"
import DressCarrousel from "./components/home/DressCarrousel"
import HomeCarousel from "./components/home/titleCarrousel";
import ShopNowButton from "./components/home/showNowButton";

import { clearCredentials } from "./services/cart";



export default function Home() {

  useEffect(() => {
    clearCredentials();
     }, []); 
     
  return (
    
   <div className="bg-black mt-3 mb-6"> 
   
   <HomeCarousel></HomeCarousel>
    <DressCarrousel></DressCarrousel>
    <ShopNowButton></ShopNowButton>
    <hr className="bg-black mb-6" ></hr>
   </div>


  )
}