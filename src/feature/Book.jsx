import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";

import { ordered, restocked } from "./bookSlice";

const Book = () => {
  const [Value, setValue] = useState(1);
  const noOfBook = useSelector((state) => state.book.noOfBooks);
  const dispatch = useDispatch();
  return (
    <div>
      <h1> Total Book - {noOfBook} </h1>
      <input
        type="number"
        value={Value}
        onChange={(e) => setValue(parseInt(e.target.value))}
      />
      <button onClick={() => dispatch(ordered(Value))}>Ordered</button>
      <button onClick={() => dispatch(restocked(Value))}> Restocked</button>
    </div>
  );
};

export default Book;
