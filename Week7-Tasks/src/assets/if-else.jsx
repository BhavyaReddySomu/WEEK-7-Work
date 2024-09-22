import React, { useState } from 'react';

function ConditionalRendering() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      {isLoggedIn ? (
        <p>Welcome, user!</p>
      ) : (
        <p>Please log in to see the content.</p>
      )}
    </div>
  );
}

export default ConditionalRendering;