import React from "react";
import { BiWorld } from "react-icons/bi";
import { FaTruckFast } from "react-icons/fa6";

const MessageTopM = () => {
  return (
    <div className="colorPrincipal text-white text-center h-12 border-b-2 border-x-slate-400">
      <p className="colorText flex items-center justify-center h-full text-sm font-semibold tracking-wide">
        <FaTruckFast className="mr-2 text-blue-500" />
        <span className="letter-spacing-wide sm:letter-spacing-normal">
          COMPRAS MAYORES A
        </span>
        <span className="text-green-500 mx-2">$</span>
        <span className="letter-spacing-wide sm:letter-spacing-normal">
          5000 ENVÍO GRATIS
        </span>
        <BiWorld className="ml-2 text-blue-500" />
      </p>
    </div>
  );
};

export default MessageTopM;
