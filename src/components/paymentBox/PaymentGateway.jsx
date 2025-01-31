import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 
import { deleteAllCartDelete } from '../../hooks/apiCall';

const PaymentGateway = ({css}) => {
    const [cardNumber,setCardNumber]=useState('');
    const [name,setName]=useState('')
    const [cvv,setCvv]=useState('')
    const navigate=useNavigate()
    const totalCurrentPrice=useSelector((store)=>store.user.price);
    const userData = useSelector((store) => store.user.currentUser);

    const HandleSubmit=(e)=>{
        e.preventDefault();

        const creditCardRegex = /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9]{2})[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/;
        
        const cvvRegex = /^\d{3,4}$/;
        let valid=true

        if(!creditCardRegex.test(cardNumber)){
            console.log("creditCardRegex error")
            toast.error("Invalid Details")
            valid=false;
        }

        if(!cvvRegex.test(cvv)){
            toast.error("Invalid Details")
            console.log("cvv error")
            valid=false;
        }

        if(valid){
            toast.success("Payment Successfull")
            setTimeout(async()=>{
                navigate('/')
                await deleteAllCartDelete(userData.email);
            },2000)
        }
    }
  return (
   <div className={`${css}`}>
    <form action="" onSubmit={HandleSubmit} className='flex justify-evenly'>
    <div className='flex flex-col items-center p-10 border'>
        <div className="header py-9 bg-red-700 text-white flex justify-center font-semibold p-2 text-[50px] rounded-t-2xl w-[500px]">
            <p>Payment Gateway</p>
        </div>
            <div className="sec-1 pt-5 flex justify-between font-bold">
                <p>Payment Details</p>
                
            </div>
            <div className="sec2 mb-8">
                <div className="amount pt-3">
                    <p>Amount: Rs. <span className='text-green-600 font-bold'>{totalCurrentPrice}</span></p>
                </div>
                <div className='card flex flex-col pt-3'>
                    <label htmlFor="" className='mr-3 text-sm text-slate-600'>Card Number</label>
                    <input type="text" placeholder='1234567890541234' maxLength={19} className='border border-black rounded-sm p-1' value={cardNumber} onChange={(e)=>setCardNumber(e.target.value)} required/>
                </div>
                <div className="user flex flex-col pt-3 text-sm text-slate-600">
                <label htmlFor="" className='mr-3'>Full Name</label>
                <input type="text" placeholder='Jackie Chan' maxLength={19} className='border border-black rounded-sm p-1' value={name} onChange={(e)=>setName(e.target.value)} required/>
                </div>
                <div className="cvv pt-3 flex flex-col text-sm text-slate-600">
                    <label htmlFor="" className='mr-3'>cvv</label>
                    <input type="text" maxLength={3} className='border border-black rounded-sm p-1' placeholder='123' value={cvv} onChange={(e)=>setCvv(e.target.value)} required/>
                </div>
            </div>
            
            <div className="sec3  mb-3">
                <button className='bg-red-600 text-white font-semibold w-[220px] flex items-center justify-center py-3 hover:bg-red-700'>Pay Now</button>
            </div>
            <div className="sec4 text-sm text-slate-500">
                <p>Your payment information is encrypted and secure</p>
            </div>

    </div>
    </form>
    <ToastContainer/>
   </div>
  )
}

export default PaymentGateway