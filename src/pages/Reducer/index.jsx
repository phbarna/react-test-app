import React, { useReducer } from 'react';

export default function Reducer() {
  // First render will create the state, and it will
  // persist through future renders
  const [sum, dispatch] = useReducer((state, action) => {
    return state + action;
  }, 66);

  return (
    <>
    <div>this pages uses the 'reducer' hook</div>
    <hr/>
      {sum}

      <button onClick={() => dispatch(1)}>
        Add 1
      </button>
    </>
  );
}