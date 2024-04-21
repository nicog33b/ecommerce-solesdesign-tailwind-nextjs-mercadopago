// components/Spinner.js
import React from 'react';

const Spinner = () => {
  return (
    <div className="flex justify-center items-center mt-10">
      <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-yellow-500 border-opacity-50"></div>
    </div>
  );
};

export default Spinner;
