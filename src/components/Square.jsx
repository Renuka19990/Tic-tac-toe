import React from 'react';

const Square = ({ value, onClick }) => {
  return (
    <button
      className={`w-24 h-24 bg-white border border-gray-400 flex items-center justify-center text-3xl font-bold cursor-pointer hover:bg-gray-100 focus:outline-none ${value === 'X' ? 'text-blue-500' : 'text-red-500'}`}
      onClick={onClick}
    >
      {value}
    </button>
  );
};

export default Square;
