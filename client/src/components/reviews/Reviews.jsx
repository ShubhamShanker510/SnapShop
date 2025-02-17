import React from 'react'
import { reviewData } from '../../data'
import { reviewData1 } from '../../data'
import profileImage from '../../assets/images/profile-user.png'

const Reviews = ({index}) => {
  let reviewIndex=reviewData[index]
  let reviewIndex1=reviewData1[index]

  return (
    <div className='border-slate-400 border p-5 shadow shadow-sm shadow-gray-800 rounded-sm w-[700px] bg-slate-100 h-[324px] mt-[25px]'>
        <div className="rev_box flex flex-col mb-5">
          <div className="username flex items-center">
            <img src={profileImage} alt="" className='w-[20px] mr-2' />
            <p className='font-bold mr-3'>{reviewIndex.username}</p>
            <p className='text-orange-800 font-semibold'>{reviewIndex.rating} ⭐</p>
          </div>
          <div className="description">
            {reviewIndex.description}
          </div>
          <div className="date text-slate-700 text-sm">{reviewIndex.date}</div>
        </div>
        <div className="rev_box flex flex-col ">
          <div className="username flex items-center">
            <img src={profileImage} alt="" className='w-[20px] mr-2' />
            <p className='font-bold mr-3'>{reviewIndex1.username}</p>
            <p className='text-orange-800 font-semibold'>{reviewIndex1.rating} ⭐</p>
          </div>
          <div className="description">
            {reviewIndex1.description}
          </div>
          <div className="date text-slate-700 text-sm">{reviewIndex1.date}</div>
        </div>
        <div className="rev_box flex flex-col mt-5">
          <div className="username flex items-center">
            <img src={profileImage} alt="" className='w-[20px] mr-2' />
            <p className='font-bold mr-3'>{reviewIndex1.username}</p>
            <p className='text-orange-800 font-semibold'>{reviewIndex1.rating} ⭐</p>
          </div>
          <div className="description">
            {reviewIndex1.description}
          </div>
          <div className="date text-slate-700 text-sm">{reviewIndex1.date}</div>
        </div>
    </div>
  )
}

export default Reviews