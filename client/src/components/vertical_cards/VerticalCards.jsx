import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify';
import { addtoCart} from '../../hooks/apiCall';
import { useDispatch, useSelector } from 'react-redux';
import { addItemToCart } from '../../redux/cartSlice';


const VerticalCards = ({data}) => {
    const navigate=useNavigate();
    // const dispatch=useDispatch()
    const userData= useSelector((store) => store.user.currentUser);
    
    // id, image, title, price, description, rate, quantity, category 

    const HandleCart=async (id,image,title,description,price,rate,category)=>{
        console.log("price", price)
        console.log("datatype of price=>",typeof(price))

              const cartData={
                  id: String(id),
                  image,
                  title,
                  price,
                  description,
                  rate,
                  quantity:1,
                  category
              }
              if (userData===null) {
                return toast.warn("Please login", { autoClose: 3000 });
              }
              
      
              await addtoCart(cartData)
              .then(()=>toast.success("Added to cart"),{autoClose:3000, position: "top-center"})
              .catch(()=>toast.error("Somethng went wrong"),{autoClose:3000, position: "top-center"})
          }
   
    

  return (
    <div className="vertical_cards p-5 mb-6 grid grid-cols-4 gap-20">
        {
        data.map((item,index)=>(
            <div className="div mt-10 border w-10/12 h-[440px] bg-white flex flex-col p-3 hover:shadow hover:shadow-2xl hover:shadow-gray-600" key={index}>
            <div className="img flex justify-center items-center">
                <img src={item.image} alt="" className='h-[200px]'/>
            </div>
            <div className="content">
                <div className="product_name mb-4">
                    <p className='text-slate-800 font-semibold'>{item.category}</p>
                    <p className='font-semibold'>{item.title.slice(0, 20)} Lorem, ipsum doloidr sit amet consectetur adipisicing elit.</p>
                    <p className='border border-black w-4/12 p-1 text-sm shadow'>{item.rating.rate}/5 ⭐</p>
                    <p className='font-bold text-orange-600 text-sm mt-6'>Rs.{item.price*200}</p>
                </div>
                <div className="btn flex items-center justify-around">
                    <div className="show_morebtn mr-2">
                        <button className=' bg-gray-700 p-1 text-white rounded-sm hover:bg-gray-800 hover:shadow hover:shadow-sm hover:shadow-gray-600' onClick={()=>navigate(`/products/${item.id}`)}>Show More</button>
                    </div>
                    <div className="cartBtn">
                        <button onClick={()=>HandleCart(item.id, item.image, item.title, item.description, item.price*200, item.rating.rate, item.category)} className=' bg-red-700 p-1 text-white rounded-sm hover:bg-red-800 hover:shadow hover:shadow-sm hover:shadow-gray-600'>Add to Cart</button>
                    </div>
                </div>
            </div>
            <ToastContainer/>
        </div>
        ))
    }
        
        
    </div>
    
  )
}

export default VerticalCards