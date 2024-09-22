import React, { Component } from 'react';

class Button extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        };
    }

    handleClick = () => {
        this.setState(prevState => ({ count: prevState.count + 1 }));
    };

    render() {
        return (
            <div>
                <h1>Click Counter</h1>
                <p>Button clicked: {this.state.count} times</p>
                <button onClick={this.handleClick}>Click me!</button>
            </div>
        );
    }
}

export default ClickCounter;
