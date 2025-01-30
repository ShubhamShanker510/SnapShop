import { createSlice, current } from "@reduxjs/toolkit";

const shareDataSlice = createSlice({
  name: "user",
  initialState:{
    currentUser:null,
    cartId:null
  },
  reducers: {

     getUserData: (state, action) => {
      state.currentUser = action.payload; 
    },
    getUserCartId:(state,action)=>{
      state.cartId=action.payload
    }
  },
});


export const { getUserData,getUserCartId } = shareDataSlice.actions;

export default shareDataSlice.reducer;
