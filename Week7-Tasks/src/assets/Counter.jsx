import React, { useState } from 'react';

const Counter = () => {
 
    const [count, setCount] = useState(0);

    const handleClick = () => {
        setCount(prevCount => prevCount + 1);
    };

    return (
        <div>
            <h1>Counter</h1>
            <p>Button clicked: {count} times</p>
            <button onClick={handleClick}>Click me!</button>
        </div>
    );
};

export default Counter;
