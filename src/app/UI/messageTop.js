import React from "react";

import { BiWorld } from "react-icons/bi";
import { FaTruckFast } from "react-icons/fa6";


const MessageTop = () => {
  return (
    <div className="colorPrincipal text-white text-center h-12 border-b-2  border-x-slate-400 ">
      <p className="colorText flex items-center justify-center h-full text-lg font-semibold  tracking-wide ">
      <FaTruckFast className="text-white mr-1" />COMPRAS MAYORES A $5000UYU ENVÍO GRATIS <BiWorld className="text-white ml-1"/>

      </p>
    </div>
  );
};

export default MessageTop;
