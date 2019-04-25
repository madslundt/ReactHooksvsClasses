import React, { Component } from 'react';

import Ball from './ball';
import Info from './info';

// App.js
class App extends Component {
    constructor() {
        super();

        this.state = {
            windowWidth: window.innerWidth,
            windowHeight: window.innerHeight,
            mouseX: 0,
            mouseY: 0
        };

        this.handleResize = this.handleResize.bind(this);
        this.handlePosition = this.handlePosition.bind(this);
    }

    handleResize() {
        this.setState({
            windowWidth: window.innerWidth,
            windowHeight: window.innerHeight
        });
    }

    handlePosition(e) {
        this.setState({
            mouseX: e.clientX,
            mouseY: e.clientY
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
        const {
            windowWidth,
            windowHeight,
            mouseX,
            mouseY
        } = this.state;

        return (
            <div>
                <Info
                    width={windowWidth}
                    height={windowHeight}
                    x={mouseX}
                    y={mouseY}
                />

                <Ball />
            </div>
        );
    }
}

export default App;