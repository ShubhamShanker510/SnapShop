import React, { useState } from 'react';
import men from '../../assets/images/mens.png';

const Card = () => {
    const [display, setDisplay] = useState(false);

    return (
        <div className="grid grid-cols-3 gap-10">
            <div className="relative mb-10">
                {/* Card Wrapper */}
                <div 
                    className={`card mx-10 mt-10 border border-gray-400 rounded-md p-2 flex cursor-pointer justify-around shadow-black shadow-sm transition-all duration-500 group ${display ? 'blur-sm' : ''}`}
                    onMouseEnter={() => setDisplay(true)} 
                    onMouseLeave={() => setDisplay(false)}
                >
                    {/* Image Section */}
                    <div className="up mr-6 relative">
                        <img 
                            src={men} 
                            alt="Product" 
                            className={`rounded-md w-[400px] transition-all duration-300 `} 
                        />
                    </div>
                    {/* Card Details */}
                    <div className="down">
                        <div className="category text-gray-400 text-sm">
                            <p>Category</p>
                        </div>
                        <div className="description">
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
                        </div>
                        <div className="price text-red-700">
                            <p>Rs 500</p>
                        </div>
                    </div>
                </div>

                {/* Buttons visible on hover */}
                {display && (
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex justify-between w-[80%] px-4 z-10">
                        <button className="border p-2 rounded-md text-white bg-gray-700 cursor-pointer">
                            Show More
                        </button>
                        <button className="bg-red-600 p-2 rounded-md text-white cursor-pointer">
                            Add To Cart
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Card;
