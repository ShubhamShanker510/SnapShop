import React, { useCallback, useEffect, useState } from 'react';
import heartImage from '../../assets/images/heart.png';
import Reviews from '../../components/reviews/Reviews';
import left from '../../assets/images/arrow-circle-left.png';
import right from '../../assets/images/arrow-circle-right.png';
import { reviewData1 } from '../../data';
import VerticalCards from '../../components/vertical_cards/VerticalCards';
import axios from 'axios';
import Spinner from '../../components/spinner/Spinner';
import { useParams } from 'react-router-dom';
import Shimmer from '../../components/shimmer/Shimmer';
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 
import {apiCall} from '../../hooks/apiCall.js'


const ShowMore = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [data, setData] = useState([]);
    const [data1, setData1] = useState(null);
    const [iD, setID] = useState(-1);
    const len = reviewData1.length;
    const len1 = reviewData1.length;
    const { id } = useParams();

    const handleNextClick = () => {
        if (currentIndex >= len - 1 && currentIndex >= len1 - 1) {
            setCurrentIndex(0);
        } else {
            setCurrentIndex(currentIndex + 1);
        }
    };

    const handlePrevClick = () => {
        if (currentIndex === 0) {
            setCurrentIndex(len - 1);
        } else {
            setCurrentIndex(currentIndex - 1);
        }
    };

    const url = `https://fakestoreapi.com/products/${id}`;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [userResponse, productResponse] = await Promise.all([
                    axios.get(url),
                    axios.get('https://fakestoreapi.com/products/')
                ]);

                setID(id);

                setData1(userResponse.data);
                const filteredProduct = productResponse.data.filter(
                    (product) => product.category === userResponse.data.category
                );
                setData(filteredProduct);
            } catch (err) {
                console.error(err);
            }
        };

        fetchData();
    }, [id]);

    const wishListData = useCallback((id, image, title, description, price, rate) => {
        const wishlist = {
            productId: id,
            image,
            title,
            price,
            description,
            rate,
        };
        axios.post('http://localhost:3000/wishlist', wishlist);
        toast.success('Added to Wishlist Successfully', { autoClose: 5000 });
    }, []);

    const HandleCart=(id, image, title, description, price, rate)=>{
        const cartData={
            productId: id,
            image,
            title,
            price,
            description,
            rate,
        }
        apiCall(cartData)
        .then(()=>toast.success('Added to Cart Successfully', { autoClose: 5000 }))
        .catch(()=>toast.error('Something went Wrong', { autoClose: 5000 }))
        
    }

    if (!data1 || !data.length || id !== iD) {
        return <Shimmer />;
    }

    return (
        <div className="">
            <div className="top flex justify-between">
                <div className="showMore grid grid-cols-2 bg-white gap-20 p-10 border border-slate-400 rounded-sm m-2 shadow shadow-sm shadow-gray-700 mt-10">
                    <div className="left">
                        <img src={data1.image} alt={data1.title} className="rounded-sm" />
                    </div>
                    <div className="right flex flex-col">
                        <div className="name text-slate-800 text-lg my-3">
                            <p>{data1.title}</p>
                        </div>
                        <div className="description font-extrabold mb-3">
                            <p>{data1.description}</p>
                        </div>
                        <div className="rating font-light text-sm border border-gray-500 p-1 w-[130px] inline-block mb-3 rounded-sm shadow shadow-sm shadow-gray-700">
                            <p>
                                Ratings |{' '}
                                <span className="text-green-800 font-semibold">{data1.rating.rate}</span> /5 ⭐
                            </p>
                        </div>
                        <div className="price text-lg font-bold text-orange-500 mb-3">
                            <p>Rs. {data1.price * 200}</p>
                        </div>
                        <div className="btn flex items-center">
                            <div className="cartbtn border border-red-600 px-[100px] py-1 bg-red-600 text-white rounded-sm hover:bg-white hover:text-red-600 mr-3 cursor-pointer shadow shadow-sm shadow-gray-700">
                                <button onClick={()=>HandleCart(data1.id, data1.image, data1.title, data1.description, data1.price*200, data1.rating.rate)}>ADD TO CART</button>
                            </div>
                            <div className="wishlist cursor-pointer hover:invert-0">
                                <button
                                    onClick={() =>
                                        wishListData(data1.id, data1.image, data1.title, data1.description, data1.price*200, data1.rating.rate)
                                    }
                                >
                                <img src={heartImage} className="hover:scale-125" alt="" width={30} />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="right p-3 mt-10">
                    <div className="reviews flex flex-col justify-between items-center">
                        <Reviews index={currentIndex} />
                        <div className="flex justify-between mt-2">
                            <div className="prevBtn">
                                <img
                                    src={left}
                                    alt=""
                                    className="cursor-pointer hover:scale-110 w-[30px] mr-20"
                                    onClick={handlePrevClick}
                                />
                            </div>
                            <div className="nextBtn">
                                <img
                                    src={right}
                                    alt=""
                                    className="cursor-pointer hover:scale-110 w-[30px]"
                                    onClick={handleNextClick}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="down p-3 flex flex-col items-center justify-center">
                <div className="intersted_head mb-5 font-bold text-lg text-slate-800 border-b-2 border-slate-900">
                    Similar Products
                </div>
                <div className="similarproducts">
                    <VerticalCards data={data} />
                </div>
            </div>

            <ToastContainer />
        </div>
    );
};

export default ShowMore;
