import axios from "axios";
import { toast } from "react-toastify";

export const updateData=async(id,updateitem)=>{

    try {
        const response=await axios.get(`http://localhost:3000/user/${id}`);
        const currentUser=response.data;

        const updatedCart=[...currentUser.cart,updateitem];
        
        return axios.patch(`http://localhost:3000/user/${id}`,{cart:updatedCart});
        

    } catch (error) {
        console.log("update api data error:",error);
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
        
        console.log("Failed to get cart data");
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