import React, { useState } from 'react';
import DisplayValue from './DisplayValue'; 
const ValueManager = () => {
  const [value, setValue] = useState(0);
  const incrementValue = () => {
    setValue(value + 1);
  }; const decrementValue = () => {
    setValue(value - 1);
  };
  return (
    <div>
      <h1>Value Manager</h1>
      <DisplayValue 
        value={value} 
        increment={incrementValue} 
        decrement={decrementValue} 
      />
      <DisplayValue 
        value={value} 
        increment={incrementValue} 
        decrement={decrementValue} 
      />
    </div>
  );
};

export default ValueManager;