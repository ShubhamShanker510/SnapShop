import React, { useEffect } from 'react'
import menImage from '../../assets/images/mens.png'
import axios from 'axios'

const VerticalCards = ({data}) => {
  return (
    <div className="vertical_cards p-2 grid grid-cols-4 gap-20">
        {
        data.map((item,index)=>(
            <div className="div border w-[245px] h-[440px] bg-white flex flex-col p-3 rounded-2xl hover:shadow hover:shadow-2xl hover:shadow-gray-600">
            <div className="img flex justify-center items-center">
                <img src={item.image} alt="" className='h-[200px]'/>
            </div>
            <div className="content">
                <div className="product_name mb-4">
                    <p className='text-slate-800 font-semibold'>{item.category}</p>
                    <p className='font-semibold'>{item.title.slice(0, 20)} Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <p className='border border-black w-4/12 p-1 text-sm shadow'>{item.rating.rate}/5 ⭐</p>
                    <p className='font-bold text-orange-600 text-sm mt-6'>Rs.{item.price*200}</p>
                </div>
                <div className="btn flex items-center justify-around">
                    <div className="show_morebtn mr-2">
                        <button className=' bg-gray-700 p-1 text-white rounded-sm hover:bg-gray-800 hover:shadow hover:shadow-sm hover:shadow-gray-600'>Show More</button>
                    </div>
                    <div className="cartBtn">
                        <button className=' bg-red-700 p-1 text-white rounded-sm hover:bg-red-800 hover:shadow hover:shadow-sm hover:shadow-gray-600'>Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
        ))
    }
        
        
    </div>
    
  )
}

export default VerticalCards