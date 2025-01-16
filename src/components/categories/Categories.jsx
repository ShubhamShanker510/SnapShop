import React from 'react'
import menImage from '../../assets/images/men.png'
import womenImage from '../../assets/images/womens.png'
import  electronicsImage from '../../assets/images/electronics.png'
import jweleryImage from '../../assets/images/jwelery.png'

const Categories = () => {
  return (
    <div className="categories bg-[#f0ecd5] flex flex-col items-center p-5 border-b border-slate-400">
        <div className="up mb-5 font-bold text-lg text-slate-800 border-b-2 border-slate-900">
            <p>CATEGORIES</p>
        </div>
        <div className="down grid grid-cols-4 gap-10">
            <div className="left flex flex-col items-center cursor-pointer hover:scale-110 hover:font-semibold ">
                <img src={menImage} alt="" className='w-[150px] rounded-full hover:shadow hover:shadow-sm hover:shadow-gray-700'/>
                <p className='mt-1 text-slate-800 gap-1'>MEN</p>
            </div>
            <div className="middle flex flex-col items-center cursor-pointer hover:scale-110 hover:font-semibold">
                <img src={womenImage} alt="" className='w-[150px] rounded-full hover:shadow hover:shadow-sm hover:shadow-gray-700'/>
                <p className='mt-1 text-slate-800 gap-1'>WOMEN</p>
            </div>
            <div className="electronics flex flex-col items-center cursor-pointer hover:scale-110 hover:font-semibold">
                <img src={electronicsImage} alt="" className='w-[150px] rounded-full hover:shadow hover:shadow-sm hover:shadow-gray-700'/>
                <p className='mt-1  text-slate-800 gap-1'>ELECTRONICS</p>
            </div>
            <div className="jewelery flex flex-col items-center cursor-pointer hover:scale-110 hover:font-semibold">
            <img src={jweleryImage} alt="" className='w-[150px] rounded-full hover:shadow hover:shadow-sm hover:shadow-gray-700'/>
                <p className='mt-1 text-slate-800 gap-1'>JEWELERY</p>
            </div>
        </div>
    </div>
  )
}

export default Categories