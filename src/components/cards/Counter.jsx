import React, { useEffect, useState } from 'react';
import minusImage from "../../assets/images/minus.png";
import addImage from "../../assets/images/add.png";
import { useDispatch, useSelector } from 'react-redux';
import { updatecartQuantity } from '../../hooks/apiCall';
import { getUserCartId } from '../../redux/shareDate';

const Counter = ({ priceValue, id, quantity }) => {
  const [counter, setCounter] = useState(quantity);
  const dispatch = useDispatch();

  const ItemId = useSelector((store) => store.user.cartId);
  const userData=useSelector((store)=>store.user.currentUser)

  const HandleIncrease = () => {
    // Update the counter based on the previous value
    setCounter((prevCounter) => {
      const newCounter = prevCounter + 1;
      updatecartQuantity(userData.email,id, newCounter); 
      return newCounter;
    });
  };

  const HandleDecrease = () => {
    setCounter((prevCounter) => {
      const newCounter = prevCounter > 1 ? prevCounter - 1 : 1;
      updatecartQuantity(userData.email, ItemId, newCounter);
      console.log("decrease")
      return newCounter;
    });
  };

  // Avoid dispatching unnecessarily. You can dispatch `getUserCartId` once.
  useEffect(() => {
    dispatch(getUserCartId(id));
  }, [dispatch, id]);  // Only run once on mount or when `id` changes

  return (
    <div>
      <div>
        <div className='font-semibold text-orange-600'>Rs. {priceValue * counter}</div>
      </div>
      <div className="quantity flex justify-between items-center">
        <button className="" onClick={HandleDecrease}>
          <img
            src={minusImage}
            alt=""
            className="hover:scale-110 w-[30px]"
          />
        </button>
        <p className="px-5">{counter}</p>
        <button className="" onClick={HandleIncrease}>
          <img
            src={addImage}
            alt=""
            className="w-[35px] hover:scale-110"
          />
        </button>
      </div>
    </div>
  );
};

export default Counter;
