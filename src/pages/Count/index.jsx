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
        A count progam.  Beginner level - demonstrates state at its simplest
      </div>
        Count: {count}
        <button onClick={increment}>+</button>
      </div>
    </>
  );
}

