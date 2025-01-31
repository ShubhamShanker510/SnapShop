import { createSlice, current } from "@reduxjs/toolkit";

const shareDataSlice = createSlice({
  name: "user",
  initialState:{
    currentUser:null,
    cartId:null,
    price:0,
  },
  reducers: {

     getUserData: (state, action) => {
      state.currentUser = action.payload; 
    },
    getUserCartId:(state,action)=>{
      state.cartId=action.payload
    },
    getPrice:(state,action)=>{
      state.price=action.payload
    }
  },
});


export const { getUserData,getUserCartId, getPrice } = shareDataSlice.actions;

export default shareDataSlice.reducer;
