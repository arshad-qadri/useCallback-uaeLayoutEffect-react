import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h3>Counter</h3>
      <h1> {count} </h1>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
};

export default Counter;
