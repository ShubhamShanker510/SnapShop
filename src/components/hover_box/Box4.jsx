import React from 'react'

const Box4 = ({value}) => {
    const jewelryData = [
        "NECKLACES", 
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
      
  return (
    <div className={`${value} z-20 absolute bg-white w-40 p-3 border border-gray-600 rounded-md `}>
        <ul className='cursor-pointer inline-block text-gray-700 text-sm font-light'>
            {
              jewelryData.map((item, index)=>(
                <li key={index} className='hover:text-red-600 hover:font-bold'>{item}</li>
              ))
            }
        </ul>
    </div>
  )
}

export default Box4