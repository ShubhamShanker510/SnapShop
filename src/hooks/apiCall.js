import axios from "axios";
import { toast } from "react-toastify";

export const updateData = async (id, updateItem, itemId, quantity) => {
    try {
      const response = await axios.get(`http://localhost:3000/user/${id}`);
      const currentUser = response.data;
  
      if (currentUser) {
        const itemExists = currentUser.cart.some((item) => item.id === itemId);
  
        if (itemExists) {
          const updatedCart = currentUser.cart.map((item) =>
            item.id === itemId
              ? { ...item, quantity: item.quantity + 1 }
              : item
          );
          return axios.patch(`http://localhost:3000/user/${id}`, { cart: updatedCart });
        } else {
          const updatedCart = [...currentUser.cart, updateItem];
          return axios.patch(`http://localhost:3000/user/${id}`, { cart: updatedCart });
        }
      }
    } catch (error) {
      console.error("update API data error:", error);
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