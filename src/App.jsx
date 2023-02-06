import { useState } from "react";

import "./App.css";
import Book from "./feature/Book";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Book />
    </div>
  );
}

export default App;
