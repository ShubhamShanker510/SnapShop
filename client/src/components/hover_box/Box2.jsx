import React from 'react'
import { useNavigate } from 'react-router-dom';

const Box2 = ({value}) => {
 const womenData = [
    "DRESSES", 
    "SHORT",
    "TOPS", 
    "SKIRTS", 
    "PANTS", 
    "JEANS", 
    "SHIRTS", 
    "JACKETS", 
    "BLAZERS", 
    "SWEATERS", 
    "HOODIES", 
    "COATS", 
    "CARDIGANS", 
    "T-SHIRTS", 
    "BLOUSES", 
    "JUMPSUITS", 
    "ROMPERS", 
    "SNEAKERS", 
    "BOOTS", 
    "FLATS", 
    "HEELS", 
    "SANDALS", 
    "BAGS", 
    "HATS", 
    "SCARVES", 
    "GLOVES", 
    "TIES", 
    "BELTS", 
    "JEWELRY", 
    "SUNGASSES", 
    "SWIMWEAR"
  ];
  const navigate=useNavigate()
  const handleNavigation = (item) => {
    navigate('/products', { state: { category: item,data:"womens" } });
  };
  
  return (
    <div className={`${value} z-20 absolute bg-white w-40 p-3 border border-gray-400 rounded-md shadow shadow-lg shadow-black  `}>
        <ul className='cursor-pointer inline-block text-gray-700 text-sm font-light'>
            {
              womenData.map((item, index)=>(
                <li key={index} className='hover:text-red-600 hover:font-bold' onClick={() => handleNavigation(item)}>{item}</li>
              ))
            }
        </ul>
    </div>
  )
}

export default Box2