import { useState } from "react";

export default function Count() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((c) => c + 1);
  };

  return (
    <>
      <div>
      <div className="intro">
        A count progam (beginner - demonstrates state as a simplest)
      </div>
        Count: {count}
        <button onClick={increment}>+</button>
      </div>
    </>
  );
}

