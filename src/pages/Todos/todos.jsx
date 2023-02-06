import { memo } from "react";
import { Button } from '@chakra-ui/react'

const Todos = ({ todos, addTodo }) => {
  console.log("child render");
  return (
    <>
      <h2>My Todos</h2>
      {todos.map((todo, index) => {
        return <p key={index}>{todo}</p>;
      })}
     <Button mb={6} margin="12px" colorScheme="teal" onClick={addTodo}>Add Todo</Button>
    </>
  );
};

export default memo(Todos);