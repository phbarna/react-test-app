import { useState, useEffect } from "react";

export default function AutoCount() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1500);
  }, [count]);

  return (
    <>
      <div className="intro">
        An example of using state with a set counter
      </div>
      <h1>I have rendered {count} times!</h1>
    </>
  );
}