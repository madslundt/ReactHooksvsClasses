import React, { Component } from 'react';

import Ball from './ball';
import Info from './info';

// App.js
class App extends Component {
    constructor() {
        super();

        this.state = {
            windowSize: {
                width: window.innerWidth,
                height: window.innerHeight
            },
            mousePosition: {
                x: 0,
                y: 0
            }
        };
    }

    handleResize() {
        this.setState({
            width: window.innerWidth,
            height: window.innerHeight
        });
    }

    handlePosition(e) {
        this.setState({
            x: e.clientX,
            y: e.clientY
        });
    }

    componentDidMount() {
        window.addEventListener('resize', this.handleResize);
        window.addEventListener('mousemove', this.handlePosition);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize);
        window.removeEventListener('mousemove', this.handlePosition);
    }

    render() {
        const { width, height } = this.state.windowSize;
        const { x, y } = this.state.mousePosition;

        return (
            <div>
                <Info
                    width={width}
                    height={height}
                    x={x}
                    y={y}
                />

                <Ball />
            </div>
        );
    }
}

export default App;