import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getTotalPrice } from '../../hooks/apiCall';

const PaymentBox = ({data}) => {
  const navigate = useNavigate();
  const [totalPrice, setTotalPrice] = useState(0)
  const currentCounter=useSelector((store)=>store.user.quantity)

  const getPrice = async () => {
    const fetchedTotalPrice = await getTotalPrice();
    setTotalPrice(fetchedTotalPrice); 
    
  };

  useEffect(() => {
    getPrice(); 
  }, [currentCounter,data]);

  return (
    <>
      <div className='border border-slate-400 rounded-sm flex justify-around mb-5 p-3 font-bold items-center relative'>
        <div className='mx-10'>
          <p>Total Amount: <span className='text-green-800'>{totalPrice}</span></p>
        </div>
        <div>
          <button 
            className='bg-red-600 text-white p-2 rounded-md hover:scale-110' 
            onClick={() => navigate('/shipping')}
          >
            Continue
          </button>
        </div>
      </div>
    </>
  );
};

export default PaymentBox;
