import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { ordered, restocked } from "./bookSlice";

const Book = () => {
  const noOfBook = useSelector((state) => state.book.noOfBooks);
  const dispatch = useDispatch();
  return (
    <div>
      <h1> Total Book - {noOfBook} </h1>
      <button onClick={() => dispatch(ordered())}>Ordered</button>
      <button onClick={() => dispatch(restocked(5))}> Restocked</button>
    </div>
  );
};

export default Book;
