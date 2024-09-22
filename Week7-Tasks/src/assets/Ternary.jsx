import React, { useState } from 'react';

function ConditionalRenderingTernary() {
  const [showContent, setShowContent] = useState(false);

  return (
    <div>
      <button onClick={() => setShowContent(!showContent)}>Toggle Content</button>
      {showContent ? <p>This content is shown conditionally.</p> : null}
    </div>
  );
}

export default ConditionalRenderingTernary;