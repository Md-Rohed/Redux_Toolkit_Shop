import { configureStore } from "@reduxjs/toolkit";
import bookReducer from "../feature/bookSlice";
const store = configureStore({
  reducer: {
    book: bookReducer,
  },
});

export default store;
