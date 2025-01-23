import { createSlice } from "@reduxjs/toolkit";

const shareDataSlice = createSlice({
  name: "data",
  initialState: {
    value: 1,
  },
  reducers: {

    counterVal: (state, action) => {
      state.value = action.payload; 
    },
  },
});


export const { counterVal } = shareDataSlice.actions;

export default shareDataSlice.reducer;
