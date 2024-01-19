import React from 'react';
import { GiAmpleDress } from 'react-icons/gi';

const Logo = () => {
    return(
        <div className="bg-white flex items-start logoStyle cursor-pointer shadow-sm shadow-gray-600 p-1 w-[3/12] mt-3 mb-3 hover:shadow-md transition duration-300">
        <div className="text-black text-xl font-semibold hover:text-yellow-500 ">
          S
        </div>
        <div className="text-black text-lg flex hover:text-yellow-400">
          {["O", "L", "E", "S"].map((letter, index) => (
            <span
              key={index}
              className="text-black text-xl font-semibold hover:text-yellow-500 transition duration-300 transform hover:scale-110"
            >
              {letter}
            </span>
          ))}
          <span className="text-black text-xl font-semibold hover:text-yellow-500 transition duration-300 transform hover:scale-110">
            DESIGN
          </span>
          <GiAmpleDress className="text-black hover:text-yellow-500 transition duration-300 transform hover:scale-110" />
        </div>
      </div>

    )
};

export default Logo;