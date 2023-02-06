import { useState, useCallback } from "react";
import Todos from "./todos.jsx";
import { Button } from '@chakra-ui/react'


export default function TodosParent() {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  const increment = () => {
    setCount((c) => c + 1);
  };
  
  const addTodo = useCallback(() => {
    setTodos((t) => [...t, "New Todo"]);
  }, []);

  return (
    <>
      <div className="intro">
        Using callbacks demo (need to look at console.log for click)
      </div>
      <Todos todos={todos} addTodo={addTodo} />
      <hr />
      <div>
        Count: {count}
        <Button mb={6} margin="12px" colorScheme="teal" onClick={increment}>+</Button>
      </div>
    </>
  );
};

