import React from 'react'
import { useNavigate } from 'react-router-dom';

const Box4 = ({value}) => {
    const jewelryData = [
        "NECKLACES",
        "CHAIN", 
        "EARRINGS", 
        "BRACELETS", 
        "RINGS", 
        "PENDANTS", 
        "BANGLES", 
        "ANKLETS", 
        "BROOCHES", 
        "CUFFLINKS", 
        "WATCHES", 
        "PEARLS", 
        "CHAIN", 
        "DIAMONDS", 
        "GEMS", 
        "GOLD", 
        "SILVER", 
        "PLATINUM", 
        "TUNGSTEN", 
        "ENGAGEMENT RINGS", 
        "WEDDING BANDS", 
        "CHARM BRACELETS", 
        "BODY JEWELRY", 
        "HAIR JEWELRY", 
        "FOOT JEWELRY"
      ];

      const navigate=useNavigate();
      const handleNavigation = (item) => {
        navigate('/products', { state: { category: item, data:"jewelery" } });
      };
      
  return (
    <div className={`${value} z-20 absolute bg-white block p-3 border border-gray-400 rounded-md shadow shadow-lg shadow-black `}>
        <ul className='cursor-pointer inline-block text-gray-700 text-sm font-light'>
            {
              jewelryData.map((item, index)=>(
                <li key={index} className='hover:text-red-600 hover:font-bold' onClick={() => handleNavigation(item)}>{item}</li>
              ))
            }
        </ul>
    </div>
  )
}

export default Box4