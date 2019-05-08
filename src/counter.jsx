import React, { Component, useState } from 'react';

// React class
class CounterClass extends Component {
    constructor() {
        super();

        this.state = {
            count: 0
        };

        this.increment = this.increment.bind(this);
    }

    increment() {
        this.setState(state => ({
            count: state.count + 1
        }));
    }

    render() {
        const { count } = this.state;

        return (
            <div>
                <p>{ count }</p>
                <button
                    type="button"
                    onClick={this.increment}
                >Increment</button>
            </div>
        );
    }
}

// React hook
const CounterHook = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    }

    return (
        <div>
            <p>{ count }</p>
            <button
                type="button"
                onClick={increment}
            >Increment</button>
        </div>
    );
}

export {
    CounterClass,
    CounterHook
};
