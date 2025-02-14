import axios from "axios";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { getPrice } from "../redux/shareDate";


export const addtoCart = async (cartData) => {
    try {
      const response = await axios.post('http://localhost:3000/api/cart/add-to-cart', cartData, {
        withCredentials: true
      });
      console.log("Response from cart=>", response.data);
      return response.data;
    } catch (error) {
      console.log("Error in cart response=>", error);
      throw new Error("Failed to add item to cart");
    }
  };
  

export const updateWihlistData=async(id,updateitem)=>{
    try {
        const response=await axios.get(`http://localhost:3000/user/${id}`);
        const currentUser=response.data;

        const updatedWishlist=[...currentUser.wishlist,updateitem];
        return axios.patch(`http://localhost:3000/user/${id}`,{wishlist:updatedWishlist});

    } catch (error) {
        console.log("update wislist api data error:",error);
    }
}

export const getCartData=async(id)=>{
    try {
        const response=await axios.get(`http://localhost:3000/user/${id}`);

        if(response.data && response.data.cart){
            return response.data.cart;
        }else{
            console.log("No cart data found");
        }

    } catch (error) {
        
        console.log("Failed to get cart data",error);
    }
    
}

export const getWishlistData=async(id)=>{
     try {
        const response=await axios.get(`http://localhost:3000/user/${id}`);

        if(response.data && response.data.wishlist){
            return response.data.wishlist;
        }else{
            console.log("No wishlist data found");
        }
     } catch (error) {
        console.log("Failed to get wishlist data",error);
     }
}

export const updatecartQuantity=async(emailid,itemId,newQuantity)=>{
    try {
        const response=await axios.get(`http://localhost:3000/user/${emailid}`);
        console.log("User id",emailid)
        const currentUser=response.data

        const updatedData=currentUser.cart.map((item)=>{
            if(item.id==itemId){
                return { ...item, quantity: newQuantity };
            }
            return item;
        })

        const updatedUserData = {
            ...currentUser,
            cart: updatedData, 
          };
      
       
          await axios.patch(`http://localhost:3000/user/${emailid}`, updatedUserData)


    } catch (error) {
        console.log("Update cart quantity failed",error);
    }
    
}

export const deletecartdata=async(id,productId)=>{
    const response=await axios.get(`http://localhost:3000/user/${id}`)
    const currentUser=response.data;

    const updatedCart = currentUser.cart.filter(item => item.id !== productId);
    
    await axios.patch(`http://localhost:3000/user/${id}`, { cart: updatedCart });

    return getCartData()
}

export const deletewishlistdata=async(id,productId)=>{
    const response=await axios.get(`http://localhost:3000/user/${id}`)
    const currentUser=response.data;

    const updatedWishlist = currentUser.wishlist.filter(item => item.id !== productId);
    
    await axios.patch(`http://localhost:3000/user/${id}`, { wishlist: updatedWishlist });

    return getCartData()
}
export const getUpdatedPrice = async (id, dispatch) => {
    try {
      const response = await axios.get(`http://localhost:3000/user/${id}`);
      const currentUser = response.data;
  
      const cartLength = currentUser.cart.length;
      let totalPrice = 0;
      let price=0;
      let quantity=0;
  
      for (let i = 0; i < cartLength; i++) {
        price = currentUser.cart[i].price;
        quantity = currentUser.cart[i].quantity;
        totalPrice += (price * quantity);
      }
  
      dispatch(getPrice(totalPrice));
    } catch (error) {
      console.log("Failed to get updated price", error);
}
}

export const deleteAllCartDelete=async(id)=>{
    const response=await axios.get(`http://localhost:3000/user/${id}`)
    const currentUser=response.data;
    await axios.patch(`http://localhost:3000/user/${id}`, { cart: [] });



}