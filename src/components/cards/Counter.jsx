import React, { useEffect, useState } from 'react';
import minusImage from "../../assets/images/minus.png";
import addImage from "../../assets/images/add.png";
import { useDispatch, useSelector } from 'react-redux';
import { getUpdatedPrice, updatecartQuantity } from '../../hooks/apiCall';
import { getUserCartId } from '../../redux/shareDate';

const Counter = ({ priceValue, id, quantity }) => {
  const [counter, setCounter] = useState(quantity);
  const dispatch = useDispatch();

  const ItemId = useSelector((store) => store.user.cartId);
  const userData=useSelector((store)=>store.user.currentUser)

  const HandleIncrease = async () => {
    const newCounter = counter + 1;
    setCounter(newCounter); 
    try {
      await updatecartQuantity(userData.email, id, newCounter);
      await getUpdatedPrice(userData.email,dispatch)
    } catch (error) {
      console.log("Error updating cart quantity:", error);

    }
  };

  const HandleDecrease = async () => {
    const newCounter = counter > 1 ? counter - 1 : 1;
    setCounter(newCounter);

    try {
      await updatecartQuantity(userData.email, id, newCounter);
      await getUpdatedPrice(userData.email,dispatch)
    } catch (error) {
      console.log("Error updating cart quantity:", error);
     
    }
  };
 
  useEffect(() => {
    dispatch(getUserCartId(id));
  }, [dispatch, id]); 

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
