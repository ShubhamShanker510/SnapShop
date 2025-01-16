import React from 'react'
import { reviewData } from '../../data'
import profileImage from '../../assets/images/profile-user.png'

const Reviews = ({index}) => {
  let reviewIndex=reviewData[index]
  return (
    <div className='flex px-4'>
        <div className="rev_box flex flex-col border border-slate-400 p-5 shadow shadow-sm shadow-gray-800 rounded-sm w-[700px] bg-slate-200">
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
    </div>
  )
}

export default Reviews