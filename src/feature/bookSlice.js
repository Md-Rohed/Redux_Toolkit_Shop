import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  noOfBooks: 20,
};

const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {
    ordered: (state) => {
      state.noOfBooks--;
    },
    restocked: (state, action) => {
      state.noOfBooks += action.payload;
    },
  },
});

export default bookSlice.reducer;
export const { ordered, restocked } = bookSlice.actions;
