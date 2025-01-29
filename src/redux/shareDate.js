import { createSlice, current } from "@reduxjs/toolkit";

const shareDataSlice = createSlice({
  name: "user",
  initialState:{
    currentUser:null
  },
  reducers: {

     getUserData: (state, action) => {
      state.currentUser = action.payload; 
    },
  },
});


export const { getUserData } = shareDataSlice.actions;

export default shareDataSlice.reducer;
