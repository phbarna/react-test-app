// ChildComponent.jsx
import React, { useState } from 'react';
import './ChildComponent.css'; // Import a CSS file for styling

function ChildComponent({ updateParentState }) {
  const [childState, setChildState] = useState('Initial state in child');

  const handleButtonClick = () => {
    // Update the parent component's state by calling the callback function
    updateParentState('New state from child');
  };

  return (
    <div>
      <h1>Child Component</h1>
      <p>Child State: {childState}</p>
      <button className="styled-button" onClick={handleButtonClick}>
        Update Parent State
      </button>
    </div>
  );
}

export default ChildComponent;
