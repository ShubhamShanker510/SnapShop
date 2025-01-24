import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Shimmer from '../shimmer/Shimmer';
import { useNavigate } from 'react-router-dom';
import { apiCall } from '../../hooks/apiCall';
import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify';


const Card = () => {
    const [display, setDisplay] = useState(-1);
    const [data, setData]=useState();
    const navigate=useNavigate()

    useEffect(() => {
        axios.get("https://fakestoreapi.com/products?limit=6") 
        .then((res) => setData(res.data)) 
        .catch((err) => console.error(err));

    }, [])
    const HandleCart=(id, image, title, description, price, rate)=>{
            const cartData={
                productId: id,
                image,
                title,
                price,
                description,
                rate,
                quantity:1
            }
            apiCall(cartData)
            .then(()=>toast.success('Added to Cart Successfully', { autoClose: 5000 }))
            .catch(()=>toast.error('Something went Wrong', { autoClose: 5000 }))
            
        }

    if(data==null){
        return <Shimmer/>
    }else{
    return (
        <div className='flex flex-col items-center p-2'>
             <div className="up inline-block font-bold text-lg text-slate-800 border-b-2 border-slate-900 mt-1">
            <p>PRODUCTS</p>
        </div>
        <div className="grid grid-cols-3 gap-4 m-4 w-[100vw]">
            {data.map((item, index) => (
                <div key={index} className="relative max-w-[490px] min-w-[490px]">
                    <div 
                        className={`card mx-10 mt-10  bg-white  rounded-md p-2 flex cursor-pointer justify-around hover:shadow-slate-400 hover:shadow-sm  transition-all duration-500 group border border-slate-300`}
                        onMouseEnter={() => setDisplay(index)} 
                        onMouseLeave={() => setDisplay(-1)}
                    >
                      
                        <div className="up mr-6 relative">
                            <img 
                                src={item.image} 
                                alt="Product"
                                className="rounded-md transition-all duration-300 w-[113px] h-[131px]"
                            />
                        </div>
                     
                        <div className="down">
                            <div className="category text-gray-400 text-sm">
                                <p>{item.category}</p> {/* Product Name */}
                            </div>
                            <div className="description">
                                <p>{item.title|| "Lorem, ipsum dolor sit amet consectetur adipisicing."}</p> {/* Product Description */}
                            </div>
                            <div className="price text-red-700">
                                <p>Rs.{item.price}</p> {/* Product Price */}
                            </div>
                        </div>
                        {display === index && (
                        <div className="absolute bottom-0 left-0 right-0 flex justify-around mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-5000 transform translate-y-6 group-hover:translate-y-0 z-100">
                            <button onClick={()=>navigate(`/products/${item.id}`)} className=" p-2 rounded-md text-white bg-gray-700 cursor-pointer shadow shadow-md shadow-black hover:scale-110">
                                Show More
                            </button>
                            <button onClick={()=>HandleCart(item.id, item.image, item.title, item.description, item.price*200, item.rating.rate)} className="bg-red-600 p-2 rounded-md text-white cursor-pointer shadow shadow-md shadow-black hover:scale-110">
                                Add To Cart
                            </button>
                        </div>
                    )}
                    </div>

                    
                </div>
            ))}
        </div>
        <ToastContainer/>
        </div>
    );
};
}
export default Card;
