import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 

const ShippingInfo = () => {
     const [state,setState]=useState('');
        const [city,setCity]=useState('')
        const [postalCode,setPostalCode]=useState('')
        const [address,setAddress]=useState('')
        const navigate=useNavigate()
    
        const HandleSubmit=(e)=>{
            e.preventDefault();
    
          
    
            
                toast.success("Shipping Details Saved Successfully")
                setTimeout(()=>{
                    navigate('/payment')
                },2000)
        }
    
  return (
    <div className='bg-white '>
    <form action="" onSubmit={HandleSubmit} className='flex justify-center '>
    <div className='flex flex-col items-center p-10 border'>
        <div className="header py-9 bg-red-700 text-white font-semibold p-2 text-[50px] rounded-t-2xl">
            <p>Shipping Info</p>
        </div>
            <div className="sec-1 pt-5 flex justify-between font-bold">
                <p>Shipping Details</p>
                
            </div>
            <div className="sec2 mb-8">
                <div className='card flex flex-col pt-3'>
                    <label htmlFor="" className='mr-3 text-sm text-slate-600'>State</label>
                    <input type="text" placeholder='Enter State' maxLength={19} className='border border-black rounded-sm p-1' value={state} onChange={(e)=>setState(e.target.value)} required/>
                </div>
                <div className="user flex flex-col pt-3 text-sm text-slate-600">
                <label htmlFor="" className='mr-3'>City</label>
                <input type="text" placeholder='Enter City' maxLength={19} className='border border-black rounded-sm p-1' value={city} onChange={(e)=>setCity(e.target.value)} required/>
                </div>
                <div className="cvv pt-3 flex flex-col text-sm text-slate-600">
                    <label htmlFor="" className='mr-3'>Postal Code</label>
                    <input type="text" maxLength={3} className='border border-black rounded-sm p-1' placeholder='Enter Postal Code' value={postalCode} onChange={(e)=>setPostalCode(e.target.value)} required/>
                </div>
                <div className="cvv pt-3 flex flex-col text-sm text-slate-600">
                    <label htmlFor="" className='mr-3'>Address</label>
                    <input type="text" maxLength={3} className='border border-black rounded-sm p-1' placeholder='Enter Address' value={address} onChange={(e)=>setAddress(e.target.value)} required/>
                </div>
            </div>
            
            <div className="sec3  mb-3">
                <button className='bg-red-600 text-white font-semibold w-[220px] flex items-center justify-center py-3 hover:bg-red-700'>Continue</button>
            </div>

    </div>
    </form>
    <ToastContainer/>
   </div>
  )
}

export default ShippingInfo