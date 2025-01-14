import React from 'react'

const Box3 = ({value}) => {
    const electronicsData = [
        "SMARTPHONES", 
        "LAPTOPS", 
        "TABLETS", 
        "DESKTOP COMPUTERS", 
        "HEADPHONES", 
        "EARPHONES", 
        "SPEAKERS", 
        "CAMERAS", 
        "GAMING CONSOLES", 
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
      
  return (
    <div className={`${value} z-20 absolute bg-white w-40 p-3 border border-gray-600 rounded-md `}>
        <ul className='cursor-pointer inline-block text-gray-700 text-sm font-light'>
            {
              electronicsData.map((item, index)=>(
                <li key={index} className='hover:text-red-600 hover:font-bold'>{item}</li>
              ))
            }
        </ul>
    </div>
  )
}

export default Box3