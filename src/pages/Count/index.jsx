import { useState } from "react";
import ReactDOM from "react-dom/client";

export default function Count() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((c) => c + 1);
  };

  return (
    <>
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
      </div>
    </>
  );
}

