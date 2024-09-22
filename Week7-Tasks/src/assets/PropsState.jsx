import React, { useState } from 'react';

function PropsVsState() {
  const [stateValue, setStateValue] = useState('State Value');
  const propValue = 'Prop Value';

  return (
    <div>
      <p>State Value: {stateValue}</p>
      <p>Prop Value: {propValue}</p>
    </div>
  );
}

export default PropsVsState;