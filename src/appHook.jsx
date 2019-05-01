import React, { useState, useEffect } from 'react';

import Ball from './ball';
import Info from './info';

// WindowSize.js
const useWindowSize = () => {
    const [size, setSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight
    });

    useEffect(() => {
        const handleResize = () => setSize({
            width: window.innerWidth,
            height: window.innerHeight
        });

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, []);

    return size;
}

// MousePosition.js
const useMousePosition = () => {
    const [position, setPosition] = useState({
        x: 0,
        y: 0
    });

    useEffect(() => {
        const handlePosition = e => setPosition({
            x: e.clientX,
            y: e.clientY
        });

        window.addEventListener('mousemove', handlePosition);

        return () => {
            window.removeEventListener('mousemove', handlePosition);
        };
    }, []);

    return position;
}

// App.js
const App = () => {
    const { width, height } = useWindowSize();
    const { x, y } = useMousePosition();

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

export default App;