import React, { useEffect, useState } from "react";
import binImage from "../../assets/images/bin.png";

import { useLocation } from "react-router-dom";
import axios from "axios";
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 
import Counter from "./Counter";
const WishListCard = () => {
  const [path, setPath] = useState(false);
  const [data, setData] = useState([]);
  const [btn,setBtn]=useState(false);


  

  const location = useLocation();

  useEffect(() => {
    const getData = async () => {
      try {
        if (location.pathname === "/cart") {
          const res = await axios.get("http://localhost:3000/cart");
          setData(res.data);
          setPath(true);
          setBtn(false);
        } else {
          const res = await axios.get("http://localhost:3000/wishlist");
          setData(res.data);
          setPath(false);
          setBtn(true);
        }
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };

    getData();
  }, []);

  const handleDelete = async (id) => {
    try {
      if (location.pathname === "/cart") {
        await axios.delete(`http://localhost:3000/cart/${id}`);
      } else {
        await axios.delete(`http://localhost:3000/wishlist/${id}`);
      }
      setData(prevData => prevData.filter(item => item.id !== id));
      toast.success('Item Deleted Successfully', { autoClose: 1000 });
    } catch (error) {
      console.error("Error deleting item:", error);
      toast.error('Failed to delete item', { autoClose: 1000 });
    }
  };


  return (
    <div className="wishlist-card flex flex-col justify-center items-center">
        
      {data.map((item, index) => (
        <div
          key={index}
          className="card flex p-3  my-5 border border border-slate-400 rounded-sm w-11/12 hover:shadow hover:shadow-sm hover:shadow-gray-700"
        >
          <div className="left p-2">
            <div className="img w-10/12">
              <img src={item.image} className="max-w-[190px]" alt="" />
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
            
            <div className="down2 flex justify-between items-center mb-3">
              {path && (
                <Counter priceValue={item.price}/>
              )}
            </div>
            <div className="down3 flex">
              {
                btn && <div className="cartbtn border border-red-600 px-[110px] py-1 bg-red-600 text-white rounded-sm hover:bg-white hover:text-red-600 mr-3 cursor-pointer shadow shadow-sm shadow-gray-700">
                <button>ADD TO CART</button>
              </div>
              }
              <div className="bin">
                <button onClick={()=>handleDelete(item.id)}>
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
