import React, { useReducer } from 'react';
import { Button } from '@chakra-ui/react'

export default function Reducer() {
  // First render will create the state, and it will
  // persist through future renders
  const [sum, dispatch] = useReducer((state, action) => {
    
    return state + action;
  }, 66);

  return (
    <>
    <div className="intro">This pages uses the 'reducer' hook</div>
    <hr/>
      {sum}

      <Button mb={6} margin="12px" colorScheme="teal" onClick={() => dispatch(1)}>
        Add 1
      </Button>
    </>
  );
}