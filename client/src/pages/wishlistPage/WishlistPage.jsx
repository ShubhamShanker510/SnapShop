import React from 'react'
import WishListCard from '../../components/cards/WishListCard.jsx'

const WishlistPage = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
      <div className="intersted_head mb-5 font-bold text-lg text-slate-800 border-b-2 border-slate-900 mt-20">
                Wishlist
        </div>
       <div> <WishListCard/></div>
    </div>
  )
}

export default WishlistPage