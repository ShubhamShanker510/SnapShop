import React from 'react';
import { useNavigate } from 'react-router-dom';

const Box = ({ value }) => {
  const menData = [
    "SHIRTS",
    "PANTS",
    "JEANS",
    "SHORTS",
    "JACKET",
    "SUITS",
    "T-SHIRTS",
    "SWEATERS",
    "HOODIES",
    "COATS",
    "BLAZERS",
    "SNEAKERS",
    "BOOTS",
    "LOAFERS",
    "BELTS",
    "HATS",
    "SCARVES",
    "GLOVES",
    "TIES",
    "SUNGLASSES"
  ];

  const navigate = useNavigate();

  const handleNavigation = (item) => {
    navigate('/products', { state: { category: item,data:"mens" } });
  };

  return (
    <div className={`${value} z-20 absolute bg-white w-40 p-3 border border-gray-400 shadow shadow-lg shadow-black rounded-md`}>
      <ul className='cursor-pointer inline-block text-gray-700 text-sm font-light'>
        {
          menData.map((item, index) => (
            <li key={index} className='hover:text-red-600 hover:font-bold' onClick={() => handleNavigation(item)}>{item}</li>
          ))
        }
      </ul>
    </div>
  );
};

export default Box;
