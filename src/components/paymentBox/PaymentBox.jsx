import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { store } from '../../redux/store';
import useRazorpay from "react-razorpay";
import PaymentGateway from './PaymentGateway';
import { useNavigate } from 'react-router-dom';

const PaymentBox = () => {
    const navigate=useNavigate()
    const totalCurrentPrice=useSelector((store)=>store.user.price)
    
  return (
    <>
    <div className='border border-slate-400 rounded-sm flex justify-around mb-5 p-3 font-bold items-center relative'>
        <div className='mx-10'>
            <p>Total Amount: <span className='text-green-800'>{totalCurrentPrice}</span></p>
        </div>
        <div>
            <button className='bg-red-600 text-white p-2 rounded-md hover:scale-110' onClick={()=>navigate('/shipping')}>Continue</button>
        </div>
    </div>
    </>
  )
}

export default PaymentBox