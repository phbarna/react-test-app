import { useState } from "react";
import { Button } from '@chakra-ui/react'
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
        <Button mb={6} margin="12px" colorScheme="teal" onClick={increment}>+</Button>
      </div>
    </>
  );
}

