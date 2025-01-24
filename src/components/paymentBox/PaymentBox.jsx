import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { store } from '../../redux/store';

const PaymentBox = () => {
    const [price,setPrice]=useState(0);
    const countValue = useSelector((store) => store.data.value);
    
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
    }, [countValue]);
  return (
    <div className='border border-slate-400 rounded-sm flex justify-around mb-5 p-3 font-bold items-center'>
        <div className='mx-10'>
            <p>Total Amount: <span className='text-green-800'>{price}</span></p>
        </div>
        <div>
            <button className='bg-red-600 text-white p-2 rounded-md hover:scale-110'>Pay Now</button>
        </div>
    </div>
  )
}

export default PaymentBox