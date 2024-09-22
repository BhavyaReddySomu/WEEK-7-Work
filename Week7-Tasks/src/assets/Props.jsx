import React from 'react';

function UserDisplay(props) {
  const { name, age } = props;
  return (
    <div>
      Name: {name}<br />
      Age: {age}
    </div>
  );
}

export default UserDisplay;