import { createSlice } from "@reduxjs/toolkit";

const initialState={
    items:[],
    totalPrice:0
}


const cartSlice=createSlice({
    name:"cart",
    initialState:null,
    reducers:{
        addItemToCart:(state,action)=>{
            console.log(state.items,"itme")
            state.items.push(action.payload)
        },
        removeItemToCart:(state,action)=>{
            console.log(action.payload, "payload")
            state.items=state.items.filter(item=>item.productId!==action.payload)
        },
        updatedPrice:  (state) => {
            state.totalPrice = state.items.reduce((total, item) => {
              return total + item.price * item.quantity;
            });
        }
         
    }
})

export const {addItemToCart,removeItemToCart,updatedPrice}=cartSlice.actions;
export default cartSlice.reducer;