import React, { useEffect, useState } from 'react';
import axios from 'axios';


const Card = () => {
    const [display, setDisplay] = useState(-1);
    const [data, setData]=useState([]);

    useEffect(() => {
        axios.get("https://fakestoreapi.com/products?limit=6") 
        .then((res) => setData(res.data)) 
        .catch((err) => console.error(err));

    }, [])
    

    return (
        <div className='flex flex-col p-2'>
        <div className="grid grid-cols-3 gap-4 m-4 w-[100vw]">
            {data.map((item, index) => (
                <div key={index} className="relative max-w-[490px] min-w-[490px]">
                    <div 
                        className={`card mx-10 mt-10 border border-gray-400 rounded-md p-2 flex cursor-pointer justify-around shadow-black shadow-sm transition-all duration-500 group`}
                        onMouseEnter={() => setDisplay(index)} 
                        onMouseLeave={() => setDisplay(-1)}
                    >
                        {/* Image Section */}
                        <div className="up mr-6 relative">
                            <img 
                                src={item.image}  // Default image for products
                                alt="Product"
                                className="rounded-md transition-all duration-300 w-[200px] h-[110px]"
                            />
                        </div>
                        {/* Card Details */}
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
                            <button className=" p-2 rounded-md text-white bg-gray-700 cursor-pointer shadow shadow-md shadow-black hover:scale-110">
                                Show More
                            </button>
                            <button className="bg-red-600 p-2 rounded-md text-white cursor-pointer shadow shadow-md shadow-black hover:scale-110">
                                Add To Cart
                            </button>
                        </div>
                    )}
                    </div>

                    
                </div>
            ))}
        </div>
        </div>
    );
};

export default Card;
