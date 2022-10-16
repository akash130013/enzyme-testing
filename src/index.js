import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  let [count, setCount] = useState(0);

  const decrement = () => setCount((count -= 1));
  const increment = () => setCount((count += 1));

  return (
    <div className="App">
      <h1>Testing React Hooks</h1>
      <p>{count}</p>
      <button onClick={decrement}>-</button>

      <button onClick={increment}>+</button>
    </div>
  );
}

export default App;

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
