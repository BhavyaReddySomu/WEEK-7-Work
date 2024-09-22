import React, { useState } from 'react';

function ParentComponent() {
  const [sharedState, setSharedState] = useState('Shared State');

  const updateSharedState = (newState) => {
    setSharedState(newState);
  };

  return (
    <div>
      <ChildComponent1 sharedState={sharedState} onUpdate={updateSharedState} />
      <ChildComponent2 sharedState={sharedState} onUpdate={updateSharedState} />
    </div>
  );
}

function ChildComponent1(props) {
}

function ChildComponent2(props) {

}

export default ParentComponent;