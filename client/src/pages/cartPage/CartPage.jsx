import React, { useState } from 'react'
import WishListCard from '../../components/cards/WishListCard'
import PaymentGateway from '../../components/paymentBox/PaymentGateway'


const CartPage = () => {
  const [gateway,setGateway]=useState(false)
  return (
    <div className='flex flex-col justify-center items-center'>
      <div className="intersted_head mb-5 font-bold text-lg text-slate-800 border-b-2 border-slate-900 mt-20">
                Cart
        </div>
      <div className='flex flex-col'>
      <div> <WishListCard/></div>
      
     
      </div>
    </div>
  )
}

export default CartPage