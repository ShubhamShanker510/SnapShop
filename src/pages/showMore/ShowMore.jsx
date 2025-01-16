import React, { useEffect, useState } from 'react'
import heartImage from '../../assets/images/heart.png'
import menImage from '../../assets/images/mens.png'
import Reviews from '../../components/reviews/Reviews'
import left from '../../assets/images/arrow-circle-left.png'
import right from '../../assets/images/arrow-circle-right.png'
import { reviewData } from '../../data'

const ShowMore = () => {
    const [currentIndex,setCurrentIndex]=useState(0);
    const len=reviewData.length;

    const handleNextClick=()=>{
        if(currentIndex>= len-1){
            setCurrentIndex(0);
        }else{
            setCurrentIndex(currentIndex+1)
        }
    }

    const handlePrevClick=()=>{
        if(currentIndex===0){
            setCurrentIndex(len-1);
        }else{
            setCurrentIndex(currentIndex-1);
        }
    }
  return (
     <div>
      <div className='top flex'>
      <div className="showMore grid grid-cols-2 gap-20 p-10 border border-slate-400 rounded-sm m-2 shadow shadow-sm shadow-gray-700">
        <div className="left max-w-[800px] min-w-[500px] ">
            <img src={menImage} alt="" className='rounded-sm'/>
        </div>
        <div className="right flex flex-col">
            <div className="name text-slate-800 text-lg my-3">
                <p>Product Name</p>
            </div>
            <div className="description font-extrabold w-5/12 mb-3">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi at dolores suscipit natus quasi inventore blanditiis quidem totam accusamus odit!</p>
            </div>
            <div className="rating font-light text-sm border border-gray-500 p-1 w-[130px] inline-block mb-3 rounded-sm shadow shadow-sm shadow-gray-700">
                <p>Ratings | <span className='text-green-800 font-semibold'>4.5</span> /5 ⭐</p>
            </div>
            <div className="price text-lg font-bold text-orange-500 mb-3">
                <p>Rs. 1200</p>
            </div>
            <div className="btn flex items-center">
                <div className="cartbtn border border-red-600 px-[100px] py-1 bg-red-600 text-white rounded-sm hover:bg-white hover:text-red-600 mr-3 cursor-pointer shadow shadow-sm shadow-gray-700">
                    <button>ADD TO CART</button>
                </div>
                <div className="wishlist cursor-pointer hover:invert-0">
                    <button><img src={heartImage} alt="" width={30}/></button>
                </div>
            </div>
        </div>
     </div>
      </div>
     <div className="down p-3">
        <div className="reviews flex justify-between items-center w-6/12">
            <div className="prevBtn">
                <img src={left} alt="" className='w-[30px] cursor-pointer hover:scale-110' onClick={handlePrevClick}/>
            </div>
            <Reviews index={currentIndex}/>
            <div className="nextBtn">
            <img src={right} alt="" className='w-[30px] cursor-pointer hover:scale-110' onClick={handleNextClick}/>
            </div>
        </div>
     </div>
     </div>
  )
}

export default ShowMore