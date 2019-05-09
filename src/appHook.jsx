import React, { useState, useEffect } from 'react';

import Ball from './ball';
import Info from './info';

// windowSize.js
const useWindowSize = () => {
    const [size, setSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });

    useEffect(() => {
        const handleResize = () => setSize({
            width: window.innerWidth,
            height: window.innerHeight,
        });

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, []);

    return size;
}

// mousePosition.js
const useMousePosition = () => {
    const [position, setPosition] = useState({
        x: 0,
        y: 0,
    });

    useEffect(() => {
        const handlePosition = e => setPosition({
            x: e.clientX,
            y: e.clientY,
        });

        window.addEventListener('mousemove', handlePosition);

        return () => {
            window.removeEventListener('mousemove', handlePosition);
        };
    }, []);

    return position;
}

// app.jsx
const App = () => {
    const window = useWindowSize();
    const mouse = useMousePosition();

    return (
        <div>
            <h2>App with a hook</h2>
            <Info
                {...window}
                {...mouse}
            />

            <Ball />
        </div>
    );
}

export default App;