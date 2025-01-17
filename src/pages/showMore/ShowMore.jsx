import React, { useEffect, useState } from 'react'
import heartImage from '../../assets/images/heart.png'
import menImage from '../../assets/images/mens.png'
import Reviews from '../../components/reviews/Reviews'
import left from '../../assets/images/arrow-circle-left.png'
import right from '../../assets/images/arrow-circle-right.png'
import { reviewData } from '../../data'
import { reviewData1 } from '../../data'
import VerticalCards from '../../components/vertical_cards/VerticalCards'
import axios from 'axios'
import Spinner from '../../components/spinner/Spinner'

const ShowMore = () => {
    const [currentIndex,setCurrentIndex]=useState(0);
    const [data,setData]=useState([])
    const [loading,setLoading]=useState(false);
    const [limit, setLimit]=useState(4)
    const len=reviewData1.length;
    const len1=reviewData1.length;

    const handleNextClick=()=>{
        if(currentIndex>= len-1 && currentIndex>= len1-1){
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



    
    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products`)
        .then((res) => setData(res.data)) // Log the data directly
        .catch((err) => console.log(err));  // Catch any error
    }, []);
    
    const handleLimit=()=>{
        if(data.length-limit>4 && scrollY> window.length){
            setLoading(true);
            setLimit(limit+4);
        }
    }

    

  return (
     <div className=''>
      <div className='top flex justify-between'>
      <div className="showMore grid grid-cols-2 bg-white gap-20 p-10 border border-slate-400 rounded-sm m-2 shadow shadow-sm shadow-gray-700">
        <div className="left ">
            <img src={menImage} alt="" className='rounded-sm'/>
        </div>
        <div className="right flex flex-col">
            <div className="name text-slate-800 text-lg my-3">
                <p>Product Name</p>
            </div>
            <div className="description font-extrabold mb-3">
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
     <div className="right p-3">
        <div className="reviews flex flex-col justify-between items-center">
            <Reviews index={currentIndex}/>
            <div className='flex justify-between mt-2'>
            <div className="prevBtn">
                <img src={left} alt="" className='cursor-pointer hover:scale-110 w-[30px] mr-20' onClick={handlePrevClick}/>
            </div>
            <div className="nextBtn">
            <img src={right} alt="" className='cursor-pointer hover:scale-110 w-[30px]' onClick={handleNextClick}/>
            </div>
            </div>
        </div>
     </div>
      </div>
     <div className="down p-3 flex flex-col items-center justify-center">
        <div className="intersted_head mb-5 font-bold text-lg text-slate-800 border-b-2 border-slate-900 ">
            Similar Products
        </div>
        <div className="similarproducts">
            <VerticalCards data={data}/>
        </div>
     </div>
     </div>
  )
}

export default ShowMore