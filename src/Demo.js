import React, { useState } from "react";

const Demo = () => {
  // Define state using useState hook
  const [count, setCount] = useState(0);

  // Event handler function to increment count
  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>Interactive Page</h1>
      <p>Count: {count}</p>
      <button onClick={incrementCount}>Increment</button>
    </div>
  );
};

export default Demo;
