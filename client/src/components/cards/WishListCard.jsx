import React, { useEffect, useState } from "react";
import binImage from "../../assets/images/bin.png";
import { deletecartdata, deleteProductById, deletewishlistdata, getCartdata, getCartData, getWishlistData } from "../../hooks/apiCall";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Counter from "./Counter";
import NotFound from "../../pages/not found/NotFound";
import PaymentBox from "../paymentBox/PaymentBox";
import { useDispatch, useSelector } from "react-redux";
import { removeItemToCart } from "../../redux/cartSlice";

const WishListCard = () => {
  const [data, setData] = useState([]);
  const userData = useSelector((store) => store.user.currentUser);
  const dispatch = useDispatch();
  const location = useLocation();
  
  const getData = async () => {
    try {
      if (location.pathname === "/cart") {
        const res = await getCartdata();
        console.log("res=>", res);
        
        setData(res.cart);
        
        
      } else {
        const res = await getWishlistData(userData.email);
        setData(res);
      }
    } catch (error) {
      console.error("Error fetching data", error);
    }
    
  };

  useEffect(() => {
    getData();
  }, []);

  const handleDelete = async (id) => {
    console.log("type of id=>", typeof(id))
    try {
      if (location.pathname === "/cart") {
        await deleteProductById(id);
        setData(prevData => prevData.filter(item => item.id !== id));
        toast.success("Item Deleted Successfully", { autoClose: 1000 , position: "top-center"});
        // await getUpdatedPrice(userData.email,dispatch)
        
      } else {
        await deletewishlistdata(userData.email,id)
        setData(prevData => prevData.filter(item => item.id !== id)); 
        toast.success("Item Deleted Successfully", { autoClose: 1000 });
      }
      
      dispatch(removeItemToCart(id));
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };

  const HandleCart=async (id, image, title, description, price, rate)=>{
          const cartData={
              productId: id,
              image,
              title,
              price,
              description,
              rate,
              quantity:1
          }
          if(userData===null){
              return toast.warn("Please login",{autoClose:3000})
          }
  
          // await updateData(userData.email,cartData)
          // .then(()=>toast.success("Added to cart"),{autoClose:3000})
          // .catch(()=>toast.error("Somethng went wrong"),{autoClose:3000})
      }
      console.log("data=>", data)

  if (data.length === 0) {
    return <NotFound text={"Items Not Found!!"} delay={100} />;
  }

  return (
    <div className="wishlist-card flex flex-col justify-center items-center">
      {data.map((item) => (
        <div
          key={item.id}
          className="card flex p-3 my-5 border border-slate-400 rounded-sm w-11/12 hover:shadow hover:shadow-sm hover:shadow-gray-700"
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
                {item.rate} <span>/5 ⭐ </span>
              </p>
            </div>

            <div className="down2 flex justify-between items-center mb-3">
              {location.pathname === "/cart" && (
                <Counter priceValue={item.price} id={item.id} quantity={item.quantity} />
              )}
            </div>

            <div className="down3 flex">
              {location.pathname !== "/cart" && (
                <div className="cartbtn border border-red-600 px-[110px] py-1 bg-red-600 text-white rounded-sm hover:bg-white hover:text-red-600 mr-3 cursor-pointer shadow shadow-sm shadow-gray-700">
                  <button onClick={()=>HandleCart(item.id, item.image, item.title, item.description, item.price, item.rate)} >ADD TO CART</button>
                </div>
              )}
              <div className="bin">
                <button onClick={() => handleDelete(item.id)}>
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
      {location.pathname === "/cart" && <PaymentBox data={data}/>}
      <ToastContainer />
    </div>
  );
};

export default WishListCard;
