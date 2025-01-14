import React from 'react'

const Box2 = ({value}) => {
 const womenData = [
    "DRESSES", 
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
  
  
  return (
    <div className={`${value} z-20 absolute bg-white w-40 p-3 border border-gray-400 rounded-md shadow shadow-lg shadow-black  `}>
        <ul className='cursor-pointer inline-block text-gray-700 text-sm font-light'>
            {
              womenData.map((item, index)=>(
                <li key={index} className='hover:text-red-600 hover:font-bold'>{item}</li>
              ))
            }
        </ul>
    </div>
  )
}

export default Box2