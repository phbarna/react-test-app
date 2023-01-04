import { useState, useEffect } from "react";

export default function AutoCount() {
    const [count, setCount] = useState(0);

    const [test, setTest] = useState(0);
  
    useEffect(() => {
      console.log("use effect in autocount")
      setTimeout(() => {
        setCount((count) => count + 1);
      }, 1500);
    }, [count]);
  
    return <h1>I have rendered {count} times!</h1>;
  }