import React, { useEffect, useState } from "react";
import menImage from "../../assets/images/mens.png";
import binImage from "../../assets/images/bin.png";
import minusImage from "../../assets/images/minus.png";
import addImage from "../../assets/images/add.png";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 

const WishListCard = () => {
  const [counter, setCounter] = useState(1);
  const [price, setPrice] = useState(null);
  const [path, setPath] = useState(false);
  const [data, setData] = useState([]);
  const orignalPrice = 200;

  const HandleIncrease = () => {
    setCounter(counter + 1);
    setPrice(price + orignalPrice);
  };

  const HandleDecrease = () => {
    if (counter > 1) {
      setCounter(counter - 1);
      setPrice(price - orignalPrice);
    } else {
      setCounter(1);
      setPrice(orignalPrice);
    }
  };

  const location = useLocation();

  useEffect(() => {
    axios
      .get("http://localhost:3000/wishlist")
      .then((res) => setData(res.data));

    if (location.pathname === "/cart") {
      setPath(true);
    } else {
      setPath(false);
    }
  }, [data]);

  const HandleDelete=(id)=>{
    axios.delete(`http://localhost:3000/wishlist/${id}`)
    toast.success('Item Deleted Successfully', { autoClose: 1000 });

  }

  return (
    <div className="wishlist-card flex flex-col justify-center items-center">
        <div className="intersted_head mb-5 font-bold text-lg text-slate-800 border-b-2 border-slate-900 mt-20">
                Wishlist
        </div>
      {data.map((item, index) => (
        <div
          key={index}
          className="card flex p-3  my-5 border border border-slate-400 rounded-sm w-11/12 hover:shadow hover:shadow-sm hover:shadow-gray-700"
        >
          <div className="left p-2">
            <div className="img w-10/12">
              <img src={item.image} className="w-[200px]" alt="" />
            </div>
          </div>
          <div className="right">
            <div className="title text-slate-600">
              <p>{item.title}</p>
            </div>
            <div className="description font-semibold">
              <p>{item.description}</p>
            </div>
            <div className="rating border border-black w-1/12 px-2 shadow shadow-black my-3">
              <p>
                {item.rate}
                <span>/5 ⭐ </span>
              </p>
            </div>
            <div className="price text-orange-600 font-semibold">
              Rs. {price || item.price}
            </div>
            <div className="down2 flex justify-between items-center mb-3">
              {path && (
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
              )}
            </div>
            <div className="down3 flex">
              <div className="cartbtn border border-red-600 px-[110px] py-1 bg-red-600 text-white rounded-sm hover:bg-white hover:text-red-600 mr-3 cursor-pointer shadow shadow-sm shadow-gray-700">
                <button>ADD TO CART</button>
              </div>
              <div className="bin">
                <button onClick={()=>HandleDelete(item.id)}>
                  <img
                    src={binImage}
                    className="w-[30px] hover:scale-110 bg-white"
                    alt=""
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
      <ToastContainer />
    </div>
  );
};

export default WishListCard;
