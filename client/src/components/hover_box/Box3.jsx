import React from 'react'
import { useNavigate } from 'react-router-dom';

const Box3 = ({value}) => {
    const electronicsData = [
        "SMARTPHONES", 
        "LAPTOPS", 
        "TABLETS",
        "USB",
        "SSD", 
        "DESKTOP COMPUTERS", 
        "HEADPHONES", 
        "EARPHONES", 
        "SPEAKERS", 
        "CAMERAS", 
        "GAMING", 
        "WATCHES", 
        "WEARABLES", 
        "TELEVISIONS", 
        "PROJECTORS", 
        "ACCESORIES", 
        "POWER BANKS", 
        "CHARGERS", 
        "KEYBOARDS", 
        "MICE", 
        "PRINTERS", 
        "MONITORS", 
        "GAMING ACCESSORIES", 
        "ROUTERS", 
        "VIRTUAL REALITY HEADSETS", 
        "DRONES", 
        "CAMERA LENSES"
      ];
      const navigate=useNavigate()
      const handleNavigation = (item) => {
        navigate('/products', { state: { category: item,data:"electronics" } });
      };
  return (
    <div className={`${value} z-20 absolute bg-white w-60 p-3 border border-gray-400 rounded-md shadow shadow-lg shadow-black `}>
        <ul className='cursor-pointer inline-block text-gray-700 text-sm font-light'>
            {
              electronicsData.map((item, index)=>(
                <li key={index} className='hover:text-red-600 hover:font-bold' onClick={() => handleNavigation(item)}>{item}</li>
              ))
            }
        </ul>
    </div>
  )
}

export default Box3