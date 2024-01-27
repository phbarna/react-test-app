
// ParentComponent.jsx
import React, { useState } from 'react';
import ChildComponent from './ChildComponent';


function ParentComponent() {
  const [parentState, setParentState] = useState('Initial state in parent');

  // Callback function to update the state in the parent component
  const updateParentState = (newState) => {
    setParentState(newState);
  };

  return (
    <div>
 
      <h1>Parent Component</h1>
      <p>Parent State: {parentState}</p>
      {/* Pass the callback function as a prop to the child component */}
      <ChildComponent updateParentState={updateParentState} />
    </div>
  );
}

export default ParentComponent;
