import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { store } from '../../redux/store';
import useRazorpay from "react-razorpay";
import PaymentGateway from './PaymentGateway';
import { useNavigate } from 'react-router-dom';

const PaymentBox = () => {
    const item=useSelector((store)=>store.cart.items);
    console.log("Payment",item)
    
    // let totalPrice1=0;
    // for(let i=0;i<item.length;i++){
    //   totalPrice1+=item[i].price
    // }
    
    const [price,setPrice]=useState(0);
    const countValue = useSelector((store) => store.data.value);
    const navigate=useNavigate()
    const fetchData = async () => {
        try {
            const response = await axios.get("http://localhost:3000/cart");
            const totalPrice = response.data.reduce((total, item) => total + item.price * item.quantity, 0);
            setPrice(totalPrice);
            
            
        } catch (error) {
            console.error("Error fetching cart data:", error);
        }
    };
    useEffect(() => {
        
        fetchData();
     
    }, [setPrice]);

  return (
    <>
    <div className='border border-slate-400 rounded-sm flex justify-around mb-5 p-3 font-bold items-center relative'>
        <div className='mx-10'>
            <p>Total Amount: <span className='text-green-800'>{price}</span></p>
        </div>
        <div>
            <button className='bg-red-600 text-white p-2 rounded-md hover:scale-110' onClick={()=>navigate('/shipping')}>Continue</button>
        </div>
    </div>
    </>
  )
}

export default PaymentBox