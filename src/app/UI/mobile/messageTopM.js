import React from "react";

import { BiWorld } from "react-icons/bi";
import { FaTruckFast } from "react-icons/fa6";


const MessageTopM = () => {
  return (
    <div className="colorPrincipal text-white text-center h-12 border-b-2  border-x-slate-400 ">
      <p className="colorText flex items-center justify-center h-full text-sm font-semibold tracking-wide ">
      <FaTruckFast className="text-white mr-1" /> ENVÍOS DESDE SALINAS A TODO EL MUNDO  <BiWorld className="text-white ml-1"/>

      </p>
    </div>
  );
};

export default MessageTopM;
