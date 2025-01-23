import React, { useState } from 'react';
import minusImage from "../../assets/images/minus.png";
import addImage from "../../assets/images/add.png";
import { useDispatch, useSelector } from 'react-redux';
import { counterVal } from '../../redux/shareDate';

const Counter = ({priceValue}) => {
    const [counter, setCounter] = useState(1);
    const dispatch = useDispatch();

    const HandleIncrease = () => {
        const newCounter = counter + 1;
        setCounter(newCounter);
        dispatch(counterVal(newCounter)); 
    };
    
    const HandleDecrease = () => {
        const newCounter = counter > 1 ? counter - 1 : 1;
        setCounter(newCounter);
        dispatch(counterVal(newCounter));  // Dispatch with the updated counter value
    };

    const countValue = useSelector((store) => store.data.value);
    console.log(countValue);

    return (
        <div>
            <div>
            <div className='font-semibold text-orange-600'>Rs. {priceValue*counter}</div>
            </div>
            <div className="quantity flex justify-between items-center">
                <button className="">
                    <img
                        src={minusImage}
                        alt=""
                        className="hover:scale-110 w-[30px]"
                        onClick={HandleDecrease}
                    />
                </button>
                <p className="px-5">{counter}</p>
                <button className="">
                    <img
                        src={addImage}
                        alt=""
                        className="w-[35px] hover:scale-110"
                        onClick={HandleIncrease}
                    />
                </button>
            </div>
        </div>
    );
};

export default Counter;
