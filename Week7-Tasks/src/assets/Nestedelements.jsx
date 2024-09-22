import React from 'react';

function Nestedelements() {
  function handleOuterClick() {
    console.log('Outer element clicked!');
  }

  function handleInnerClick(event) {
    event.stopPropagation();
    console.log('Inner element clicked!');
  }

  return (
    <div onClick={handleOuterClick}>
      <p>Click me!</p>
      <button onClick={handleInnerClick}>Inner button</button>
    </div>
  );
}

export default Nestedelements;

