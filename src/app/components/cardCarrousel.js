'use client';
import React, { useState } from "react";
import Image from "next/image";
import { BsCart4 } from "react-icons/bs";
import { FaRegEye } from "react-icons/fa";

const ProductCard = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="mr-2 ml-2">
      <div className="flex items-center justify-center">
        <div className="w-full h-full py-2">
          <div
            className={`bg-yellow-500 relative shadow-lg hover:shadow-xl transition duration-500 rounded-lg ${
              isHovered ? "hovered" : ""
            }`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <Image
              className="rounded-t-lg w-full "
              src={isHovered ? "/primavera-verano/vestidoGipsy1.png" : "/primavera-verano/vestidoGipsy.png"}
              width={330}
              height={222}
            />
            <div className="py-3 px-4 rounded-lg bg-white my flex justify-between items-center">
              <h1 className="text-center font-bold text-black shadow-gray-300 border-1 border-black ">
                Vestido Gipsy de porcelana rosa
              </h1>

              <button className="m-0 py-2 px-1 mr-1 bg-blue-300 hover:bg-yellow-500 hover:text-white text-gray-800 font-bold rounded-lg shadow-md hover:shadow-lg transition duration-300 w-3/12">
                <BsCart4 className="h-6 w-6 font-bold text-blue-500 text-center mx-auto my-auto hover:text-blue-700"></BsCart4>
              </button>

              <button className="m-0 ml-1 py-2 px-1 text-center bg-blue-300 hover:bg-yellow-500 hover:text-white text-gray-800 font-bold rounded-lg shadow-md hover:shadow-lg transition duration-300 w-3/12">
                <FaRegEye className="h-6 w-6 font-bold text-lime-900 hover:text-green-500 mx-auto my-auto"></FaRegEye>
              </button>
            </div>
            <div className="absolute top-2 right-2 py-2 px-4 bg-white rounded-lg">
              <span className="text-md text-black text-lg font-bold shadow-yellow-200">
                <span className="text-green-500">$</span>150
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
